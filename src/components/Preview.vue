<template>
    <div class="preview">
        <div class="preview-image">
            <img :src="currentImage">
        </div>

        <div class="preview-menu">
            <div @click="setCurrentImage(front)" :class="{ active: currentImage === front }" class="menu-item">Front</div>

            <div v-if="back" @click="setCurrentImage(back)" :class="{ active: currentImage === back }" class="menu-item">Back</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Preview",

    props: [
        "front",
        "back"
    ],

    data( ) {
        return {
            currentImage: this.front
        };
    },

    methods: {
        setCurrentImage(image) {
            this.currentImage = image;
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
        &.color-#{$name} .preview {
            box-shadow: -4px -4px $color;
        }
    }
}

/*
 *  Product
 *
 */
.preview {
    box-shadow: -4px -4px #FFC02E;
    background-color: black;

    padding: 2px 2px 0 2px;

    .preview-image {
        position: relative;

        // Padding-top relative to width
        width: 100%;

        padding-top: calc(100% / 6 * 8);

       img {
           position: absolute;

           height: 100%;
           width: 100%;

           left: 0;
           top: 0;

           object-fit: cover;
       }
    }

    .preview-menu {
        display: flex;
        justify-content: center;

        height: 56px;

        .menu-item {
            display: flex;
            align-items: center;

            position: relative;

            height: 56px;

            font-size: 14px;
            font-weight: 500;
            color: rgba(white, 0.5);
            line-height: 1;

            padding-left: 12px;
            padding-right: 12px;

            transition: background-color 100ms ease-in-out,
                        color 100ms ease-in-out;

			&::after {
				// Required for pseudo
				content: "";

				position: absolute;

				height: 2px;
				width: 100%;

				left: 0;
				bottom: 0;

				background-color: white;

				opacity: 0;

				transition: opacity 100ms ease-in-out;
			}

            &:hover {
                color: white;

                cursor: pointer;
            }

            &.active {
                color: white;

                background-color: rgba(white, 0.1);

                &::after {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
