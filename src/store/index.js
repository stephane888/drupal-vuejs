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
  },
  mutations: {},
  actions: {},
  modules: {},
});
