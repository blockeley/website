<template>
    <div class="avatar-card">
        <div class="avatar-card-icon">
            <img :src="icon" width="36" height="36" loading="lazy" decoding="async" alt="">
        </div>

        <AvatarImage :ign="ign" />

        <div class="avatar-card-details">
            <p class="avatar-card-ign"> {{ ign }} </p>
            <p v-if="name" class="avatar-card-name"> {{ name }} </p>
            <p class="avatar-card-role"> {{ role }} </p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import AvatarImage from "@/components/AvatarImage.vue";

const props = defineProps<{
    ign: string;
    role: string;
    img: string;
    name?: string;
}>( );

const icon = computed(( ) => `/images/avatars/icons8-${ props.img }-50.png`);
</script>

<style lang="scss">
.avatar-card {


    background-color: rgb(240, 240, 240);

    box-shadow: 4px 4px var(--accent-color);

    border-radius: 8px;

    width: 150px;

    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;

    .avatar-card-icon {
        position: absolute;

        img {
            position: relative;

            top: 6px;
            left: 6px;

            z-index: 10;

            width: 36px;
            height: 36px;


        }
        &::after {
            position: absolute;
            // Required for pseudo-elements
            content: "";

            height: 50px;
            width: 50px;

            transform: translateX(-36px);

            z-index: 9;
            background-color: rgb(240, 240, 240);

            border-radius: 50%;
        }
    }

    .avatar-card-details {
        display: flex;

        flex-flow: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        position: relative;

        height: 120px;

        padding-right: 24px;
        padding-left: 24px;

        color: rgb(20, 20, 20);

        white-space: normal;

        .avatar-card-ign {
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 18px;
            font-weight: 500;

            word-break: break-word;
        }
        .avatar-card-name {
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 14px;
            font-weight: 400;
        }

        .avatar-card-role {
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.25;
        }
    }

}
</style>
