<template>
    <div class="commencement-notification">
        <div class="commencement-notification-new">
            <Section heading="Commencement">
                <template v-slot:subHeading>Spring 2021</template>

                <!--<template v-slot:description><span class="important">Blockeley will be hosting the second annual virtual commencement in
                                             Minecraft on May 15th at 10 AM PST.</span> Hoping to provide a memorable experience for students
                                             graduating virtually this spring as well as benefit the Berkeley community, Blockeley will be
                                             donating all funds raised to the Berkeley Relief Fund. The Berkeley Relief Fund aids small businesses,
                                             nonprofit organizations, and residential tenants impacted by the COVID-19 pandemic.</template>-->

                 <template v-slot:description><span class="important">Join the Blockeley community for our second annual virtual commencement
                                              in Minecraft or on Twitch starting today at 10 AM PST.</span> We hope to provide a memorable
                                              experience for students graduating virtually this spring and benefit the Berkeley community
                                              by donating all funds raised to the Berkeley Relief Fund.

                                              <span class="commencement-notification-action">Connect to our Minecraft commencement server using the IP
                                                                                             <span class="action-important">blockeley.com</span>.</span></template>

                 <template v-slot:buttons>
                     <Button target="_blank" href="https://omnil.ink/blockeley">Learn more</Button>

                     <Button target="_blank" href="https://twitch.tv/blockeley">Watch live</Button>
                 </template>

                 <template v-slot:linkButtons>
                     <LinkButton target="_blank" href="https://berkeleyrelieffund.org/">Berkeley Relief Fund</LinkButton>
                 </template>
            </Section>
        </div>

        <div class="commencement-notification-old">
            <div class="commencement-notification-alert">with a twist</div>

            <Section heading="in Minecraft">
                <template v-slot:subHeading>19th century Berkeley</template>

                <template v-slot:description><span class="important">Along with a ceremony similar to that of 2020 commencement, Blockeley will be
                                             hosting a Minecraft server for you to explore a replica of the 1893 University of California, Berkeley
                                             campus.</span> By replicating buildings and landmarks using historic images of the 19th-century campus,
                                             volunteer builders have crafted a unique and surreal experience. Now, you can celebrate the history of
                                             Berkeley like never before!</template>

                <template v-slot:buttons>
                    <Button target="_blank" href="https://oldmap.blockeley.com">Explore online</Button>

                    <Button target="_blank" href="https://www.youtube.com/watch?v=naA8n9GzJF4">Watch trailer</Button>

                    <Button @click="close">Close</Button>
                </template>

                <template v-slot:linkButtons>
                    <LinkButton @click="close(true)">Do not show me this again</LinkButton>
                </template>
            </Section>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import Section from "@/components/Section";

export default {
    name: "CommencementNotification",

    components: {
        Button,
        LinkButton,
        Section
    },

    methods: {
        close(save) {
            this.$emit("close", save);
        }
    }
}
</script>

<style lang="scss">
.commencement-notification {
    text-align: center;

	position: fixed;

	z-index: 999;

    height: 0;
	min-height: 100vh;
    min-height: -webkit-fill-available;
	width: 100vw;

    overflow-y: auto;

    top: 0;
    left: 0;

    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), white;

    @media (min-width: 992px) {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 992px) {
        .section .section-header p.section-heading {
            font-size: 32px;
        }
    }

    .commencement-notification-new {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), #F5F2E5;

        padding-bottom: 48px;

        @media (min-width: 992px) {
            height: 45%;
        }

        @media (max-width: 992px) {
            padding-top: 48px;
        }

        .commencement-notification-action {
            font-size: 16px;
            font-weight: 500;
            color: black;
            line-height: 1;

            display: inline-block;

            margin-top: 24px;

            .action-important {
                color: black;

                background: rgba(black, 0.1);
            }
        }

        .commencement-notification-heading {
            font-size: 48px;
            font-weight: 900;
            color: black;
            line-height: 1.5;

            text-shadow: 4px 4px var(--accent-color);
        }
    }

    .commencement-notification-old {
        @media (min-width: 992px) {
            height: 55%;
        }

        @media (max-width: 992px) {
            padding-bottom: 48px;
        }

        .commencement-notification-heading {
            font-size: 40px;
            font-weight: 900;
            color: black;
            line-height: 1.5;

            text-shadow: 4px 4px var(--accent-color);
        }

        .commencement-notification-alert {
            height: 40px;

            display: inline-flex;
            align-items: center;

            background-color: black;

            padding-left: 24px;
            padding-right: 24px;

            transform: translateY(-20px);

            font-size: 14px;
            font-weight: 700;
            color: white;
            line-height: 1;
        }

        /*
         *  Override default application styles
         */
        font-family: "Merriweather";

        $color-transparent: rgba(black, 0.1);
        --accent-color: #{$color-transparent};

        .button {
            font-weight: 700;
        }

        .link-button, .section p.section-description .important {
            font-weight: 400;
        }
    }
}
</style>
