<template>
    <div class="avatar-image">
        <img
            :src="`/images/heads/${uuid}.png`"
            width="100"
            height="100"
            loading="lazy"
            decoding="async"
            :alt="ign"
        />
    </div>
</template>

<script setup lang="ts">
// The player's 8×8 face and hat layer, downloaded from Mojang by `bun run heads`
// (see scripts/heads.ts) and scaled up here
defineProps<{
    uuid: string;
    ign: string;
}>();
</script>

<style lang="scss">
.avatar-image {
    position: relative;
    left: calc(50%);
    transform: translateX(-50%);

    height: 100px;
    width: 100px;

    margin-top: 24px;

    img {
        position: absolute;
        border-radius: 12.5%;
        height: 100%;
        width: 100%;

        object-fit: cover;

        // Keep the skin's pixels crisp instead of blurring them when scaled up
        image-rendering: pixelated;
    }
}
</style>
