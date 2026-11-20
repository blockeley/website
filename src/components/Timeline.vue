<template>
    <div class="timeline-wrapper">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-5 timeline">
                    <Event v-for="event in events" :key="event.title" v-bind="event" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Event from "@/components/Event.vue";

import type { TimelineEvent } from "@/types";

defineProps<{
    events: TimelineEvent[];
}>( );
</script>

<style lang="scss">
    .timeline-wrapper {
        margin-top: 48px;
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 48px;

        .timeline {
            position: relative;

            &::after {
                content: "";
                position: absolute;

                top: 0;
                bottom: 0;
                left: 0;

                border-left: .5rem dotted #505050;

                @media (min-width: 768px) {
                    left: calc(50% - .25rem + 1px);
                }
            }
        }
    }
</style>