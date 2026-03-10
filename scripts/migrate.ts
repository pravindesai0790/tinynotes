import { Database } from "bun:sqlite";
import { existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type MigrationDirection = "up" | "down";

type MigrationPair = {
  upPath: string;
  downPath: string;
};

type MigrationRecord = {
  version: string;
  applied_at: string;
};

const UP_SUFFIX = ".up.sql";
const DOWN_SUFFIX = ".down.sql";
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const MIGRATIONS_DIR = resolve(SCRIPT_DIR, "..", "migrations");

function parseDirection(input: string | undefined): MigrationDirection {
  if (input === "up" || input === "down") {
    return input;
  }

  throw new Error('Invalid direction. Use "up" or "down".');
}

function parseMigrationFileName(
  fileName: string,
): { version: string; direction: MigrationDirection } | null {
  if (fileName.endsWith(UP_SUFFIX)) {
    const version = fileName.slice(0, -UP_SUFFIX.length);
    return version.length > 0 ? { version, direction: "up" } : null;
  }

  if (fileName.endsWith(DOWN_SUFFIX)) {
    const version = fileName.slice(0, -DOWN_SUFFIX.length);
    return version.length > 0 ? { version, direction: "down" } : null;
  }

  return null;
}

function loadMigrationPairs(migrationsDir: string): Map<string, MigrationPair> {
  if (!existsSync(migrationsDir)) {
    throw new Error(`Migrations directory not found: ${migrationsDir}`);
  }

  const partialPairs = new Map<string, Partial<MigrationPair>>();
  const entries = readdirSync(migrationsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile()) {
      continue;
    }

    const parsed = parseMigrationFileName(entry.name);
    if (!parsed) {
      continue;
    }

    const migrationPath = resolve(migrationsDir, entry.name);
    const existing = partialPairs.get(parsed.version) ?? {};

    if (parsed.direction === "up") {
      if (existing.upPath) {
        throw new Error(`Duplicate UP migration for version "${parsed.version}".`);
      }
      existing.upPath = migrationPath;
    } else {
      if (existing.downPath) {
        throw new Error(`Duplicate DOWN migration for version "${parsed.version}".`);
      }
      existing.downPath = migrationPath;
    }

    partialPairs.set(parsed.version, existing);
  }

  if (partialPairs.size === 0) {
    throw new Error(`No migration files found in: ${migrationsDir}`);
  }

  const missingPairs: string[] = [];
  const sortedVersions = [...partialPairs.keys()].sort((a, b) => a.localeCompare(b));
  const finalizedPairs = new Map<string, MigrationPair>();

  for (const version of sortedVersions) {
    const pair = partialPairs.get(version);
    if (!pair?.upPath || !pair.downPath) {
      missingPairs.push(version);
      continue;
    }

    finalizedPairs.set(version, {
      upPath: pair.upPath,
      downPath: pair.downPath,
    });
  }

  if (missingPairs.length > 0) {
    throw new Error(`Missing UP/DOWN pair for migration version(s): ${missingPairs.join(", ")}`);
  }

  return finalizedPairs;
}

function ensureDbParentDirectory(dbPath: string): void {
  if (dbPath === ":memory:" || dbPath === "") {
    return;
  }

  const absoluteDbPath = resolve(process.cwd(), dbPath);
  const parentDirectory = dirname(absoluteDbPath);

  if (!existsSync(parentDirectory)) {
    mkdirSync(parentDirectory, { recursive: true });
  }
}

function ensureSchemaMigrationsTable(db: Database): void {
  db.run(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      version TEXT PRIMARY KEY,
      applied_at TEXT NOT NULL
    );
  `);
}

function listAppliedVersions(db: Database): Set<string> {
  const rows = db.query("SELECT version FROM schema_migrations").all() as { version: string }[];
  return new Set(rows.map((row) => row.version));
}

function applyPendingMigrations(db: Database, migrationPairs: Map<string, MigrationPair>): void {
  const appliedVersions = listAppliedVersions(db);
  const insertMigration = db.query(
    "INSERT INTO schema_migrations (version, applied_at) VALUES (?1, ?2)",
  );

  for (const [version, pair] of migrationPairs) {
    if (appliedVersions.has(version)) {
      continue;
    }

    const sql = readFileSync(pair.upPath, "utf8");
    const now = new Date().toISOString();
    const apply = db.transaction(
      (migrationSql: string, migrationVersion: string, appliedAt: string) => {
        db.run(migrationSql);
        insertMigration.run(migrationVersion, appliedAt);
      },
    );

    apply(sql, version, now);
    console.log(`Applied migration: ${version}`);
  }
}

function rollbackLatestMigration(db: Database, migrationPairs: Map<string, MigrationPair>): void {
  const latestApplied = db
    .query(
      "SELECT version, applied_at FROM schema_migrations ORDER BY applied_at DESC, version DESC LIMIT 1",
    )
    .get() as MigrationRecord | null;

  if (!latestApplied) {
    console.log("No applied migrations to roll back.");
    return;
  }

  const pair = migrationPairs.get(latestApplied.version);
  if (!pair) {
    throw new Error(
      `No DOWN migration file found for applied version "${latestApplied.version}". Cannot roll back.`,
    );
  }

  const sql = readFileSync(pair.downPath, "utf8");
  const deleteMigration = db.query("DELETE FROM schema_migrations WHERE version = ?1");
  const rollback = db.transaction((migrationSql: string, migrationVersion: string) => {
    db.run(migrationSql);
    deleteMigration.run(migrationVersion);
  });

  rollback(sql, latestApplied.version);
  console.log(`Rolled back migration: ${latestApplied.version}`);
}

function main(): void {
  let db: Database | null = null;

  try {
    const direction = parseDirection(process.argv[2]);
    const dbPath = process.env.DB_PATH ?? "./data/tinynotes.db";
    ensureDbParentDirectory(dbPath);

    const migrationPairs = loadMigrationPairs(MIGRATIONS_DIR);

    db = new Database(dbPath, { create: true });
    db.run("PRAGMA foreign_keys = ON;");
    ensureSchemaMigrationsTable(db);

    if (direction === "up") {
      applyPendingMigrations(db, migrationPairs);
      console.log("Migration run complete.");
      return;
    }

    rollbackLatestMigration(db, migrationPairs);
    console.log("Rollback run complete.");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Migration command failed: ${message}`);
    process.exitCode = 1;
  } finally {
    db?.close(false);
  }
}

main();
