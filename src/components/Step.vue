<template>
    <div class="step" :class="{ 'step-alternate': alternate }">
        <div class="step-image">
            <img :src="image" loading="lazy" decoding="async" alt="">
        </div>

        <div class="step-content">
            <p class="step-title">{{ title }}</p>

            <p class="step-description">
                <slot name="description" />
            </p>

            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string;
    title: string;
    alternate?: boolean;
}>( );
</script>

<style lang="scss">
@use "@/scss/mixins";

.step {
    @media (min-width: 992px) {
        display: flex;
        align-items: center;

        .step-image {
            flex-shrink: 0;

            width: 512px;
            height: 288px;
        }

        .step-content {
            flex-grow: 1;

            margin-left: 24px;

            p.step-title::before {
                // Required for pseudo-elements
                content: "";

                position: absolute;

                height: 40px;
                width: 24px;

                top: 0;
                left: -24px;

                z-index: 1;

                background-color: black;
            }
        }

        &:not(.step-alternate) .step-content p.step-title {
            padding-right: 24px;
        }

        &.step-alternate {
            flex-direction: row-reverse;

            .step-content {
                // To-do: Place in :not()
                margin-left: unset;

                text-align: right;

                margin-right: 24px;

                p.step-title {
                    padding-left: 24px;

                    &::before {
                        // To-do: Place in :not()
                        left: unset;

                        right: -24px;
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        .step-image {
             width: 100%;

             aspect-ratio: 16 / 9;
        }

        .step-content {
            text-align: center;

            p.step-title {
                padding-right: 24px;
                padding-left: 24px;
            }
        }
    }

    // To-do: Properly remove line breaks for mobile devices
    @media (max-width: 1200px) {
        .step-content p.step-description br {
            display: none;
        }
    }

    .step-image {
        border: 2px solid black;
        box-shadow: 4px 4px var(--accent-color);
        background-color: white;

        @include mixins.framed-image(4px);
    }

    .step-content {
        p.step-title {
            display: inline-flex;
            align-items: center;

            position: relative;

            height: 40px;

            font-size: 14px;
            font-weight: 500;
            line-height: 1;
            color: white;

            background-color: black;

            margin-bottom: 24px;
        }

        p.step-description {
            font-size: 16px;
            font-weight: 400;
            line-height: 1.2;
            color: rgba(black, 0.5);

            .important {
                color: black;
                font-weight: 500;
            }

            &:not(:last-child) {
                margin-bottom: 24px;
            }
        }
    }
}
</style>
