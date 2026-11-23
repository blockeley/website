// Material Symbols names (https://icones.js.org/collection/material-symbols) used by IconButton and Alert
export type IconName =
    | "close"
    | "fullscreen"
    | "fullscreen-exit"
    | "play-arrow"
    | "menu"
    | "priority-high";

// Material Symbols names (https://icones.js.org/collection/material-symbols) used for board roles
export type RoleIcon = "shield-person" | "dns" | "campaign" | "forum" | "event" | "badge";

export interface TimelineEvent {
    date?: string;
    title?: string;
    description?: string;
    image?: string;
    // Events with a warp are shown as a Location card, other images as a Framed picture
    caption?: string;
    warp?: string;
}

export interface Member {
    ign: string;
    // Minecraft account UUID, which (unlike the username) never changes
    uuid: string;
    role: string;
    // Material Symbols icon shown on the card for the member's role
    icon: RoleIcon;
    name?: string;
}
