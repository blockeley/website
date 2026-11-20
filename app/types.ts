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
    role: string;
    // Suffix of an /images/avatars/icons8-*-50.png icon
    img: string;
    name?: string;
}
