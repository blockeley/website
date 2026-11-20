<template>
    <div class="options" :class="classObject">
        <div class="option" v-for="option in options" :key="option" @click="setSelectedOption(option)" :class="{ active: selectedOption === option }">{{ option }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
    options: readonly string[];
    centered?: boolean;
}>( );

const emit = defineEmits<{
    change: [ option: string ];
}>( );

const selectedOption = ref(props.options[0]);

const classObject = computed(( ) => ({
    "options-centered": props.centered
}));

function setSelectedOption(option: string) {
    if(option === selectedOption.value) return;

    selectedOption.value = option;
    emit("change", option);
}
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
