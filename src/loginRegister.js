//import "@babel/polyfill";
//import "mutationobserver-shim";
import Vue from "vue";
//import BootstrapVue from "bootstrap-vue";
//import loginRegister from "./App/components/loginRegister.vue";
// Vue.use(BootstrapVue);
// const loginRegister = [];
const tag = "appLoginRegister";
const elt = document.getElementById(tag);
/**
 * Cette valeur permet de definir, action a effectuer apres la connexion ou la soumission.
 */
//on recupere la valeur de : action_after_login
var action_after_login = "default";
if (elt.hasAttribute("action_after_login")) {
  action_after_login = document
    .getElementById(tag)
    .getAttribute("action_after_login");
}

/**
 * Permet de selectionner le type de formulaire pour la creation d'un nouveau compte.
 * Pour le moment on a deux : generateur de pass et le model fournit par D9.
 */
var model_register_form = "default";
if (elt.hasAttribute("model_register_form")) {
  action_after_login = document
    .getElementById(tag)
    .getAttribute("model_register_form");
}
// function loadScript(src) {
//   return new Promise((resolv) => {
//     var s = document.createElement("script");
//     s.setAttribute("src", src);
//     s.onload = function () {
//       console.log(" Chargement du script ok : ", src);
//       resolv(true);
//     };
//     document.head.appendChild(s);
//   });
// }
const loginRegister = () =>
  import("./App/components/loginRegister.vue").then((component) => {
    return new Promise((resolv) => {
      const callback = () => {
        resolv(component);
      };
      callback();
      // loadScript("https://accounts.google.com/gsi/client").then(() => {
      //   callback();
      // });
    });
  });
new Vue({
  render: (h) => {
    return h("div", {}, [
      h(loginRegister, {
        props: {
          action_after_login: action_after_login,
          model_register_form: model_register_form,
        },
      }),
    ]);
  },
}).$mount(document.getElementById(tag));
