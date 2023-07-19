import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
// init vee-validate
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
import { required, email, alpha } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "Ce champs est requis",
});
extend("email", email);
extend("alpha", alpha);
//
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
