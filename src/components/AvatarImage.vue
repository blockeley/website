<template>
    <div class="avatar-image">
        <img :src="`https://mc-heads.net/avatar/${ ign }`" width="100" height="100" loading="lazy" decoding="async" :alt="ign">
    </div>
</template>

<script setup lang="ts">
defineProps<{
    ign: string;
}>( );
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