import { ViteSSG } from "vite-ssg";

// Self-hosted, latin-only Poppins in the weights the site uses (was every weight and style of two families from Google Fonts)
import "@fontsource/poppins/latin-300.css";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-900.css";
import "./styles/vendor.css";

import App from "./App.vue";
import { routerOptions } from "./router";

// Pre-renders every static route to HTML at build time (see ssgOptions in vite.config.js),
// then hydrates into the same single-page app in the browser
export const createApp = ViteSSG(App, routerOptions);
