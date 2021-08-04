import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import loginRegister from "./App/components/loginRegister.vue";
Vue.use(BootstrapVue);
const tag = "#appLoginRegister";
const eltTag = document.querySelector(tag);
new Vue({
  render: (h) => {
    return h(loginRegister, {
      props: {
        urlLogo: eltTag.getAttribute("drupalLogo"),
      },
    });
  },
}).$mount(tag);
