<template>
    <div class="avatar-image">
        <img
            :src="`https://mc-heads.net/avatar/${uuid}`"
            width="100"
            height="100"
            loading="lazy"
            decoding="async"
            :alt="ign"
        />
    </div>
</template>

<script setup lang="ts">
// mc-heads.net renders the player's head with its hat layer; looking it up by UUID keeps
// working when a player changes their name
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
    }
}
</style>
