<template>
    <div class="timeline-wrapper">
        <div class="container"> 
            <div id="" class="row justify-content-center">
                <div class="col-lg-4 col-md-5 timeline">
                    <Event v-for="event in this.events" :key="event.warp" :title="event.title" :caption="event.caption"
                        :image="event.image" :warp="event.warp" :date="event.date" :description="event.description"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Event from '@/components/Event'

export default {
    name: "Timeline",

    components: {
        Event
    },

    props: [
        "events"
    ]
}
</script>

<style lang="scss">
    .timeline-wrapper {
        margin-top: 48px;
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 48px;

        .timeline {
            position: relative;

            @media (min-width: 768px) {
                &::after {
                    content: "";
                    position: absolute;

                    top: 0;
                    bottom: 0;
                    left: calc(50% - .25rem + 1px);

                    border-left: .5rem dotted #505050;
                }
            }
            @media (max-width: 768px) {
                &::after {
                    content: "";
                    position: absolute;

                    top: 0;
                    bottom: 0;
                    left: 0;

                    border-left: .5rem dotted #505050;
                }
            }
        }
    }
</style>