//import "@babel/polyfill";
//import "mutationobserver-shim";
import Vue from "vue";
import store from "./store";
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
 * Pour le moment on a deux : Generateur de pass('generate_password') et le Model fournit par D9('default').
 */
var model_register_form = "default";
if (elt.hasAttribute("model_register_form")) {
  model_register_form = document
    .getElementById(tag)
    .getAttribute("model_register_form");
}

const loginRegister = () =>
  import("./App/components/LoginRegister.vue").then((component) => {
    return new Promise((resolv) => {
      const callback = () => {
        resolv(component);
      };
      callback();
    });
  });
// On importe le validateur de champs.
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
  store,
  render: (h) => {
    return h("div", {}, [
      h(loginRegister, {
        props: {
          actionAfterLogin: action_after_login,
          modelRegisterForm: model_register_form,
        },
      }),
    ]);
  },
}).$mount(document.getElementById(tag));