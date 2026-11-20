<template>
    <component :is="component" :href="href" :to="to" :target="target" class="link-button" :class="classObject" @click="click">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

const props = defineProps<{
    alternate?: boolean;
    size?: "small";
    to?: RouteLocationRaw;
    target?: string;
    href?: string;
}>( );

const emit = defineEmits<{
    click: [ ];
}>( );

const classObject = computed(( ) => ({
    "link-button-alternate": props.alternate,
    "link-button-small": props.size === "small"
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
.link-button {
    display: inline-flex;
    align-items: flex-start;

    height: 20px;

    font-size: 14px;
    font-weight: 500;
    line-height: 1;

    // color: rgba(black, 0.75);
    color: rgba(black, 0.5);

    // border-bottom: 2px solid rgba(black, 0.75);
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
