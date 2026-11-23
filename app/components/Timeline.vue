<template>
    <div class="timeline-wrapper">
        <div class="container">
            <div class="timeline">
                <Event v-for="event in events" :key="event.title" v-bind="event" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Event from "@/components/Event.vue";

import type { TimelineEvent } from "@/types";

defineProps<{
    events: TimelineEvent[];
}>();
</script>

<style lang="scss">
.timeline-wrapper {
    margin-top: 48px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 48px;

    .timeline {
        position: relative;

        // A narrow centred column; the padding keeps the dotted line clear of the text
        padding-inline: 0.75rem;

        // Contain the events' (partly negative) margins instead of letting them collapse through
        display: flow-root;
        margin-inline: -0.75rem;

        @media (min-width: 768px) {
            width: calc((100% + 1.5rem) * 5 / 12);
            margin-inline: auto;
        }

        @media (min-width: 992px) {
            width: calc((100% + 1.5rem) * 4 / 12);
        }

        &::after {
            content: "";
            position: absolute;

            top: 0;
            bottom: 0;
            left: 0;

            border-left: 0.5rem dotted #505050;

            @media (min-width: 768px) {
                left: calc(50% - 0.25rem + 1px);
            }
        }
    }
}
</style>
