<template>
    <div class="framed">
        <div class="framed-image">
            <img :src="image" loading="lazy" decoding="async" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string;
}>( );
</script>

<style lang="scss">
@use "@/scss/mixins";

.framed {
    background-color: black;

    border: 2px solid black;
    box-shadow: 4px 4px var(--accent-color);

    .framed-image {
        width: 100%;

        aspect-ratio: 16 / 9;

        @include mixins.framed-image(4px);
    }
}
</style>
