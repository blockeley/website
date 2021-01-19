<template>
    <div class="icon-button" :class="classObject">
        <i class="material-icons">{{ icon }}</i>
    </div>
</template>

<script>
export default {
    name: "IconButton",

    props: [
        "icon",
        "active",
        "variant",
        "notification"
    ],

    data( ) {
        return {
            Variants: { Light: "light", Color: "color" }
        }
    },

    computed: {
        classObject( ) {
            return {
                "icon-button-light": this.variant === this.Variants.Light,
                "icon-button-color": this.variant === this.Variants.Color,
                "icon-button-notification": this.notification,
                "active": this.active
            };
        }
    }
}
</script>

<style lang="scss">
.icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    height: 40px;
    width: 40px;

    border-radius: 50%;

    color: rgba(black, 0.5);

    transition: color 100ms ease-in-out,
                background-color 100ms ease-in-out;

    &.icon-button-color {
        background-color: rgba(black, 0.05);

        color: black;

        &.active, &:hover {
            background-color: var(--accent-color-transparent);

            color: var(--accent-color);
        }
    }

    &.icon-button-light {
        color: rgba(white, 0.5);

        &.active, &:hover {
            background-color: rgba(white, 0.1);

            color: white;
        }
    }

    &.icon-button-notification {
        position: relative;

        &::after {
            // Required for pseudo-elements
            content: "";

            position: absolute;

            top: 2px;
            right: 2px;

            height: 8px;
            width: 8px;

            border-radius: 50%;

            background-color: black;
        }
    }

    &.active, &:hover {
        background-color: rgba(black, 0.1);

        color: black;
    }

    &:not(.active):hover {
        cursor: pointer;
    }
}
</style>
