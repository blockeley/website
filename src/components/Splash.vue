<template>
    <div class="splash" :class="classObject">
        <img v-if="image" class="splash-image" :src="image" alt="" />

        <div v-if="video && poster" class="splash-video">
            <video :src="video" :poster="poster" autoplay loop muted playsinline disablepictureinpicture />
        </div>

        <slot />
    </div>
</template>

<script>
export default {
    name: "Splash",

    // To-do: Handle edge cases in view components instead..?
    props: [
        "image",
        "video",
        "poster",
        "progress",
        "continue"
    ],

    computed: {
        classObject( ) {
            return {
                "splash-progress": this.progress,
                "splash-continue": this.continue
            };
        }
    }
}
</script>

<style lang="scss">
.splash {
    position: relative;

    &:last-child, &.splash-progress {
        // Always fill height for Home and .splash-progress
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
            // Material Icons arrow_downward (Apache 2.0), drawn without the icon font
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

            background: black url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z'/%3E%3C/svg%3E") center / 24px no-repeat;

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

    .splash-video, .splash-video video, .splash-video::after {
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

    &.splash-progress {
        // Always align for .splash-progress
        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
            // Required for pseudo-elements
            content: "";

            height: 48px;
            width: 48px;

            border-radius: 50%;

            border-style: solid;
            border-width: 2px;
            border-color: black black black transparent;

            animation: splash-progress 500ms linear infinite;
        }
    }
}

@keyframes splash-progress {
    0% {
        transform: rotate(0deg);
      }

      25% {
        transform: rotate(120deg);
      }

      75% {
        transform: rotate(240deg);
      }

      100% {
        transform: rotate(360deg);
      }
}
</style>
