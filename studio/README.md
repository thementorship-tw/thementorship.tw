# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## Step 1. Define Schema Types

**Location:** `/studio/src/schemaTypes`

Organize your schemas into:

- `/documents` — top-level content types (e.g. `activity`, `page`)
- `/objects` — reusable schema blocks (e.g. `timeRange`, `seo`)

## Step 2. Register Schema Types

**Location:** `/studio/src/schemaTypes/index.ts`

## Step 3. Write GROQ Queries

**Location:** `/nextjs-app/sanity/lib/queries.ts`

## Step 4. Run commands to Generate Query Result Types

To keep your frontend type-safe, you can generate result types from your schema and queries.

- In `/studio` repo:

```bash
pnpm extract-types
```

This will output `schema.json`, which describes your Sanity schema structure.

- In `/next-app` repo:

```bash
pnpm typegen
```

This will generate `sanity.types.ts` from your queries and `schema.json`.
