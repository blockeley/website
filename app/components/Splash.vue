<template>
    <div class="splash" :class="{ 'splash-continue': $props.continue }">
        <img v-if="image" class="splash-image" :src="image" alt="" />

        <div v-if="video && poster" class="splash-video">
            <video
                ref="videoElement"
                :src="video"
                :poster="poster"
                preload="none"
                loop
                muted
                playsinline
                disablepictureinpicture
            />
        </div>

        <slot />
    </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";

defineProps<{
    image?: string;
    video?: string;
    poster?: string;
    continue?: boolean;
}>();

const videoElement = useTemplateRef<HTMLVideoElement>("videoElement");

// The background video is decoration: only download and play it when the visitor
// hasn't asked for reduced motion or reduced data use; otherwise the poster stays
onMounted(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
        .connection;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) return;

    videoElement.value?.play().catch(() => {
        /* autoplay blocked: keep the poster */
    });
});
</script>

<style lang="scss">
.splash {
    position: relative;

    &:last-child {
        // Always fill height for Home
        min-height: calc(100vh - 96px);
    }

    &:last-child {
        padding-bottom: 64px;
    }

    @media (max-width: 992px) {
        padding-top: 64px;
    }

    @media (min-width: 992px) {
        display: flex;
        align-items: center;

        height: calc(100vh - 96px);

        &.splash-continue::after {
            // Material Symbols arrow-downward (Apache 2.0), same set as the <Icon>s
            content: "";

            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;

            height: 40px;
            width: 40px;

            border-radius: 50%;

            left: 50%;
            bottom: 24px;

            transform: translateX(-50%);

            background: black
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M11 4v12.175l-5.6-5.6L4 12l8 8l8-8l-1.4-1.425l-5.6 5.6V4z'/%3E%3C/svg%3E")
                center / 24px no-repeat;
        }
    }

    img.splash-image {
        position: absolute;

        z-index: -1;

        max-width: 100%;
        max-height: 75%;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        opacity: 0.025;
    }

    .splash-video,
    .splash-video video,
    .splash-video::after {
        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
    }

    .splash-video {
        z-index: -1;

        video {
            object-fit: cover;
        }

        &::after {
            // Required for pseudo-elements
            content: "";

            background-color: rgba(black, 0.75);
        }
    }
}
</style>
