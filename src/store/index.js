import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      name: [{ value: "" }],
      mail: [{ value: "" }],
    },
    password: "",
    mail: "",
    /**
     * C'est l'application qui utilise le module qui doit charger la configuration dans un vuex.
     * - "/login-rx-vuejs/get-configs"
     */
    configs_login_rx_vuejs: {},
    model_register_form: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
