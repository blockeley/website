<template>
    <div class="avatar-image">
        <img :src="head">
    </div>
</template>

<script>

export default {
    name: "AvatarImage",

    props: [
        "ign"
    ],

    computed: {
        head( ) {
            return "https://mc-heads.net/avatar/" + this.ign;
        }
    }
}
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