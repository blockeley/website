<template>
    <div id="media">
        <div class="splash">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="sub-heading sub-heading-alt">{{ slides[selectedSlide].sub_heading }}</h2>

                        <h1 class="heading heading-alt">{{ slides[selectedSlide].heading }}</h1>

                        <p class="description description-alt"
                           v-html="slides[selectedSlide].description" />

                        <div class="splash-buttons">

                            <a class="button button-alt"
                               :href="slides[selectedSlide].reference"
                               target="_blank">Watch on YouTube</a>

                        </div>
                    </div>
                </div>
            </div>

            <img id="backdrop" :src="slides[selectedSlide].source" />

            <div id="bar">
                <div class="container">
                    <ul class="slides">

                        <li v-for="(slide, index) in slides"
                            class="slide"
                            :key="index"
                            @click="setSelectedSlide(index)"
                            :class="{ active: selectedSlide === index }">{{ slide.title }}</li>

                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <h2 class="heading heading-section heading-background">News articles</h2>
        </div>
    </div>
</template>

<style lang="scss">
#media {
    // Specific .splash
    .splash {
        position: relative;

        h2.sub-heading.sub-heading-alt, p.description.description-alt {
            position: relative;
        }

        &::before {
            // Required for pseudo-element
            content: "";

            position: absolute;

            height: 100%;
            width: 100%;

            left: 0;
            top: 0;

            backdrop-filter: blur(4px);

            @media (max-width: 992px) {
                background-color: rgba(black, 0.9);
            }

            @media (min-width: 992px) {
                background: radial-gradient( circle farthest-side at left, rgba(black, 0.9), 75%, transparent );
            }
        }

        #backdrop {
            position: absolute;

            z-index: -1;

            height: 100%;
            width: 100%;

            top: 0;
            left: 0;

            object-fit: cover;

            background-color: black;
        }

        #bar {
            position: absolute;

            left: 0;
            bottom: 0;

            width: 100%;
        }
    }
}
</style>

<script>
export default {
    name: "Media",

    data( ) {
        return {
            selectedSlide: "welcome",

            slides: {
                welcome: {
                    title: "Welcome to Blockeley University",

                    sub_heading: "Blockeley University",
                    heading: "Welcome",
                    description: `Welcome to Blockeley University, a student- and alumni-run non-profit organization bringing solidarity and a sense of purpose to college students and young adults in the wake of COVID-19.`,

                    reference: "https://www.youtube.com/watch?v=2b9gAWHy6No",

                    source: "/images/media/welcome.png"
                },

                trailer: {
                    title: "Blockeley commencement trailer",

                    sub_heading: "Blockeley commencement",
                    heading: "Trailer",
                    description: `Join Blockeley for a memorable commencement ceremony and a virtual music festival both available in Minecraft or streamed online for any student, alumni, or visitor.`,

                    reference: "https://www.youtube.com/watch?v=x8Kfdpakz_k",

                    source: "/images/media/trailer.png"
                }
            }
        };
    },

    methods: {
        setSelectedSlide(slide) {
            this.selectedSlide = slide;
        }
    }
}
</script>
