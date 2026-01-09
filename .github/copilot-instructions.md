Project: Krisiyukta Website (React + Vite)

Quick goal

- Help contributors and AI agents make small, safe edits: UI tweaks, content, and Strapi-backed blog fixes. Prefer minimal, non-breaking changes and preserve existing component APIs.

High-level architecture (what to know first)

- Frontend-only single-page app built with Vite + React (src/). Routing lives in `src/App.jsx` (React Router). Pages are under `src/pages/` and smaller UI pieces under `src/components/`.
- Styling: TailwindCSS integrated via the Vite plugin; global styles in `src/index.css` and `output.css` at repo root.
- Data: content for the blog comes from a Strapi headless CMS. Thin wrapper in `src/lib/strapi.ts` exposes `getPosts(page, pageSize)` and `getPost(slug)`.
- Env / types: runtime Strapi config comes from env vars `VITE_STRAPI_URL` and `VITE_STRAPI_TOKEN`. Types for these are declared in `src/vite-env.d.ts`.
- Deployment: Hosted on Vercel with a SPA rewrite (`vercel.json`) — expect client-side routing to be used for all paths.

Key files to inspect when changing behavior

- `src/lib/strapi.ts` — canonical place for Strapi requests. All network calls should go through here.
  - Example patterns: building a query with URLSearchParams; `rq()` throws on non-OK responses.
- `src/pages/Blogs.jsx` and `src/pages/BlogPost.jsx` — how posts are fetched, displayed and navigated. Use `documentId` as the slug when routing.
- `src/App.jsx` — app routes and page transition wrapper; editing routes or top-level layout should be done here.
- `src/constants/Color.js` — central color tokens; used widely for inline style glue.

Project-specific conventions and patterns

- Data fetching:
  - Use `src/lib/strapi.ts` helpers. Components call `getPosts()` or `getPost(slug)` and expect the returned JSON shape (JSON with `.data` array or `.data[0]`).
  - Image URLs from Strapi are constructed as `${import.meta.env.VITE_STRAPI_URL}${post.cover.url}` (see `BlogPost.jsx` and `Blogs.jsx`).
- Routing and slugs:
  - Blog post pages use `/blogs/:slug` where `slug` maps to `documentId` in Strapi. When linking, use `navigate(`/blogs/${post.documentId}`)`.
- Loading / error handling:
  - Components use local `loading` state and console.error for fetching errors; follow this pattern for small fixes.
- Animations:
  - Framer Motion is used for transitions; small UX changes should follow existing AnimatePresence/motion wrappers to keep consistent effects.

Build / dev / test workflows (commands you can run)

- Install dependencies: `npm install` (this repo uses npm and Vite)
- Dev server: `npm run dev` (not `npm start` — the package.json defines `dev: "vite"`)
- Build: `npm run build`
- Preview production build locally: `npm run preview`
- Lint: `npm run lint`

Integration and external dependencies

- Strapi CMS (HTTP API) — base URL and token come from env vars above. Always check `vite-env.d.ts` and `.env` or deployment settings when debugging missing images or 401/403.
- Vercel rewrite: `vercel.json` rewrites all routes to `/` (SPA). Adjust server-side rewrites only if you change routing behavior.

Small changes that are low risk and commonly needed

- Fixing a text or image on a page: edit the relevant `src/components/*` or `src/pages/*` file and run `npm run dev`.
- Add a new blog field mapping: add parsing in `src/lib/strapi.ts` and update `BlogPost.jsx` to render the new field.
- Fix broken Strapi image references: ensure `import.meta.env.VITE_STRAPI_URL` is set and that code composes full URL exactly like existing examples.

What NOT to change lightly

- Global routing behavior in `src/App.jsx` (affects entire site navigation and transitions).
- Tailwind / PostCSS config unless you need new utilities (small style edits should use existing classes).
- Strapi request signatures in `src/lib/strapi.ts` — changing the returned shape will require updates across pages.

Troubleshooting tips for agents and contributors

- If images are 404: verify `VITE_STRAPI_URL` and concatenate with `post.cover.url` (see `Blogs.jsx`).
- If blog pages show "Post not found": confirm `documentId` in Strapi matches the route segment and that `getPost`'s filter uses `filters[documentId][$eq]` (see `src/lib/strapi.ts`).
- If routing works locally but 404s in production: confirm Vercel rewrite (`vercel.json`) is present and the deployment env has the same `VITE_` vars.

If you need to make broader changes

- Run the dev server, create a short PR focused on one responsibility, and include before/after screenshots if UI changes. Keep commits small and descriptive.

Files/dirs worth opening first: `src/lib/strapi.ts`, `src/pages/Blogs.jsx`, `src/pages/BlogPost.jsx`, `src/App.jsx`, `src/constants/Color.js`, `vite.config.js`, `package.json`, `vercel.json`.

If anything above is unclear or you'd like me to expand examples (e.g., sample change PR for a blog rendering tweak), tell me which area to expand and I'll iterate.
