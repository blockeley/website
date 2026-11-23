<template>
    <div class="location" :class="{ 'location-full-screen': fullScreen }">
        <div class="location-image">
            <img :src="image" loading="lazy" decoding="async" alt="" />
        </div>

        <div class="location-header">
            <div class="header-text">
                <p class="location-heading">{{ title }}</p>

                <p class="location-description">/warp {{ warp }}</p>
            </div>

            <IconButton
                :icon="fullScreen ? 'fullscreen-exit' : 'fullscreen'"
                light
                @click="fullScreen = !fullScreen"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import IconButton from "@/components/IconButton.vue";

defineProps<{
    title: string;
    image: string;
    warp: string;
}>();

// Page scrolling is locked by CSS while a location is full screen (see body:has() in App.vue)
const fullScreen = ref(false);
</script>

<style lang="scss">
@use "@/scss/mixins";

.location {
    background-color: black;

    &:not(.location-full-screen) {
        border: 2px solid black;
        box-shadow: 4px 4px var(--accent-color);

        .location-image {
            width: 100%;

            aspect-ratio: 16 / 9;
        }

        .location-header {
            display: flex;
            align-items: center;

            position: relative;

            height: 64px;

            padding-right: 24px;
            padding-left: 24px;

            .header-text {
                flex-grow: 1;

                margin-right: 24px;

                overflow: hidden;

                p.location-heading {
                    text-overflow: ellipsis;

                    overflow: hidden;

                    white-space: nowrap;
                }
            }

            &::before {
                // Required for pseudo-elements
                content: "";

                position: absolute;

                height: 96px;
                width: 100%;

                top: -96px;
                left: 0;

                background: linear-gradient(to bottom, transparent, black);
            }
        }
    }

    // To-do: Optimize full screen for mobile visitors
    &.location-full-screen {
        position: fixed;

        left: 0;
        top: 0;

        height: 100vh;
        width: 100vw;

        z-index: 999;

        .location-image {
            width: 100%;
            height: 100%;

            &::after {
                border-width: 4px;
                border-color: rgba(black, 0.25);
            }
        }

        .location-header {
            .header-text {
                position: absolute;

                display: inline-flex;
                flex-direction: column;
                align-items: center;

                top: 24px;
                left: 24px;

                p.location-heading {
                    padding-right: 24px;
                    padding-left: 24px;

                    background-color: rgba(black, 0.25);

                    border-radius: 20px;

                    display: flex;
                    align-items: center;

                    height: 40px;

                    margin-bottom: 4px;
                }
            }

            // To-do: Dark transparent IconButton
            .icon-button {
                position: absolute;

                top: 24px;
                right: 24px;

                background-color: rgba(black, 0.25);
            }
        }
    }

    .location-header .header-text {
        p.location-heading {
            font-size: 14px;
            font-weight: 500;
            line-height: 1.25;
            color: white;
        }

        p.location-description {
            font-size: 12px;
            font-weight: 400;
            line-height: 1.25;
            color: rgba(white, 0.5);
        }
    }

    .location-image {
        @include mixins.framed-image(4px 4px 0 4px);
    }
}
</style>
