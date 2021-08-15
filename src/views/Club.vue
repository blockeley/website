<template>
    <div id="club">
        <Splash image="/images/logo-transparent.png" continue="true">
            <Section heading="in Minecraft">
                <template v-slot:subHeading>University of California, Berkeley</template>

                <template v-slot:description><span class="important">We aim to recreate the entire Berkeley campus in Minecraft for you to explore.</span>
                                             <br>Student volunteers have spent thousands of hours replicating buildings, parks, historical landmarks, and other
                                             various locations around the Berkeley campus to create a genuine virtual experience for our guests.</template>

                <alert :icon="statusIcon" :message="statusMessage" />
            </Section>
        </Splash>
        <Section heading="Our Story" />
        <Timeline :events="events"/>
        <div class="admin-wrapper">
            <Section heading="Club Members" />
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-11 col-xs-12">
                        <div class="avatars-wrapper">
                            <AvatarCard v-for="member in this.members" :key="member.ign" :ign="member.ign" :name="member.name"
                                :image="member.image" :role="member.role" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thanks">
            <Section heading="Builders of Blockeley">
                <template v-slot:subHeading>Thank You</template>
            </Section>
            <Credits :credits="builders" />
        </div>
        <Section heading="Get Involved" />
    
    </div>
</template>

<script>
import Splash from "@/components/Splash";
import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import AvatarCard from "@/components/AvatarCard";
import Credits from "@/components/Credits";

export default {
    name: "Club",
    components: {
        Splash,
        Section,
        Timeline,
        AvatarCard,
        Credits
    },
    data ( ) {
        return {
            members: [
                { ign: "X1_Dragon", role: "President" },
                { ign: "SimpleDF", role: "Vice President" },
                { ign: "Mistri", role: "Technology" },
                { ign: "RojoM", role: "Technology" },
                { ign: "Mathematician", role: "Technology" },
                { ign: "Mathhulk", role: "Technology" },
                { ign: "SkyTechBytes", role: "Flex" },
                { ign: "Rimpo__", role: "PR" },
                { ign: "Swannnie", role: "HR" },
                { ign: "Pikiwikibulbie", role: "Events/Production" },
                { ign: "GetNuanced", role: "Events/Production" },
                { ign: "Agent_bjorn", role: "Advisory Board" },
                { ign: "Zetrox42", role: "Advisory Board" },
                { ign: "Zebraturkey96", role: "Advisory Board" },
                { ign: "Whale_Watch", role: "Advisory Board" },
                { ign: "Onnowhere", role: "Advisory Board" },
            ],
            events: [
                { date: "March 13th, 2020", title: "National Lockdown", description: "The Covid-19 pandemic forces classes to be taught remotely" },
                { date: "April, 2020", title: "Construction of Blockeley Begins", description: "" },
                { date: "April, 2020", title: "Building Expands to the entirety of the UC Berkeley Campus", description: "" },
                { date: "May, 2020", title: "Blockeley Commencement", description: "Blockeley hosts a virtual graduation in Minecraft for the class of 2020" }
            ],
            builders: [
                "one", "one", "one", "one", "one", "two", "one", "one", "one", "one", "one", "one", "one", "one", "one", "three", "one", "one", "one", "one", "one", "two", "one", "one", "one", "one", "one", "one", "one", "one", "one", "three"
            ]
        }
    },
}
</script>

<style lang="scss">

    .admin-wrapper {
        margin-top: 24px;
        margin-bottom: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
    }
    .avatars-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: space-between;
    }
    .thanks {
        margin-top: 24px;
        margin-bottom: 24px;
        padding-top: 24px;
        padding-bottom: 24px;
        background-color: white;
        height: 60vh;
    }
</style>