<template>
    <div id="club">
        <Splash image="/images/logo-transparent.png" continue="true">
            <Section heading="in Minecraft">
                <template v-slot:subHeading>University of California, Berkeley</template>

                <template v-slot:description><span class="important">We aim to recreate the entire Berkeley campus in Minecraft for you to explore.</span>
                                             <br>Student volunteers have spent thousands of hours replicating buildings, parks, historical landmarks, and other
                                             various locations around the Berkeley campus to create a genuine virtual experience for our guests.</template>
            </Section>
        </Splash>
        <div class="story-wrapper">
            <Section heading="Our Story" />
            <Timeline :events="events" />
        </div>
        <div class="admin-wrapper">
            <Section heading="Club Members">
                <template v-slot:subHeading>Meet Our Team</template>
            </Section>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-11 col-xs-12">
                        <div class="avatars-wrapper">
                            <AvatarCard v-for="member in this.members" :key="member.ign" :ign="member.ign" :name="member.name"
                                :img="member.img" :role="member.role" />
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
            <Credits :credits="shuffleBuilders()" />
        </div>
    </div>
</template>

<script>
import Splash from "@/components/Splash";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import AvatarCard from "@/components/AvatarCard";
import Credits from "@/components/Credits";
import Button from "@/components/Button";

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
                { ign: "X1_Dragon", role: "President", img: "administrator-male" },
                { ign: "SimpleDF", role: "Vice President", img: "businesswoman" },
                { ign: "Mistri", role: "Technology", img: "console" },
                { ign: "RojoM", role: "Technology", img: "server" },
                { ign: "Mathematician", role: "Technology", img: "console" },
                { ign: "Mathhulk", role: "Technology", img: "web-design" },
                { ign: "SkyTechBytes", role: "Flex", img: "idea" },
                { ign: "Rimpo__", role: "PR", img: "megaphone" },
                { ign: "Swannnie", role: "HR", img: "chat" },
                { ign: "Pikiwikibulbie", role: "Events/Production", img: "event" },
                { ign: "GetNuanced", role: "Events/Production", img: "clapperboard" },
                { ign: "Agent_bjorn", role: "Advisory Board", img: "name-tag" },
                { ign: "Zetrox42", role: "Advisory Board", img: "name-tag" },
                { ign: "Zebraturkey96", role: "Advisory Board", img: "name-tag" },
                { ign: "Whale_Watch", role: "Advisory Board", img: "name-tag" },
                { ign: "Onnowhere", role: "Advisory Board", img: "name-tag" },
            ],
            events: [
                { date: "March 13th, 2020", title: "National Lockdown", description: "The Covid-19 pandemic forces classes to be taught remotely" },
                { date: "April, 2020", title: "Construction of Blockeley Begins", description: "" },
                { date: "April, 2020", title: "Building Expands to the entirety of the UC Berkeley Campus", description: "" },
                { date: "May, 2020", title: "Blockeley Commencement", description: "Blockeley hosts a virtual graduation in Minecraft for the class of 2020" }
            ],
            builders: [
                "Sample Text","Aj11240","RevivedAlt","atoge2","HiddenCamera","poncho72781","CorporalRivalle","HugeClicker","11zaq","The1800Guy","wellfedbison"
            ]
        }
    },
    methods: {
        shuffleBuilders() {
            // @source https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/ 
            // Start from the last element and swap
            // one by one. We don't need to run for
            // the first element that's why i > 0
            const n = this.builders.length;
            const arr = [...this.builders];
            for (let i = n - 1; i > 0; i--)
            {
            
                // Pick a random index from 0 to i inclusive
                let j = Math.floor(Math.random() * (i + 1));
        
                // Swap arr[i] with the element
                // at random index
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        }
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
        margin-top: 96px;
        margin-bottom: 48px;
        padding-top: 48px;
        padding-bottom: 48px;

        background-color: rgb(240, 240, 240);
        height: 700px;
    }
    .thanks {
        margin-bottom: 36px;
    }
</style>