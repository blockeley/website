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
            <Section heading="Executive Board">
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
        <div class="admin-wrapper">
            <Section heading="Alumni Board">
                <template v-slot:subHeading>Alumni</template>
            </Section>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-11 col-xs-12">
                        <div class="avatars-wrapper">
                            <AvatarCard v-for="alum in this.alumni" :key="alum.ign" :ign="alum.ign" :name="alum.name"
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

import Builders from '@/data/builders';

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
                { ign: "Mistri", role: "Backend", img: "server" },
                { ign: "RojoM", role: "Backend", img: "server" },
                { ign: "Mathematician", role: "Consultant", img: "console" },
                { ign: "Mathhulk", role: "Frontend", img: "web-design" },
                { ign: "SkyTechBytes", role: "Flex", img: "idea" },
                { ign: "Rimpo__", role: "PR", img: "megaphone" },
                { ign: "Swannnie", role: "HR", img: "chat" },
                { ign: "Pikiwikibulbie", role: "Events/Production", img: "event" },
                { ign: "GetNuanced", role: "Events/Production", img: "clapperboard" },
            ],
            alumni: [
                { ign: "Agentbjorn", role: "Advisory Board", img: "name-tag" },
                { ign: "Zetrox42", role: "Advisory Board", img: "name-tag" },
                { ign: "Zebraturkey96", role: "Advisory Board", img: "name-tag" },
                { ign: "Whale_Watch", role: "Advisory Board", img: "name-tag" },
                { ign: "Onnowhere", role: "Advisory Board", img: "name-tag" },
            ],
            events: [
                { date: "March 13th, 2020", title: "National Lockdown", description: "The Covid-19 pandemic forces classes to be taught remotely" },
                { date: "March 15th, 2020", title: "Construction of Blockeley Begins", description: "", image: "images/history/image6.png" },
                { date: "April 16th, 2020", title: "The \"Big Post\" is sent out", description: "", image: "images/history/image5.png" },
                { date: "May 16th, 2020", title: "Blockeley Commencement", description: "Blockeley hosts a virtual graduation in Minecraft for the class of 2020", image: "images/history/image7.png" },
                { date: "May 17th, 2020", title: "Blockeley Music Festival", description: "", image: "images/history/image1.png" },
                { date: "June 11th, 2020", title: "MineMarch", description: "A virtual protest for Black Lives Matter is held in Blockeley", image: "images/history/image3.png" },
                { date: "July 4th, 2020", title: "July 4th Celebration", description: "", image: "images/history/image2.png" }
            ],
            builders: Builders.text.split(" ")
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