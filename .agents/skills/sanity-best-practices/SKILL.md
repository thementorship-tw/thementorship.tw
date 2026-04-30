---
name: sanity-best-practices
description: Sanity development best practices for the topics used in this repository: schema design, GROQ queries, TypeGen, Visual Editing, images, Portable Text, Studio structure, project structure, page builders, SEO, and Next.js integration. Use this skill whenever working with Sanity schemas, defineType or defineField, GROQ or defineQuery, content modeling, Presentation or preview setups, Sanity-powered Next.js integrations, or when reviewing and fixing this Sanity codebase.
---

# Sanity Best Practices

Comprehensive best practices and integration guides for Sanity development, maintained by Sanity. Use the quick reference below to load only the one or two topic files that match the task.

## When to Apply

Reference these guidelines when:
- Setting up a new Sanity project or onboarding
- Integrating Sanity with Next.js
- Writing GROQ queries or optimizing performance
- Designing content schemas
- Implementing Visual Editing and live preview
- Working with images, Portable Text, or page builders
- Configuring Sanity Studio structure
- Setting up TypeGen for type safety
- Reviewing project structure decisions for this monorepo
- Implementing SEO for a Sanity-powered site

## Quick Reference

### Integration Guides

- `nextjs` - Next.js App Router, Live Content API, embedded Studio
- `project-structure` - Monorepo and embedded Studio patterns

### Topic Guides

- `groq` - GROQ query patterns, type safety, performance optimization
- `schema` - Schema design, field definitions, validation, deprecation patterns
- `visual-editing` - Presentation Tool, Stega, overlays, live preview
- `page-builder` - Page Builder arrays, block components, live editing
- `portable-text` - Rich text rendering and custom components
- `image` - Image schema, URL builder, hotspots, LQIP, Next.js Image
- `studio-structure` - Desk structure, singletons, navigation
- `typegen` - TypeGen configuration, workflow, type utilities
- `seo` - Metadata, sitemaps, Open Graph, JSON-LD

## How to Use

Start with the single framework or topic guide that best matches the request, then read additional references only when the task crosses concerns. Use these reference files for detailed explanations and code examples:

```
references/groq.md
references/schema.md
references/nextjs.md
```

Each reference file contains:
- Comprehensive topic or integration coverage
- Incorrect and correct code examples
- Decision matrices and workflow guidance
- Framework-specific patterns where applicable
