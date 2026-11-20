<template>
    <a class="link-button" :class="{ 'link-button-alternate': alternate, 'link-button-small': small }">
        <slot />
    </a>
</template>

<script setup lang="ts">
// href, target and other attributes fall through to the <a>
defineProps<{
    alternate?: boolean;
    small?: boolean;
}>( );
</script>

<style lang="scss">
.link-button {
    display: inline-flex;
    align-items: flex-start;

    height: 20px;

    font-size: 14px;
    font-weight: 500;
    line-height: 1;

    color: rgba(black, 0.5);

    border-bottom: 2px solid rgba(black, 0.5);

    transition: 100ms;

    &.link-button-small {
        height: 18px;

        font-size: 12px;
    }

    &.link-button-alternate {
        color: rgba(white, 0.75);

        border-bottom-color: rgba(white, 0.75);

        &:hover {
            color: white;

            border-bottom-color: white;
        }
    }

    &:hover {
        color: black;

        cursor: pointer;

        border-bottom-color: black;
    }
}
</style>
