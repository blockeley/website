<template>
    <div
        id="application"
        :style="{ '--accent-color': props.accent ?? route.meta.accent ?? DEFAULT_ACCENT }"
    >
        <Notification
            desktop-message="Learn more about Blockeley and chat with Blockeley team members as well as our community on Discord."
            mobile-message="Join us on Discord."
        >
            <LinkButton :href="DISCORD_URL" alternate small>Launch Discord</LinkButton>
        </Notification>

        <MobileNavigation v-if="mobileNavigation" @close="mobileNavigation = false" />

        <div class="navigation-bar">
            <div class="container">
                <IconButton
                    class="navigation-bar-toggle"
                    icon="menu"
                    @click="mobileNavigation = true"
                />

                <img class="navigation-bar-brand" src="/images/logo-small.webp" alt="Blockeley" />

                <ul class="navigation-bar-menu" role="list">
                    <NavigationLinks />
                </ul>
            </div>
        </div>

        <slot />

        <Footer />
    </div>
</template>

<script setup lang="ts">
import IconButton from "@/components/IconButton.vue";
import Notification from "@/components/Notification.vue";
import MobileNavigation from "@/components/MobileNavigation.vue";
import NavigationLinks from "@/components/NavigationLinks.vue";
import LinkButton from "@/components/LinkButton.vue";
import Footer from "@/components/Footer.vue";
import { DEFAULT_ACCENT, DISCORD_URL } from "@/site";

// The error page has no route meta of its own, so it passes its accent in
const props = defineProps<{
    accent?: string;
}>();

const route = useRoute();

useHead({
    title: () => route.meta.title,
    titleTemplate: (title) =>
        title ? `${title} | Blockeley` : "Blockeley | The #1 Minecraft university in the world",
});

const mobileNavigation = ref(false);

watch(
    () => route.fullPath,
    () => (mobileNavigation.value = false),
);
</script>

<style lang="scss">
@use "@/scss/components/navigation-bar";

#application {
    // --accent-color is set per page from the route's meta.accent
    --accent-color-transparent: color-mix(in srgb, var(--accent-color) 10%, transparent);
}

/*
 *  Global
 */
*,
*::after,
*::before {
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

body {
    position: relative;

    font-family: "Poppins", sans-serif;
    // The design's text metrics assume a line-height of 1 (the old Meyer reset's default)
    line-height: 1;

    background-color: #f5f2e5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

    // Lock page scrolling while the mobile menu or a full screen location is open
    &:has(.mobile-navigation, .location-full-screen) {
        height: 100%;

        overflow: hidden;
    }
}
</style>
