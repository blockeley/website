<template>
    <component :is="component" :href="href" :to="to" :target="target" class="button" :class="classObject" @click="click">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

const props = defineProps<{
    alternate?: boolean;
    progress?: boolean;
    to?: RouteLocationRaw;
    target?: string;
    href?: string;
}>( );

const emit = defineEmits<{
    click: [ ];
}>( );

const classObject = computed(( ) => ({
    "button-alternate": props.alternate,
    "button-progress": props.progress
}));

const component = computed(( ) => {
    if(props.href) return "a";
    if(props.to) return RouterLink;
    return "div";
});

function click( ) {
    emit("click");
}
</script>

<style lang="scss">
.button {
    display: inline-flex;
    align-items: center;

    position: relative;

    height: 48px;

    padding-right: 24px;
    padding-left: 24px;

    border: 2px solid black;
    background-color: white;
    box-shadow: 4px 4px var(--accent-color);

    white-space: nowrap;

    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: black;

    transition: 100ms;

    &.button-progress {
        color: white;

        user-select: none;

        &::after {
            // Required for pseudo-elements
            content: "";

            position: absolute;

            height: 24px;
            width: 24px;

            left: 50%;
            top: 50%;

            border-radius: 50%;

            border-style: solid;
            border-width: 2px;
            border-color: black black black transparent;

            animation: button-progress 500ms linear infinite;
        }
    }

    &:not(.button-progress):hover {
        background-color: black;

        color: white;

        cursor: pointer;
    }

    &.button-alternate {
        border-color: white;
        background-color: black;

        color: white;

        &.button-progress {
            color: black;

            &::after {
                border-color: white white white transparent;
            }
        }

        &:not(.button-progress):hover {
            background-color: white;

            color: black;
        }
    }
}

@keyframes button-progress {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }

      25% {
        transform: translate(-50%, -50%) rotate(120deg);
      }

      75% {
        transform: translate(-50%, -50%) rotate(240deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
}
</style>
