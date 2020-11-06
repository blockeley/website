<template>
    <div class="button" :class="classObject">
        <slot />
    </div>
</template>

<script>
export default {
    name: "IconButton",

    props: [
        "alternate",
        "progress"
    ],

    computed: {
        classObject( ) {
            return {
                "button-alternate": this.alternate,
                "button-progress": this.progress
            };
        }
    }
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
        &.color-#{$name} .button {
            box-shadow: 4px 4px $color;
        }
    }
}

/*
 *    Button
 *
 */
.button {
    display: inline-flex;
    align-items: center;

    position: relative;

    height: 48px;

    padding-right: 24px;
    padding-left: 24px;

    border: 2px solid black;
    background-color: white;
    box-shadow: 4px 4px #FFC02E;

    white-space: nowrap;

    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: black;

    transition: background-color 100ms ease-in-out,
                color 100ms ease-in-out;

    &.button-progress {
        color: white;

        user-select: none;

        &::after {
            // Required for pseudo-element
            content: "";

            position: absolute;

            height: 24px;
            width: 24px;

            left: 50%;
            top: 50%;

            border-radius: 50%;

            border-style: solid;
            border-width: 2px;
            border-color: black black black transparent;

            animation: button-progress 500ms linear infinite;
        }
    }

    &:not(.button-progress):hover {
        background-color: black;

        color: white;

        cursor: pointer;
    }

    &.button-alternate {
        border-color: white;
        background-color: black;

        color: white;

        &.button-progress {
            color: black;

            &::after {
                border-color: white white white transparent;
            }
        }

        &:not(.button-progress):hover {
            background-color: white;

            color: black;
        }
    }
}

// Required for alignment
@keyframes button-progress {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }

      25% {
        transform: translate(-50%, -50%) rotate(120deg);
      }

      75% {
        transform: translate(-50%, -50%) rotate(240deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
}
</style>
