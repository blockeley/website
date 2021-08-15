<template>
    <div class="avatar-card" :class="classObject">
        <div class="avatar-card-image">
            <img :src="img">
        </div>
        <div class="avatar-card-details">
            <p class="avatar-card-ign"> {{ ign }} </p>
            <p v-if="name" class="avatar-card-name"> {{ name }} </p>
            <p class="avatar-card-role"> {{ role }} </p>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "AvatarCard",

    props: [
        "image",
        "name",
        "ign",
        "role"
    ],

    data( ) {
        return {
            fullScreen: false
        };
    },

    computed: {
        classObject( ) {
            return {

            };
        },
        img( ) {
            return "https://mc-heads.net/avatar/" + this.ign;
        }
    }
}
</script>

<style lang="scss">
.avatar-card {
    background-color: rgb(230, 230, 230);
    
    box-shadow: 4px 4px var(--accent-color);

    border-radius: 8px;

    width: 150px;

    margin-top: 24px;
    margin-left: 24px;
    margin-right: 24px;

    .avatar-card-image {
        position: relative;
        left: calc(50% - 50px);

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
        }
    }

}
</style>
