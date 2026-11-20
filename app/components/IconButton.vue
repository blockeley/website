<template>
    <button type="button" class="icon-button" :class="{ 'icon-button-light': light }">
        <Icon :name="icon" />
    </button>
</template>

<script setup lang="ts">
import Icon, { type IconName } from "@/components/Icon.vue";

// @click falls through to the <button>
defineProps<{
    icon: IconName;
    light?: boolean;
}>( );
</script>

<style lang="scss">
.icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    height: 40px;
    width: 40px;

    padding: 0;

    border: 0;
    border-radius: 50%;

    background: none;

    color: rgba(black, 0.5);

    transition: 100ms;

    &.icon-button-light {
        color: rgba(white, 0.5);

        &:hover {
            background-color: rgba(white, 0.1);

            color: white;
        }
    }

    &:hover {
        background-color: rgba(black, 0.1);

        color: black;
    }

    &:hover {
        cursor: pointer;
    }
}
</style>
