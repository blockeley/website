<template>
    <div id="campus">
        <Splash image="/images/logo-transparent.webp" continue="true">
            <Section heading="in Minecraft">
                <template v-slot:subHeading>University of California, Berkeley</template>

                <template v-slot:description><span class="important">We aim to recreate the entire Berkeley campus in Minecraft for you to explore.</span>
                                             <br>Student volunteers have spent thousands of hours replicating buildings, parks, historical landmarks, and other
                                             various locations around the Berkeley campus to create a genuine virtual experience for our guests.</template>

                <template v-slot:buttons>
                    <Button @click="scrollTo(Identifiers.Explore)">Explore in Minecraft</Button>

                    <Button @click="scrollTo(Identifiers.Locations)">View featured locations</Button>
                </template>

                <alert :icon="statusIcon" :message="statusMessage" />
            </Section>
        </Splash>

        <div id="explore">
            <Section heading="Explore in Minecraft" variant="inline">
                <template v-slot:subHeading>Campus</template>

                <template v-slot:description><span class="important">We welcome visitors from around the world to explore the Berkeley campus virtually.</span>
                                             However, access to the virtual campus requires either Minecraft Java Edition or Minecraft Bedrock Edition. Despite
                                             the differences between the Java and Bedrock editions, we do we do everything we can to provide an amazing experience
                                             on both platforms! <span class="important">Learn how to access the Blockeley Minecraft server on either platform below.</span></template>
            </Section>
        </div>

        <div class="container">
            <Options :options="Object.keys(Editions)" centered="true" @change="setSelectedEdition" />

            <div id="steps-wrapper">
                <template v-if="selectedEdition === Editions.Java">
                    <Step title="Step one" image="/images/steps/java/one.webp">
                        <template v-slot:description><span class="important">Register for a Minecraft account</span> if you do not already have one.
                                                     <br><span class="important">Download Minecraft Java Edition</span> on Windows, macOS, or Linux.</template>

                        <Button href="https://www.minecraft.net/en-us/download/" target="_blank">Download Minecraft</Button>
                    </Step>

                    <Step title="Step two" image="/images/steps/java/two.webp" alternate="true">
                        <template v-slot:description><span class="important">Open the Minecraft Java Edition launcher.</span>
                                                     <br><span class="important">Sign in with your Minecraft account</span> (or your Microsoft account).
                                                     <br><span class="important">Click play</span> to launch Minecraft Java Edition.</template>

                        <alert icon="priority_high" message="Remember to use the latest release" />
                    </Step>

                    <Step title="Step three" image="/images/steps/java/three.webp">
                        <template v-slot:description><span class="important">Select the Multiplayer option</span> from the menu.
                                                     <br><span class="important">Click Add Server</span> and type <span class="important">mc.blockeley.com</span> in the <span class="important">Server Address</span> field.
                                                     <br><span class="important">Click done</span> and <span class="important">select the Blockeley Minecraft server</span> from the multiplayer menu.
                                                     <br><span class="important">Click Join Server.</span></template>
                    </Step>
                </template>

                <template v-else>
                    <Step title="Step one" image="/images/steps/bedrock/one.webp">
                        <template v-slot:description><span class="important">Register for an Xbox Live account</span> through Microsoft if you do not already have one.
                                                     <br><span class="important">Download Minecraft Bedrock Edition</span> on Android, iOS, or Windows 10.</template>

                        <Button href="https://www.xbox.com/en-US/live/minecraft/sign-up" target="_blank">Minecraft sign up</Button>
                    </Step>

                    <Step title="Step two" image="/images/steps/bedrock/two.webp" alternate="true">
                        <template v-slot:description><span class="important">Open Minecraft Bedrock Edition.</span>
                                                     <br><span class="important">Sign in with your Xbox Live account</span> through Microsoft.
                                                     <br><span class="important">Click play</span> and <span class="important">select Servers</span>.</template>
                    </Step>

                    <Step title="Step three" image="/images/steps/bedrock/three.webp">
                        <template v-slot:description><span class="important">Scroll to the bottom of the Featured Servers list.</span>
                                                     <br><span class="important">Click Add Server</span>and type <span class="important">mc.blockeley.com</span> in the <span class="important">Server Address</span> field.
                                                     <br><span class="important">Click Save</span> and <span class="important">select the Blockeley Minecraft server</span> from the list of Additional Servers.
                                                     <br><span class="important">click Join Server</span>.</template>
                    </Step>
                </template>
            </div>
        </div>

        <div id="locations">
            <Section heading="Featured locations" variant="inline">
                <template v-slot:subHeading>Campus</template>

                <template v-slot:description><span class="important">Such an amazing feat would not be possible without the help of student volunteers and we
                                             are always looking for new builders.</span> If you are interested in contributing and creating the next generation
                                             of our Minecraft campus, please fill out an application linked below. <span class="important">For guests without
                                             Minecraft, feel free to launch our online map and explore the Blockeley Minecraft server in your browser.</span></template>

                <template v-slot:buttons>
                    <!-- To-do: Pop-up..? -->
                    <Button href="https://map.blockeley.com" target="_blank">Explore in the browser</Button>

                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSebaih8bBY5wOGvmInL2Xi5Y691UlvVrg0thSPz8LfR_Vfb6w/viewform" target="_blank">Apply as a builder</Button>
                </template>
            </Section>
        </div>

        <div class="container">
            <!-- To-do: Remove Bootstrap utilities -->
            <div id="locations-wrapper" class="row justify-content-center">
                <div class="col-lg-4 col-md-6" v-for="location in locations" :key="location.title">
                    <Location :title="location.title" :image="location.image" :warp="location.warp" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Location from "@/components/Location.vue";
