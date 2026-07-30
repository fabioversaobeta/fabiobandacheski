# fabiobandacheski.com

Personal site and blog, built with React + TypeScript, statically generated with [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg), styled with Tailwind CSS v4.

## Stack

- **React 19 + TypeScript** — UI
- **vite-react-ssg** — static-site generation (every route pre-rendered to real HTML for SEO/performance), on top of React Router v6 data routers
- **Tailwind CSS v4** — styling, with a custom design token theme in [src/index.css](src/index.css)
- **react-markdown** — renders blog post content, loaded only on blog post pages (route-level code splitting)

## Commands

```bash
npm run dev       # local dev server (CSR)
npm run build     # type-check, then build + statically render every route to dist/
npm run preview   # serve the dist/ build locally to sanity-check before deploying
npm run lint      # oxlint
```

## Project structure

```
src/
  config/site.ts        # name, email, social links, site-wide SEO defaults — edit this first
  data/skills.ts         # skills shown on Home/About
  data/projects.ts       # projects shown on /projects — currently empty, see below
  content/blog/*.md       # blog posts (frontmatter + markdown)
  components/            # layout, ui, and SEO components
  pages/                  # one file per route
  lib/posts.ts            # loads & parses everything in content/blog
  routes.tsx              # route table (each non-Home page is lazy-loaded)
```

## Adding a blog post

Add a new `.md` file to `src/content/blog/` with frontmatter:

```md
---
title: "Post Title"
description: "One or two sentences for previews and meta description."
date: "2026-05-01"
tags: ["Tag One", "Tag Two"]
---

Post content in Markdown.
```

The file name becomes the URL slug (`my-post.md` → `/blog/my-post`). Set `draft: true` to keep a post out of production builds while it's in progress. No restart or registration needed — `npm run build` picks up every file in the folder automatically.

## Adding a project

Edit [src/data/projects.ts](src/data/projects.ts) and push an entry to the `projects` array:

```ts
{
  slug: "project-slug",
  title: "Project Name",
  description: "What it does.",
  stack: ["React", "Node.js"],
  url: "https://example.com",   // optional
  repo: "https://github.com/...", // optional
}
```

The `/projects` page shows an empty state until at least one project is added.

## SEO

- Every route is pre-rendered to static HTML (`dist/<route>/index.html`) with the correct `<title>`, meta description, Open Graph/Twitter tags, canonical URL, and JSON-LD (`Person` on Home, `BlogPosting` on posts) — see [src/components/seo/Seo.tsx](src/components/seo/Seo.tsx).
- `npm run build` also generates `dist/sitemap.xml` and copies `dist/index.html` to `dist/404.html` as a fallback for static hosts (see [scripts/generate-sitemap.mjs](scripts/generate-sitemap.mjs)).
- Before deploying, update `url` in [src/config/site.ts](src/config/site.ts) and the `SITE_URL` constant in the sitemap script if the domain changes.
- Add a real `public/og-image.png` (1200×630) for social share previews — there's a reference to `/og-image.png` in the SEO component but no image file yet.

## Deploying

The output in `dist/` after `npm run build` is a plain static site — deploy it to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.). No server runtime is required.
