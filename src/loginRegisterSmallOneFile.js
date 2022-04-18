// Gere uniquement la connexion Google.

import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App/components/logingoogle.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  props: { idHtml: "commerce", classRender: ["my-4", "mx-0"] },
  mounted() {
    //
  },
}).$mount("#appLoginRegister");
