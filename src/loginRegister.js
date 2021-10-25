//import "@babel/polyfill";
//import "mutationobserver-shim";
import Vue from "vue";
//import BootstrapVue from "bootstrap-vue";
import loginRegister from "./App/components/loginRegister.vue";
// Vue.use(BootstrapVue);
// const loginRegister = [];
const tag = "#appLoginRegister";
new Vue({
  render: (h) => {
    return h("div", {}, [
      h(loginRegister, {
        props: {},
      }),
    ]);
  },
}).$mount(tag);
