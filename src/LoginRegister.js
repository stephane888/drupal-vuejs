//import "@babel/polyfill";
//import "mutationobserver-shim";
import Vue from "vue";
import store from "./store";
//import BootstrapVue from "bootstrap-vue";
//import loginRegister from "./App/components/loginRegister.vue";
// Vue.use(BootstrapVue);
// import de quelques composant bootstrap-vuejs.
import { BAlert } from "bootstrap-vue";
Vue.component("BAlert", BAlert);
// const loginRegister = [];
const tag = "appLoginRegister";
const elt = document.getElementById(tag);

/**
 * Cette valeur permet de definir l'action à effectuer apres la connexion.
 */
//on recupere la valeur de : action_after_login
var action_after_login = "default";
if (elt.hasAttribute("action_after_login")) {
  action_after_login = document
    .getElementById(tag)
    .getAttribute("action_after_login");
}

/**
 * Cette valeur permet de definir l'action à effectuer apres la creation d'un compte.
 */
var actionAfterRegister = action_after_login;
if (elt.hasAttribute("action_after_register")) {
  actionAfterRegister = document
    .getElementById(tag)
    .getAttribute("action_after_register");
}
/**
 * Apres la creation d'un compte on peut afficher ou pas un modal avec des informations specifique.( voir la configuration du modeule settings.form )
 */
var showModalSuccess = true;
if (elt.hasAttribute("show-modal-success")) {
  actionAfterRegister = document
    .getElementById(tag)
    .getAttribute("show-modal-success");
}

/**
 * Permet de selectionner le type de formulaire pour la creation d'un nouveau compte.
 * Pour le moment on a deux : Generateur de pass('generate_password') et le Model fournit par D9('default').
 * Logique : on definit à null pour permettre à la config de surcharger si elle n'est pas definit, car les valeurs endur reste prioritaire.
 * On a mit false, car on avait erreur de type check fail. (il attent String, Number mais a recu undefined, pareil pour null)
 */
var model_register_form = false;
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
    /**
     * Utilisation des données provenant de la config, ( la configuration en dur a la priorité )
     */
    //
    return h("div", {}, [
      h(loginRegister, {
        props: {
          actionAfterLogin: action_after_login,
          modelRegisterForm: model_register_form,
          actionAfterRegister: actionAfterRegister,
          showModalSuccess: showModalSuccess,
        },
      }),
    ]);
  },
}).$mount(document.getElementById(tag));
