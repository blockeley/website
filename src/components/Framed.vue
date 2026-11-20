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
.framed {
    background-color: black;

    border: 2px solid black;
    box-shadow: 4px 4px var(--accent-color);

    .framed-image {
        width: 100%;

        // 16x9 width to height ratio
        padding-top: calc(100% / 16 * 9);
    }
    

    .framed-image {
        position: relative;

        img, &::after {
            position: absolute;

            height: 100%;
            width: 100%;

            left: 0;
            top: 0;
        }

        img {
            object-fit: cover;
        }

        &::after {
            content: "";

            border-style: solid;
            border-width: 4px 4px 4px 4px;
            border-color: rgba(white, 0.25);
        }
    }
}
</style>
