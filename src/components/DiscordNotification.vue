<template>
    <div id="discord-notification">
        <div class="container">
            <div class="discord-notification">
                <p class="discord-notification-message">
                    <!-- Display different messages depending on screen size -->
                    <span class="description-desktop">Learn more about Blockeley and chat with Blockeley team members as well as our community on Discord.</span>
                    <span class="description-mobile">Join us on Discord.</span>
                </p>

                <a href="https://discord.gg/mmAK4D5">
                    <LinkButton alternate="true" size="small">Launch Discord</LinkButton>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/LinkButton";

export default {
    name: "DiscordNotification",

    components: {
        LinkButton
    }
}
</script>

<style lang="scss">
#discord-notification {
    background-color: black;

    .discord-notification {
        height: 40px;

        display: flex;
        align-items: center;

        p.discord-notification-message {
            font-size: 12px;
            font-weight: 300;
            color: rgba(white, 0.5);
            line-height: 1;

            flex-grow: 1;

            margin-right: 24px;

            @media (min-width: 992px) {
                .description-mobile {
                    display: none;
                }
            }

            @media (max-width: 992px) {
                .description-desktop {
                    display: none;
                }
            }
        }
    }
}
</style>
