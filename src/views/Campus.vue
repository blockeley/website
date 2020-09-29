<template>
    <div id="campus">
        <div class="splash splash-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="splash-title">University of California, Berkeley</h2>
                        <h1 class="splash-heading">in Minecraft</h1>

                        <p class="splash-description"><span class="important">Blockeley aims to recreate the entire University of California, Berkeley campus in Minecraft.</span> Volunteer builders have put hours into replicating buildings, parks, and other various locations around campus to create a genuine virtual experience for our visitors.</p>

                        <div class="splash-buttons">

                            <a class="button"
                               @click="explore( )">Explore in Minecraft</a>

                            <a class="button" href="https://map.blockeley.com" target="_blank">Launch our online map</a>

                        </div>
                    </div>
                </div>
            </div>

            <div class="splash-icon">
                <i class="material-icons">arrow_downward</i>
            </div>
        </div>

        <div id="explore" class="container">
            <div class="heading heading-center">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC02E" d="M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z" transform="translate(100 100)" />
                </svg>

                <h2 class="heading-text">Explore in Minecraft</h2>
            </div>

            <div class="step-wrapper">
                <div class="step">
                    <div class="step-image">
                        <img src="/images/step-one.png">
                    </div>

                    <div class="step-content">
                        <p class="step-identifier">Step one</p>

                        <p class="step-description"><span class="important">Register</span> for a Minecraft account if you do not already have one. <span class="important">Download</span> Minecraft <span class="important">Java Edition</span>.</p>

                        <a class="button" href="https://www.minecraft.net/en-us/download/">Download Minecraft</a>
                    </div>
                </div>

                <div class="step">
                    <div class="step-image">
                        <img src="/images/step-two.png">
                    </div>

                    <div class="step-content">
                        <p class="step-identifier">Step two</p>

                        <p class="step-description"><span class="important">Open</span> the Minecraft launcher and <span class="important">sign in</span> with your Minecraft account. Once signed in, <span class="important">click play</span> to launch Minecraft Java Edition and wait for the game to load.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-image">
                        <img src="/images/step-three.png">
                    </div>

                    <div class="step-content">
                        <p class="step-identifier">Step three</p>

                        <p class="step-description">Select the <span class="important">Multiplayer</span> option in the menu and then click <span class="important">Add Server</span>. In the <span class="important">Server Address</span> field, type <span class="important">mc.blockeley.com</span>. Then, click <span class="important">Done</span>, select the Blockeley Minecraft server from the multiplayer menu, and click <span class="important">Join Server</span>.</p>
                    </div>
                </div>
            </div>

            <div class="heading heading-center">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFC02E" d="M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z" transform="translate(100 100)" />
                </svg>

                <h2 class="heading-text">Featured locations</h2>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="feature">
                        <div class="feature-image">
                            <img src="images/art-one.png">
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="feature">
                        <div class="feature-image">
                            <img src="images/art-two.png">
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="feature">
                        <div class="feature-image">
                            <img src="images/art-three.png">
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="feature feature-placeholder">
                        <p class="feature-caption">Coming soon...</p>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="feature feature-placeholder">
                        <p class="feature-caption">Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Campus",

    methods: {
        explore( ) {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.getElementById("explore").offsetTop
            });
        }
    }
}
</script>
