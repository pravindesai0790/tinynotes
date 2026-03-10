declare module "bun:sqlite" {
  type SQLQueryBindings =
    | string
    | number
    | bigint
    | boolean
    | null
    | Uint8Array
    | Record<string, string | number | bigint | boolean | null | Uint8Array>;

  type Statement = {
    all(...params: SQLQueryBindings[]): unknown[];
    get(...params: SQLQueryBindings[]): unknown;
    run(...params: SQLQueryBindings[]): { lastInsertRowid: number; changes: number };
  };

  export class Database {
    constructor(
      filename?: string,
      options?: {
        readonly?: boolean;
        create?: boolean;
        readwrite?: boolean;
        safeIntegers?: boolean;
        strict?: boolean;
      },
    );

    query(sql: string): Statement;
    run(sql: string, params?: SQLQueryBindings): { lastInsertRowid: number; changes: number };
    close(throwOnError?: boolean): void;
    transaction<T extends (...args: any[]) => any>(
      insideTransaction: T,
    ): T & {
      deferred: T;
      immediate: T;
      exclusive: T;
    };
  }
}
