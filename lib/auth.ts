import { Database } from "bun:sqlite";
import { betterAuth } from "better-auth";

declare global {
  var __tinynotesDb: Database | undefined;
}

function normalizeBaseUrl(urlValue: string | undefined): string | undefined {
  if (!urlValue) {
    return undefined;
  }

  const trimmedUrl = urlValue.trim();
  if (!trimmedUrl) {
    return undefined;
  }

  return trimmedUrl.replace(/\/+$/, "");
}

const authSecret =
  process.env.AUTH_SECRET ??
  (process.env.NODE_ENV === "production"
    ? ""
    : "da5d1d1e3911814449a0fc0e835d3daf03bd491d240306b7c1b51e3029f6baf4");

if (!authSecret) {
  throw new Error("AUTH_SECRET is required in production.");
}

const baseURL =
  normalizeBaseUrl(process.env.BETTER_AUTH_URL) ??
  normalizeBaseUrl(process.env.APP_URL) ??
  (process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000");

if (!baseURL) {
  throw new Error("BETTER_AUTH_URL or APP_URL is required in production.");
}

const dbPath = process.env.DB_PATH ?? "./data/tinynotes.db";

const database = globalThis.__tinynotesDb ?? new Database(dbPath, { create: true });
database.run("PRAGMA foreign_keys = ON;");

if (!globalThis.__tinynotesDb) {
  globalThis.__tinynotesDb = database;
}

export const auth = betterAuth({
  database,
  baseURL,
  secret: authSecret,
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
});
