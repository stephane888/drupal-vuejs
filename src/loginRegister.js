//import "@babel/polyfill";
//import "mutationobserver-shim";
import Vue from "vue";
//import BootstrapVue from "bootstrap-vue";
//import loginRegister from "./App/components/loginRegister.vue";
// Vue.use(BootstrapVue);
// const loginRegister = [];
const tag = "#appLoginRegister";
function loadScript(src) {
  return new Promise((resolv) => {
    var s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}
const loginRegister = () =>
  import("./App/components/loginRegister.vue").then((component) => {
    return new Promise((resolv) => {
      const callback = () => {
        resolv(component);
      };
      loadScript("https://accounts.google.com/gsi/client").then(() => {
        callback();
      });
    });
  });
new Vue({
  render: (h) => {
    return h("div", {}, [
      h(loginRegister, {
        props: {},
      }),
    ]);
  },
}).$mount(tag);
