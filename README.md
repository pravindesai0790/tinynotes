# TinyNotes

TinyNotes is a Next.js App Router project running on Bun with SQLite.

## Environment

Create a `.env.local` file with:

```bash
DB_PATH=./data/tinynotes.db
AUTH_SECRET=replace-with-a-strong-random-secret
APP_URL=http://localhost:3000
```

## Scripts

- `bun run dev` - start local development server
- `bun run build` - build for production
- `bun run start` - run production build
- `bun run lint` - run oxlint
- `bun tsc --noEmit` - run TypeScript checks
- `bun run format` - format repository files with oxfmt
- `bun run db:migrate` - apply migrations
- `bun run db:migrate:down` - roll back latest migration
