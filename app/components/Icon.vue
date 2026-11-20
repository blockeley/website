<template>
    <svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
        <path :d="paths[name]" />
    </svg>
</template>

<script lang="ts">
// Material Icons (Apache 2.0) - only the glyphs this site uses, instead of the whole icon font
const paths = {
    close: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    fullscreen: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",
    fullscreen_exit: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z",
    play_arrow: "M8 5v14l11-7z",
    menu: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
    priority_high: "M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 3h4v12h-4z"
} as const;

export type IconName = keyof typeof paths;
</script>

<script setup lang="ts">
defineProps<{
    name: IconName;
}>( );
</script>

<style lang="scss">
svg.icon {
    display: block;

    flex-shrink: 0;
}
</style>
