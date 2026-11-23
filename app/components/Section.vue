<template>
    <div class="section" :class="variant && `section-${variant}`">
        <div class="container">
            <div class="section-content">
                <div class="section-header">
                    <p v-if="$slots.subHeading" class="section-sub-heading">
                        <slot name="subHeading" />
                    </p>

                    <p class="section-heading">{{ heading }}</p>
                </div>

                <p v-if="$slots.description" class="section-description">
                    <slot name="description" />
                </p>

                <div v-if="$slots.buttons" class="section-buttons">
                    <slot name="buttons" />
                </div>

                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// To-do: Proper style proponent
defineProps<{
    heading: string;
    variant?: "light" | "background" | "inline";
}>();

defineSlots<{
    default?: () => unknown;
    subHeading?: () => unknown;
    description?: () => unknown;
    buttons?: () => unknown;
}>();
</script>

<style lang="scss">
@use "@/scss/mixins";

.section {
    position: relative;

    .section-content {
        @media (min-width: 992px) {
            width: mixins.columns(8);
            margin-inline: auto;
        }
    }

    width: 100%;

    text-align: center;

    .section-header {
        display: flex;
        flex-direction: column;

        p.section-sub-heading {
            font-size: 24px;
            font-weight: 700;
            line-height: 1.2;
            color: rgba(black, 0.25);

            margin-bottom: 4px;
        }

        p.section-heading {
            font-size: 48px;
            font-weight: 900;
            line-height: 1.2;
            color: black;

            text-shadow: 4px 4px var(--accent-color);

            margin-bottom: 24px;
        }
    }

    // To-do: Properly remove line breaks on mobile devices
    @media (max-width: 1200px) {
        p.section-description br {
            display: none;
        }
    }

    p.section-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.2;
        color: rgba(black, 0.5);

        .important {
            color: rgba(black, 0.75);
            font-weight: 500;
        }

        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }

    .section-buttons {
        margin: -8px;

        .button {
            margin: 8px;
        }

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    &.section-inline {
        @media (min-width: 992px) {
            margin-top: 256px;
            margin-bottom: 128px;
        }

        @media (max-width: 992px) {
            margin-top: 128px;
            margin-bottom: 64px;
        }
    }

    &.section-light {
        .section-header {
            flex-direction: column-reverse;

            p.section-sub-heading {
                color: rgba(white, 0.25);
                line-height: 1.5;

                margin-bottom: 32px;

                .important {
                    color: rgba(white, 0.75);

                    border-bottom: 2px dashed rgba(white, 0.25);
                }
            }

            p.section-heading {
                font-size: 64px;
                font-weight: 900;
                color: white;

                margin-bottom: 16px;
            }
        }

        p.section-description {
            color: rgba(white, 0.5);

            &:not(:last-child) {
                margin-bottom: 32px;
            }

            .important {
                color: rgba(white, 0.75);
            }
        }
    }

    // Inline sections share the background blob and heading size
    &.section-background,
    &.section-inline {
        .section-header p.section-heading {
            font-size: 36px;
            font-weight: 700;
        }

        // To-do: Properly display background on mobile devices
        @media (min-width: 512px) {
            &::before {
                // Required for pseudo-elements
                content: "";

                z-index: -1;

                position: absolute;

                height: 512px;
                width: 512px;

                max-width: 100%;

                top: 50%;
                left: 50%;

                transform: translate(-50%, -50%);

                // A blob in the page's accent colour
                background-color: var(--accent-color);
                mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E")
                    no-repeat;

                opacity: 0.075;
            }
        }
    }
}
</style>
