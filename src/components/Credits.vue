<template>
    <div class="credits-viewport">
        <!-- This element clips the credits -->
        <div class="credits-wrapper" ref="wrapper">
            <!-- This element moves, using a compositor-only transform animation -->
            <div class="credits" ref="credits" :style="animationStyle">
                <div class="credits-spacer"></div>
                <p class="credits-item" v-for="item in credits" :key="item">
                    {{ item }}
                </p>
                <div class="credits-spacer"></div>
            </div>
        </div>
    </div>
</template>

<script>
// Scroll speed of the credits: 1px every 25ms
const PIXELS_PER_SECOND = 40;

export default {
    name: "Credits",

    props: [
        "credits"
    ],

    data( ) {
        return {
            distance: 0
        };
    },

    computed: {
        animationStyle( ) {
            if( ! this.distance ) return { };

            return {
                "--credits-distance": `-${ this.distance }px`,
                "--credits-duration": `${ this.distance / PIXELS_PER_SECOND }s`
            };
        }
    },

    methods: {
        measure( ) {
            this.distance = Math.max(0, this.$refs.credits.offsetHeight - this.$refs.wrapper.clientHeight);
        }
    },

    mounted( ) {
        this.measure( );

        // Re-measure when web fonts load or the viewport changes the line wrapping
        this.observer = new ResizeObserver(( ) => this.measure( ));
        this.observer.observe(this.$refs.credits);
    },

    beforeUnmount( ) {
        this.observer?.disconnect( );
    }
}
</script>

<style lang="scss">
    .credits-viewport {
        position: relative;
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .credits-spacer {
        height: 400px;
    }
    .credits-wrapper {
        max-height: 400px;
        overflow: hidden;

        @media (prefers-reduced-motion: reduce) {
            overflow-y: auto;
        }

        display: flex;
        justify-content: center;

        &::before {
            content: "";

            position: absolute;

            height: 70px;
            width: 100%;

            top: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, white, transparent);
        }
        &::after {
            content: "";

            position: absolute;

            height: 70px;
            width: 100%;

            bottom: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, transparent, white);
        }
    }
    .credits {
        // Size to the content (not the 400px wrapper) so the scroll distance can be measured
        align-self: flex-start;

        text-align: center;

        animation: credits-scroll var(--credits-duration, 0s) linear infinite;

        will-change: transform;

        &:hover {
            animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }

        .credits-item {
            margin-top: 12px;
            margin-bottom: 12px;

            font-size: 36px;
            font-weight: 700;

            text-shadow: 3px 3px var(--accent-color);

        }
    }

    @keyframes credits-scroll {
        to {
            transform: translateY(var(--credits-distance, 0));
        }
    }
</style>
