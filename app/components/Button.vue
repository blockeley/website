<template>
    <NuxtLink
        v-if="to ?? href"
        :to="to ?? href"
        class="button"
        :class="{ 'button-alternate': alternate }"
    >
        <slot />
    </NuxtLink>

    <div v-else class="button" :class="{ 'button-alternate': alternate }">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "#vue-router";

// Other attributes (target, @click, ...) fall through to the rendered element.
// NuxtLink renders a plain <a> for external URLs.
defineProps<{
    alternate?: boolean;
    to?: RouteLocationRaw;
    href?: string;
}>();
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

    &:hover {
        background-color: black;

        color: white;

        cursor: pointer;
    }

    &.button-alternate {
        border-color: white;
        background-color: black;

        color: white;

        &:hover {
            background-color: white;

            color: black;
        }
    }
}
</style>
