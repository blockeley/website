<template>
    <div class="credits-viewport">
        <!-- This element clips the credits -->
        <div ref="wrapper" class="credits-wrapper">
            <!-- This element moves, using a compositor-only transform animation -->
            <div ref="list" class="credits" :style="animationStyle">
                <div class="credits-spacer" />
                <p v-for="item in credits" :key="item" class="credits-item">
                    {{ item }}
                </p>
                <div class="credits-spacer" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, useTemplateRef } from "vue";

// Scroll speed of the credits: 1px every 25ms
const PIXELS_PER_SECOND = 40;

defineProps<{
    credits: readonly string[];
}>( );

const wrapper = useTemplateRef<HTMLDivElement>("wrapper");
const list = useTemplateRef<HTMLDivElement>("list");

const distance = ref(0);

const animationStyle = computed(( ) => {
    if( ! distance.value ) return { };

    return {
        "--credits-distance": `-${ distance.value }px`,
        "--credits-duration": `${ distance.value / PIXELS_PER_SECOND }s`
    };
});

function measure( ) {
    if( ! wrapper.value || ! list.value ) return;

    distance.value = Math.max(0, list.value.offsetHeight - wrapper.value.clientHeight);
}

let observer: ResizeObserver | undefined;

onMounted(( ) => {
    measure( );

    // Re-measure when web fonts load or the viewport changes the line wrapping
    observer = new ResizeObserver(measure);
    if(list.value) observer.observe(list.value);
});

onBeforeUnmount(( ) => observer?.disconnect( ));
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
