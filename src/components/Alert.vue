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

    // To-do: Responsive
    height: 40px;

    padding-right: 16px;
    padding-left: 16px;

    border-radius: 20px;

    background-color: #FFC02E;

    .alert-message {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.25;
        color: rgba(white, 0.75);
    }

    i.material-icons {
        color: rgba(white, 0.75);
        margin-right: 8px;
    }
}
</style>
