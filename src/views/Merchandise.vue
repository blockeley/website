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

                        <a target="_blank" href="https://patreon.blockeley.com">
                            <Button>Patreon</Button>
                        </a>
                    </template>

                    <alert icon="favorite" message="A special thanks to Lin Tan for his generous contributions" />
                </Section>
            </Splash>

            <div id="apparel">
                <Section heading="T-shirts, sweatshirts, and more" variant="inline">
                    <template v-slot:subHeading>Merchandise</template>

                    <template v-slot:description><span class="important">Your purchase directly contributes to the Blockeley project and the virtual Minecraft campus.</span>
                                                 <br>Every dollar Blockeley earns will be reinvested and covers server costs as well as funding for future events.</template>
                </Section>
            </div>

            <div class="container">
                <Options :options="types" centered="true" @change="setSelectedType" />

                <div id="merchandise-products-wrapper" class="row justify-content-center">
                    <div v-for="product in filteredProducts" class="col-xl-3 col-lg-4 col-md-6" :key="product.handle">
                        <MerchandiseProduct :product="product" />
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
import Options from "@/components/Options";
import Alert from "@/components/Alert";
import MerchandiseProduct from "@/components/MerchandiseProduct";

export default {
    name: "Store",

    components: {
        Button,
        Splash,
        Section,
        Options,
        MerchandiseProduct,
        Alert
    },

    data( ) {
        return {
            products: null,
            filteredProducts: null,

            types: null,
            selectedType: "All"
        };
    },

    methods: {
        scrollToApparel( ) {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.getElementById("apparel").offsetTop - 128
            });
        },

        setSelectedType(type) {
            this.selectedType = type;

            if(type === "All") {
                this.filteredProducts = this.products;

                return;
            }

            this.filteredProducts = this.products.filter(product => product.productType === type);
        }
    },

    mounted( ) {
        this.$client.product.fetchAll( )
        .then(products => {
            let types = ["All"];

            for(const product of products) {
                if( product.productType.length === 0 || types.includes(product.productType) ) continue;

                types.push(product.productType);
            }

            this.products = products;
            this.filteredProducts = products;
            this.types = types;
        });
    }
}
</script>

<style lang="scss">
#store .options {
    margin-bottom: 48px;
}

#merchandise-products-wrapper {
    margin-bottom: -24px;

    .merchandise-product {
        margin-bottom: 24px;
    }
}
</style>
