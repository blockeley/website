<template>
    <div class="options" :class="{ 'options-centered': centered }">
        <div
            v-for="option in options"
            :key="option"
            class="option"
            :class="{ active: selected === option }"
            @click="selected = option"
        >
            {{ option }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    options: readonly string[];
    centered?: boolean;
}>();

const selected = defineModel<string>({ required: true });
</script>

<style lang="scss">
.options {
    display: flex;
    flex-wrap: wrap;

    margin: -4px;

    &.options-centered {
        justify-content: center;
    }

    .option {
        display: inline-flex;
        align-items: center;

        height: 40px;

        margin: 4px;

        padding-right: 24px;
        padding-left: 24px;

        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: rgba(black, 0.5);

        border: 2px dashed rgba(black, 0.5);

        transition: 100ms;

        &:hover {
            color: black;

            border-color: black;

            cursor: pointer;
        }

        &.active {
            border-color: var(--accent-color);
            background-color: var(--accent-color-transparent);

            color: var(--accent-color);
        }
    }
}
</style>