import Button from "@/components/Button.vue";
import Section from "@/components/Section.vue";
import Options from "@/components/Options.vue";
import Step from "@/components/Step.vue";
import Splash from "@/components/Splash.vue";
import Alert from "@/components/Alert.vue";

export default {
    name: "Campus",

    components: {
        Location,
        Button,
        Section,
        Options,
        Step,
        Splash,
        Alert
    },

    data( ) {
        return {
            Editions: { Java: "java", Bedrock: "bedrock" },
            Identifiers: { Explore: "explore", Locations: "locations" },

            locations: [
                { title: "Doe Memorial Library", image: "/images/locations/one.webp", warp: "Doe" },
                { title: "California Memorial Stadium", image: "/images/locations/two.webp", warp: "Stadium" },
                { title: "Sather Tower", image: "/images/locations/three.webp", warp: "Campanile" },
                { title: "Sather Gate", image: "/images/locations/four.webp", warp: "SatherGate" },
                { title: "Sproul Hall", image: "/images/locations/five.webp", warp: "Sproul" }
            ],

            selectedEdition: "java",

            status: null
        };
    },

    methods: {
        setSelectedEdition(edition) {
            this.selectedEdition = this.Editions[edition];
        },

        scrollTo(identifier) {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.getElementById(identifier).offsetTop - 128
            });
        },

        async updateStatus( ) {
            if(document.hidden) return;

            try {
                const response = await fetch("https://api.mcsrvstat.us/3/mc.blockeley.com");
                this.status = await response.json( );
            } catch {
                // Keep showing the last known status
            }
        }
    },

    computed: {
        statusIcon( ) {
            if( ! this.status ) return "priority_high";

            return this.status.online ? "play_arrow" : "close";
        },

        statusMessage( ) {
            if( ! this.status ) return "Checking mc.blockeley.com";

            return this.status.online ? this.status.players.online + " player(s) on mc.blockeley.com" : "mc.blockeley.com is offline";
        }
    },

    mounted( ) {
        // mcsrvstat.us caches results for a minute, so polling faster only adds requests
        this.updateStatus( );
        this.statusInterval = setInterval(this.updateStatus, 60000);

        document.addEventListener("visibilitychange", this.updateStatus);
    },

    beforeUnmount( ) {
        clearInterval(this.statusInterval);

        document.removeEventListener("visibilitychange", this.updateStatus);
    }
}
</script>

<style lang="scss">
#campus {
    padding-bottom: 256px;

    @media (max-width: 992px) {
        padding-bottom: 128px;
    }

    #steps-wrapper .step {
        margin-top: 48px;
    }

    #locations-wrapper {
        margin-bottom: -24px;

        .location {
            margin-bottom: 24px;
        }
    }
}
</style>
