<template>
    <div class="graduation-notification">
        <div class="graduation-notification-new">
            <Section heading="Graduation">
                <template v-slot:subHeading>Spring 2021</template>

                <template v-slot:description><span class="important">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                             incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation
                                             ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
            </Section>
        </div>

        <div class="graduation-notification-old">
            <div class="graduation-notification-alert">with a twist</div>

            <Section heading="in Minecraft">
                <template v-slot:subHeading>19th century Berkeley</template>

                <template v-slot:description><span class="important">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                             incididunt ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation
                                             ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>

                <template v-slot:buttons>
                    <Button href="#">Learn more</Button>

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
    name: "GraduationNotification",

    components: {
        Button,
        LinkButton,
        Section
    }
}
</script>

<style lang="scss">
.graduation-notification {
	display: flex;
	flex-direction: column;

    text-align: center;

	position: fixed;

	z-index: 999;

	height: 100vh;
	width: 100vw;

    top: 0;
    left: 0;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"), linear-gradient(to bottom, #F5F2E5 50%, white 50%);

    .graduation-notification-old, .graduation-notification-new {
        flex-basis: 50%;
    }

    .graduation-notification-new {
        display: flex;
        align-items: flex-end;

        padding-bottom: 48px;

        .graduation-notification-heading {
            font-size: 48px;
            font-weight: 900;
            color: black;
            line-height: 1.5;

            text-shadow: 4px 4px var(--accent-color);
        }
    }

    .graduation-notification-old {
        .graduation-notification-heading {
            font-size: 40px;
            font-weight: 900;
            color: black;
            line-height: 1.5;

            text-shadow: 4px 4px var(--accent-color);
        }

        .graduation-notification-alert {
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
