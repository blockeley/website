# blockeley

Built with [Nuxt 4](https://nuxt.com) (Vue 3, TypeScript, Vite) and [Bun](https://bun.sh).
Icons come from [Material Symbols](https://icones.js.org/collection/material-symbols) via
[@nuxt/icon](https://nuxt.com/modules/icon), fonts are self-hosted by [@nuxt/fonts](https://fonts.nuxt.com),
and layout is plain CSS (see `app/styles/` and `app/scss/_mixins.scss`).

```bash
bun install        # install dependencies (also generates Nuxt's types)
bun run dev        # dev server with hot reload
bun run build      # pre-render the static site into .output/public
bun run typecheck  # type-check (vue-tsc)
bun run preview    # serve the production build locally
bun run lint       # lint (@nuxt/eslint)
```

## Deployment

`bun run build` runs `nuxt generate`, which pre-renders every page to static HTML
(`index.html`, `campus.html`, `club.html`, plus `404.html` from `app/error.vue` for
unknown paths); the app then hydrates in the browser.

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) lints, type-checks and
builds every pull request, and deploys to GitHub Pages on every push to `develop`
(or manually from the Actions tab). The site is served at
[blockeley.com](https://blockeley.com) via `public/CNAME`.
