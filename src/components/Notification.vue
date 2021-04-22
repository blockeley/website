<template>
    <div class="notification">
        <div class="container">
            <div class="notification-body">
                <p class="notification-message">
                    <!-- Brief summary for mobile devices -->
                    <span class="message-desktop">{{ desktopMessage }}</span>
                    <span class="message-mobile">{{ mobileMessage }}</span>
                </p>

                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notification",

    props: [
        "desktopMessage",
        "mobileMessage"
    ]
}
</script>

<style lang="scss">
.notification {
    background-color: black;

    .notification-body {
        height: 40px;

        display: flex;
        align-items: center;

        p.notification-message {
            font-size: 12px;
            font-weight: 400;
            color: rgba(white, 0.5);
            line-height: 1;

            flex-grow: 1;

            margin-right: 24px;

            @media (min-width: 992px) {
                .message-mobile {
                    display: none;
                }
            }

            @media (max-width: 992px) {
                .message-desktop {
                    display: none;
                }
            }
        }
    }
}
</style>
