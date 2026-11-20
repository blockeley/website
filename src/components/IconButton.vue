<template>
    <component :is="component" :href="href" :to="to" :target="target" class="icon-button" :class="classObject" @click="click">
        <Icon :name="icon" />
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

import Icon, { type IconName } from "@/components/Icon.vue";

// To-do: Proper style proponent
const props = defineProps<{
    icon: IconName;
    active?: boolean;
    variant?: "light" | "color";
    notification?: boolean;
    to?: RouteLocationRaw;
    target?: string;
    href?: string;
}>( );

const emit = defineEmits<{
    click: [ ];
}>( );

const classObject = computed(( ) => ({
    "icon-button-light": props.variant === "light",
    "icon-button-color": props.variant === "color",
    "icon-button-notification": props.notification,
    "active": props.active
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
.icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    height: 40px;
    width: 40px;

    border-radius: 50%;

    color: rgba(black, 0.5);

    transition: 100ms;

    &.icon-button-color {
        background-color: rgba(black, 0.05);

        color: black;

        &.active, &:hover {
            background-color: var(--accent-color-transparent);

            color: var(--accent-color);
        }
    }

    &.icon-button-light {
        color: rgba(white, 0.5);

        &.active, &:hover {
            background-color: rgba(white, 0.1);

            color: white;
        }
    }

    &.icon-button-notification {
        position: relative;

        &::after {
            // Required for pseudo-elements
            content: "";

            position: absolute;

            top: 2px;
            right: 2px;

            height: 8px;
            width: 8px;

            border-radius: 50%;

            background-color: black;
        }
    }

    &.active, &:hover {
        background-color: rgba(black, 0.1);

        color: black;
    }

    &:not(.active):hover {
        cursor: pointer;
    }
}
</style>
