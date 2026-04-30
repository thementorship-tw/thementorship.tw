---
title: Sanity Project Structure
description: Project structure patterns for Sanity projects including monorepo and embedded Studio setups.
---

# Sanity Project Structure

## Standalone Studio

Best for content-only projects, API-first architectures, or when frontend is managed separately.

```
your-project/
├── schemaTypes/
│   ├── index.ts
│   ├── documents/
│   ├── objects/
│   └── blocks/
├── sanity.config.ts
├── sanity.cli.ts
└── package.json
```

**Use cases:**
- Content modeling with MCP/AI tools (no frontend needed)
- Headless CMS with external consumers
- Prototyping and content design

## Embedded Studio (Recommended for Next.js)

Best for most Next.js projects. Unified deployment, simpler setup.

```
your-project/
├── src/
│   ├── app/                    # Next.js App Router
│   │   └── studio/[[...tool]]/ # Embedded Studio route
│   └── sanity/
│       ├── lib/
│       │   ├── client.ts
│       │   ├── live.ts         # defineLive setup
│       │   └── queries.ts
│       └── schemaTypes/
│           ├── index.ts
│           ├── documents/
│           ├── objects/
│           └── blocks/
├── sanity.config.ts
├── sanity.cli.ts               # CLI + TypeGen configuration
└── sanity.types.ts             # Generated types (from TypeGen)
```

## Monorepo

Best when you need separation of concerns, multiple frontends, or strict dependency isolation.

```
your-project/
├── apps/
│   ├── studio/                 # Sanity Studio (standalone)
│   │   ├── src/
│   │   │   └── schemaTypes/
│   │   │       ├── index.ts
│   │   │       ├── documents/
│   │   │       ├── objects/
│   │   │       └── blocks/
│   │   ├── sanity.config.ts
│   │   ├── sanity.cli.ts
│   │   └── package.json
│   └── web/                    # Next.js (or other framework)
│       ├── src/
│       │   ├── app/
│       │   └── sanity/
│       │       ├── client.ts
│       │       ├── live.ts
│       │       └── queries.ts
│       └── package.json
├── pnpm-workspace.yaml
└── package.json
```

**Setup:**
1. Add web app URL to CORS origins in [Sanity Manage](https://www.sanity.io/manage)
2. Configure `typegen` in `sanity.cli.ts` to read schema from `apps/studio` and output types to `apps/web`

## File Naming Conventions

- **kebab-case** for all files: `user-profile.ts`, `hero-block.ts`
- `.ts` for schemas/utilities, `.tsx` for React components
- Each schema exports a named const matching filename

## Schema Directory Structure

```
schemaTypes/
├── index.ts              # Exports all types
├── documents/            # Standalone content types
│   ├── post.ts
│   └── author.ts
├── objects/              # Embeddable/reusable types
│   ├── seo.ts
│   └── link.ts
├── blocks/               # Portable Text blocks
│   ├── hero.ts
│   └── callout.ts
└── shared/               # Shared field definitions
    └── seoFields.ts
```

## Key Files

| File | Purpose |
|------|---------|
| `sanity.config.ts` | Studio configuration (plugins, schema, structure) |
| `sanity.cli.ts` | CLI configuration (project ID, dataset, TypeGen config) |
| `structure.ts` | Custom desk structure |

## Repo-specific Note

This repository uses a root-level monorepo layout with separate `nextjs-app/` and `studio/` folders, rather than an embedded Studio setup or an `apps/web` + `apps/studio` naming convention.

Current project shape:

```text
your-project/
├── nextjs-app/          # Next.js frontend application
│   ├── app/
│   ├── components/
│   ├── sanity/
│   │   └── lib/
│   ├── package.json
│   └── sanity.types.ts
├── studio/              # Standalone Sanity Studio
│   ├── src/
│   │   ├── lib/
│   │   ├── schemaTypes/
│   │   └── structure/
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   └── package.json
├── pnpm-workspace.yaml
└── package.json
