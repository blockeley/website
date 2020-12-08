<template>
    <div class="options" :class="classObject">
        <div class="option" v-for="option in options" :key="option" @click="setSelectedOption(option)" :class="{ active: selectedOption === option }">{{ option }}</div>
    </div>
</template>

<script>
export default {
    name: "Options",

    props: [
        "options",
        "centered"
    ],

    data( ) {
        return {
            selectedOption: this.options[0]
        };
    },

    computed: {
        classObject( ) {
            return {
                "options-centered": this.centered
            };
        }
    },

    methods: {
        setSelectedOption(option) {
            if(option === this.selectedOption) return;

            this.selectedOption = option;
            this.$emit("change", option);

            return undefined;
        }
    }
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
		&.color-#{$name} .options .option.active {
			border-color: $color;
			background-color: rgba($color, 0.1);

			color: $color;
		}
	}
}

/*
 *  Options
 *
 */
.options {
    display: flex;
    flex-wrap: wrap;

    margin: -4px;

    &.options-centered {
        justify-content: center;
    }

    .option {
        display: inline-flex;
        align-items: center;

        height: 40px;

        margin: 4px;

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
}
</style>
