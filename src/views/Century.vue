<template>
    <div id="century">
        <Splash image="/images/logo-transparent.png" continue="true">
                <Section heading="Blockeley, 1893">
                    <template v-slot:subHeading></template>

                    <template v-slot:description><span class="important">We aim to recreate the entire Berkeley campus in Minecraft for you to explore.</span>
                                                <br>Student volunteers have spent thousands of hours replicating buildings, parks, historical landmarks, and other
                                                various locations around the Berkeley campus to create a genuine virtual experience for our guests.</template>

                </Section>
            </Splash>

        <div id="locations">
            <Section heading="Featured locations" variant="inline">
                <template v-slot:subHeading>19th Century</template>

                <template v-slot:description><span class="important">Such an amazing feat would not be possible without the help of student volunteers and we
                                             are always looking for new builders.</span> If you are interested in contributing and creating the next generation
                                             of our Minecraft campus, please fill out an application linked below. <span class="important">For guests without
                                             Minecraft, feel free to launch our online map and explore the Blockeley Minecraft server in your browser.</span></template>

                <template v-slot:buttons>
                    <!-- To-do: Pop-up..? -->
                    <Button href="https://oldmap.blockeley.com" target="_blank">Explore in the browser</Button>

                    <Button href="https://docs.google.com/forms/d/e/1FAIpQLSebaih8bBY5wOGvmInL2Xi5Y691UlvVrg0thSPz8LfR_Vfb6w/viewform" target="_blank">Apply as a builder</Button>
                </template>
            </Section>
        </div>
        <Timeline :events="events" />
    </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Section from "@/components/Section.vue";
import Splash from "@/components/Splash.vue";
import Timeline from "@/components/Timeline.vue";

export default {
    name: "Century",

    components: {
        Button,
        Section,
        Splash,
        Timeline
    },

    data( ) {
        return {
            events: [
                { date: "1873", title: "North Hall", image: "/images/century/NorthHall.png", caption: "North Hall", warp: "NorthHall" },
                { date: "1879", title: "Mining and Mechanic Arts Building", image: "/images/century/MMAB.png", caption: "Mining and Mechanic Arts Building", warp: "MMAB" },
                { date: "1881", title: "Bacon Hall", image: "/images/century/BaconHall.png", caption: "Bacon Hall", warp: "BaconHall" },
                { date: "1893", title: "Mechanics Building", image: "/images/century/Mechanics.png", caption: "Mechanics Building", warp: "Mechanics" },
                { date: "1894", title: "Conservatory", image: "/images/century/Conservatory.png", caption: "Conservatory", warp: "Conservatory" },
            ],
        };
    }
}
</script>

<style lang="scss">
#century {
    font-family: "Merriweather";
}
</style>