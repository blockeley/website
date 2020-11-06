<template>
    <div class="option" :class="{ active: active }">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Option",

    props: [
        "active"
    ]
}
</script>

<style lang="scss">
@import "@/scss/colors";

/*
 *	Application color
 *
 */
#application {
	@each $name, $color in $colors {
		&.color-#{$name} .option.active {
			border-color: $color;
			background-color: rgba($color, 0.1);

			color: $color;
		}
	}
}

/*
 *  Option
 *
 */
.option {
    display: inline-flex;
    align-items: center;

    height: 40px;

    padding-right: 24px;
    padding-left: 24px;

    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: rgba(black, 0.5);

    border: 2px dashed rgba(black, 0.5);

    transition: color 100ms ease-in-out,
                border-color 100ms ease-in-out,
                background-color 100ms ease-in-out;

    &:hover {
        color: black;

        border-color: black;

        cursor: pointer;
    }

    &.active {
        border-color: #FFC02E;
        background-color: rgba(#FFC02E, 0.1);

        color: #FFC02E;
    }
}
</style>
