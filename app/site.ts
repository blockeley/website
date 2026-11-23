// Links shared across pages, so each URL and the navigation menu are defined once

export const DISCORD_URL = "https://discord.gg/mmAK4D5";
export const PATREON_URL = "https://patreon.blockeley.com";
export const BUILDER_APPLICATION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSebaih8bBY5wOGvmInL2Xi5Y691UlvVrg0thSPz8LfR_Vfb6w/viewform";

// Accent colour for pages that don't set meta.accent (see App.vue)
export const DEFAULT_ACCENT = "#ffc02e";

export interface NavigationLink {
    label: string;
    to: string;
    // Opens in a new tab
    external?: boolean;
}

// Used by both the desktop navigation bar and the mobile menu
export const navigationLinks: NavigationLink[] = [
    { label: "Home", to: "/" },
    { label: "Campus", to: "/campus" },
    { label: "Club", to: "/club" },
    // { label: "19th Century", to: "/century" },
    { label: "Donate", to: PATREON_URL, external: true },
];
