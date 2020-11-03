<template>
    <div id="explore">
        <div class="splash splash-center">
			<div id="video">

				<video src="videos/background.mp4"
                       poster="images/poster.jpg"
                       autoplay
                       loop
                       muted
                       playsinline />

            </div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <img id="image" src="images/logo.png">

                        <h1 class="heading heading-splash heading-alt">Blockeley</h1>

                        <h2 class="sub-heading sub-heading-alt">the <span class="important">#1 Minecraft university</span> in the world</h2>

                        <p class="description description-alt">The Blockeley Minecraft server contains a <span class="important">virtual replica of the University of California, Berkeley campus</span> in Minecraft. In May, 2020, Blockeley hosted a <span class="important">virtual graduation</span> for the class of 2020 and <span class="important">two-day virtual musical festival</span> with some of the world's most popular artists.</p>

                        <div class="splash-buttons">

                            <router-link to="/campus"
                                         class="button button-alt">Minecraft campus</router-link>

                            <router-link to="/merchandise"
                                         class="button button-alt">Support Blockeley</router-link>

                            <a class="button button-alt" href="https://discord.gg/mmAK4D5" target="_blank">Discord community</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#explore .splash {
    position: relative;

    #video, #video video, #video::after {
        position: absolute;

        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
    }

	#video {
		z-index: -1;

		video {
			object-fit: cover;
		}

		&::after {
			// Required for pseudo-element
			content: "";

			background-color: rgba(black, 0.75);
		}
	}

    #image {
        position: absolute;

        z-index: -1;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        opacity: 0.05;

        width: 512px;
        max-width: 100%;
        max-height: 75%;
    }

    // Specific .heading
    h1.heading.heading-splash {
        font-size: 64px;

        margin-bottom: 16px;
    }

    // Specific .sub-heading
    h2.sub-heading {
        line-height: 1.5;

        margin-bottom: 32px;

        .important {
            color: white;

            border-bottom: 2px dashed rgba(white, 0.25);
        }
    }

    // Specific .description
    p.description {
        margin-bottom: 32px;
    }
}
</style>

<script>
export default {
    name: "Explore"
}
</script>
