# blockeley

Built with [Vue 3](https://vuejs.org), [Vite](https://vite.dev) and [Bun](https://bun.sh).

```bash
bun install      # install dependencies
bun run dev      # dev server with hot reload
bun run build    # production build into dist/
bun run preview  # serve the production build locally
bun run lint     # lint
```

## Deployment

`bun run build` pre-renders every route to static HTML with
[vite-ssg](https://github.com/antfu-collective/vite-ssg) (`index.html`,
`campus.html`, `club.html`, plus `404.html` for unknown paths), inlines the
critical CSS, and the app hydrates in the browser from there.

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) lints and builds
every pull request, and deploys to GitHub Pages on every push to `develop`
(or manually from the Actions tab). The site is served at
[blockeley.com](https://blockeley.com) via `public/CNAME`.
