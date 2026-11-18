<template>
    <div id="club">
        <Splash image="/images/logo-transparent.webp" continue="true">
            <Section heading="Our mission">
                <template v-slot:subHeading>Blockeley</template>

                <template v-slot:description><span class="important">We serve as a living monument of the University of California, Berkeley campus.</span>
                                             <br>As we continue to expand our one-to-one recreation of the campus in Minecraft, we exist as a virtual representation
                                             of the culture and history which drive Berkeley's students, faculty, staff, and alumni.</template>
            </Section>
        </Splash>
        <div class="story-wrapper">
            <Section heading="Our story" />
            <Timeline :events="events" />
        </div>
        <div class="admin-wrapper">
            <Section heading="Executive Board">
                <template v-slot:subHeading>Meet our Team</template>
            </Section>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-11 col-xs-12">
                        <div class="avatars-wrapper">
                            <AvatarCard v-for="member in members" :key="member.ign" :ign="member.ign" :name="member.name"
                                :img="member.img" :role="member.role" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="admin-wrapper">
            <Section heading="Alumni Board">
                <template v-slot:subHeading>Alumni</template>
            </Section>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-11 col-xs-12">
                        <div class="avatars-wrapper">
                            <AvatarCard v-for="alum in alumni" :key="alum.ign" :ign="alum.ign" :name="alum.name"
                                :img="alum.img" :role="alum.role" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thanks-wrapper">
            <div class="thanks">
                <Section heading="Builders of Blockeley">
                    <template v-slot:subHeading>Thank You</template>
                    <template v-slot:buttons>
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSebaih8bBY5wOGvmInL2Xi5Y691UlvVrg0thSPz8LfR_Vfb6w/viewform" target="_blank">Apply as a builder</Button>
                    </template>
                </Section>
            </div>
            <Credits :credits="builders" />
        </div>
    </div>
</template>

<script>
import Splash from "@/components/Splash.vue";
import Section from "@/components/Section.vue";
import Timeline from "@/components/Timeline.vue";
import AvatarCard from "@/components/AvatarCard.vue";
import Credits from "@/components/Credits.vue";
import Button from "@/components/Button.vue";

import Builders from "@/data/builders.js";

// Fisher-Yates shuffle, run once per visit rather than on every render
function shuffle(items) {
    const array = [ ...items ];

    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random( ) * (i + 1));
        [ array[i], array[j] ] = [ array[j], array[i] ];
    }

    return array;
}

export default {
    name: "Club",
    components: {
        Splash,
        Section,
        Timeline,
        AvatarCard,
        Credits,
        Button
    },
    data ( ) {
        return {
            members: [
                { ign: "X1_Dragon", role: "Executive", img: "administrator-male" },
                { ign: "SimpleDF", role: "Executive", img: "administrator-male" },
                { ign: "Mistri", role: "Tech", img: "server" },
                { ign: "RojoM", role: "Tech", img: "server" },
                { ign: "BGHDDevelopment", role: "Tech", img: "server" },
                { ign: "mathhulk", role: "Tech", img: "server" },
                { ign: "Rimpo__", role: "PR", img: "megaphone" },
                { ign: "JingleTheLeo", role: "PR", img: "megaphone" },
                { ign: "ZophiaXP", role: "PR", img: "megaphone" },
                { ign: "Swannnie", role: "HR", img: "chat" },
                { ign: "zCat2", role: "Build Lead", img: "chat" },
                { ign: "SkyTechBytes", role: "Flex", img: "chat" },
                { ign: "Pikiwikibulbie", role: "Events/Production", img: "event" },
                { ign: "GetNuanced", role: "Events/Production", img: "event" },
            ],
            alumni: [
                { ign: "Agentbjorn", role: "Advisory Board", img: "name-tag" },
                { ign: "Zetrox42", role: "Advisory Board", img: "name-tag" },
                { ign: "Zebraturkey96", role: "Advisory Board", img: "name-tag" },
                { ign: "Whale_Watch", role: "Advisory Board", img: "name-tag" },
                { ign: "Onnowhere", role: "Advisory Board", img: "name-tag" },
                { ign: "Mathematician", role: "Advisory Board", img: "name-tag" },
                { ign: "falcon_heavy", role: "Advisory Board", img: "name-tag" },
            ],
            events: [
                { date: "March 13th, 2020", title: "National Lockdown", description: "The Covid-19 pandemic forces classes to be taught remotely" },
                { date: "March 15th, 2020", title: "Construction of Blockeley Begins", description: "", image: "/images/history/image6.webp" },
                { date: "April 16th, 2020", title: "The \"Big Post\" is sent out", description: "", image: "/images/history/image5.webp" },
                { date: "May 16th, 2020", title: "Blockeley Commencement", description: "Blockeley hosts a virtual graduation in Minecraft for the class of 2020", image: "/images/history/image7.webp" },
                { date: "May 17th, 2020", title: "Blockeley Music Festival", description: "", image: "/images/history/image1.webp" },
                { date: "June 11th, 2020", title: "MineMarch", description: "A virtual protest for Black Lives Matter is held in Blockeley", image: "/images/history/image3.webp" },
                { date: "July 4th, 2020", title: "July 4th Celebration", description: "", image: "/images/history/image2.webp" }
            ],
            builders: Builders.text.split(" ")
        }
    },

    mounted( ) {
        // Shuffled in the browser so the pre-rendered HTML hydrates without a mismatch
        this.builders = shuffle(this.builders);
    }
}
</script>

<style lang="scss">
    .space-wrapper {
        margin-top: 36px;
        margin-bottom: 36px;
        padding-top: 36px;
        padding-bottom: 36px;
    }
    .story-wrapper {
        @extend .space-wrapper;
    }
    .admin-wrapper {
        @extend .space-wrapper;
    }
    .avatars-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: space-between;
    }
    .thanks-wrapper {
        @extend .space-wrapper;
        margin-top: 48px;
        padding-top: 96px;
        padding-bottom: 96px;

        margin-bottom: 0;

        background: linear-gradient(to bottom, transparent, white 25%);
        height: 756px;
    }
    .thanks {
        margin-bottom: 96px;
    }
</style>
