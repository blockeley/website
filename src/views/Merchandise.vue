<template>
    <div id="store">
        <template v-if="products">
            <Splash image="/images/shirt.png" continue="true">
                <Section heading="Merchandise">
                    <template v-slot:subHeading>Blockeley</template>

                    <template v-slot:description><span class="important">Purchase Blockeley merchandise and support Blockeley development.</span>
                                                 <br>Express school spirit on and off our virtual Minecraft campus with unique Blockeley apparel. Interested in
                                                 donating instead? Use the button below to learn more about the Blockeley Patreon.</template>

                    <template v-slot:buttons>
                        <Button @click.native="scrollToApparel">Browse apparel</Button>

                        <a href="https://patreon.blockeley.com">
                            <Button>Patreon</Button>
                        </a>
                    </template>
                </Section>
            </Splash>

            <div id="apparel">
                <Section heading="T-shirts, sweatshirts, and more" variant="background">
                    <template v-slot:subHeading>Merchandise</template>

                    <template v-slot:description><span class="important">Your purchase will be a direct contribution to Blockeley and the virtual Minecraft server.</span>
                                                 <br>Every dollar Blockeley earns will be reinvested and covers server costs and funding for future events.</template>
                </Section>
            </div>

            <div class="container">
                <div id="products" class="row justify-content-center">
                    <div v-for="product in products" class="col-lg-3" :key="product.handle">
                        <Product :image="product.images[0].src" :title="product.title" :price="product.variants[0].price" :identifier="product.handle" />
                    </div>
                </div>
            </div>
        </template>

        <template v-else>
            <Splash progress="true" />
        </template>
    </div>
</template>

<script>
import Button from "@/components/Button";
import Splash from "@/components/Splash";
import Section from "@/components/Section";
import Product from "@/components/Product";

export default {
    name: "Store",

    components: {
        Button,
        Splash,
        Section,
        Product
    },

    data( ) {
        return {
            products: null
        };
    },

    methods: {
        scrollToApparel( ) {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.getElementById("apparel").offsetTop - 128
            });
        }
    },

    mounted( ) {
        this.$client.product.fetchAll( )
        .then(products => {
            this.products = products;
        });
    }
}
</script>

<style lang="scss">
#products {
    // margin-bottom: -24px;

    .product {
        margin-bottom: 24px;
    }
}
</style>
