import Vue from "vue";
import VueX from "vuex";
import VueXPersist from "vuex-persist";
import Client from "shopify-buy";

import App from "./App.vue";
import router from "./router";

const client = Client.buildClient({
    domain: "blockeley.myshopify.com",
    storefrontAccessToken: "ac49c057d06367614bca2817f23206df"
});

Vue.use(VueX);
Vue.config.productionTip = false;
Vue.prototype.$client = client;

const storage = new VueXPersist({
    storage: window.localStorage
});

const store = new VueX.Store({
    state: {
        identifier: null,
        cart: 0
    },
    mutations: {
        setIdentifier(state, identifier) {
            state.identifier = identifier;
        },

        incrementCart(state) {
            state.cart++;
        },

        decrementCart(state) {
            state.cart--;
        }
    },
    plugins: [ storage.plugin ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#application");
