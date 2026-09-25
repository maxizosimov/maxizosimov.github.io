# maxizosimov.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing content

All text lives in [`src/data/site.ts`](src/data/site.ts) — bio, work, projects, toolkit and links.
Change it there and push to `main`; the site redeploys automatically.

## Local development

Requires Node 22.12+.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to ./dist
npm run preview  # serve the built site
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.
In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
