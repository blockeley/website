<template>
    <div class="event">
        <div class="event-header">
            <p v-if="date" class="event-date">
                {{ date }}
            </p>
            <p v-if="title" class="event-heading">{{ title }}</p>
        </div>
        <div class="event-body">
            <p v-if="description" class="event-description">
                {{ description }}
            </p>
        </div>
        
        <Location v-if="image && warp" :image="image" :title="caption" :warp="warp" />

        <Framed v-if="image && !warp" :image="image" />
    </div>
</template>

<script>
import Location from '@/components/Location.vue';
import Framed from '@/components/Framed.vue';

export default {
    name: "Event",
    props: [
        "title",
        "image",
        "caption",
        "warp",
        "date",
        "description"
    ],
    components: {
        Location,
        Framed
    }
}
</script>

<style lang="scss">
    .event {

        position: relative;

        .event-header {
            display: flex;
            flex-direction: column;

            p.event-date {
                font-size: 24px;
                font-weight: 700;
                line-height: 1.2;
                color: rgba(black, 0.25);

                margin-bottom: 4px;
            }

            p.event-heading {
                font-size: 36px;
                font-weight: 900;
                line-height: 1.2;
                color: black;

                margin-bottom: 24px;
            }
        }
        
        .event-body {
            p.event-description {
                font-size: 16px;
                font-weight: 400;
                line-height: 1.2;
                color: rgba(black, 0.5);
                margin-bottom: 24px;
            }
        }

        @media (min-width: 768px) {
            text-align: right;
            right: calc(50% + 3rem);
            margin-top: -10%;
            margin-bottom: -10%;

            &:nth-of-type(2n) {
                flex-direction: row-reverse;

                text-align: left;
                left: calc(50% + 3rem);
            }
        }
        @media (max-width: 768px) {
            text-align: left;
            left: 2rem;

            margin-top: 48px;
            margin-bottom: 48px;
        }
    }

</style>