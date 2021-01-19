<template>
    <div class="alert">
        <i class="material-icons">{{ icon }}</i>

        <p class="alert-message">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "Alert",

    props: [
        "icon",
        "message"
    ]
}
</script>

<style lang="scss">
@import "@/scss/colors";

/*
 *    Application color
 *
 */
#application {
    @each $name, $color in $colors {
        &.color-#{$name} .alert {
            background-color: $color;
        }
    }
}

/*
 *    Button
 *
 */
.alert {
    display: inline-flex;
    align-items: center;

    position: relative;

    padding-right: 16px;
    padding-left: 16px;

    background-color: #FFC02E;

    border-radius: 4px;

    p.alert-message {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.25;
        color: rgba(white, 0.75);

        // 40px default height (14px + 13px * 2)
        margin-top: 13px;
        margin-bottom: 13px
    }

    i.material-icons {
        color: rgba(white, 0.75);

        margin-right: 16px;
    }
}
</style>
