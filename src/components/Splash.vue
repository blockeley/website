<template>
    <div class="splash" :class="classObject">
        <img v-if="image" class="splash-image" :src="image" />

        <div v-if="video && poster" class="splash-video">
            <video :src="video" :poster="poster" autoplay loop muted playsinline />
        </div>

        <slot />
    </div>
</template>

<script>
export default {
    name: "Splash",

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
        // Force full-height for Home and splash-progress
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
            content: "arrow_downward";

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

            font-family: "Material Icons";
            font-size: 24px;
            color: white;

            background-color: black;

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
        // Force alignment on splash-progress
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
