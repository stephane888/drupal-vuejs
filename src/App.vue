<template>
  <b-container>
    <h1>Login drupal</h1>
    <loginRegister
      urlLogo="http://lesroisdelareno.kksa/themes/custom/gater/logo.png?v=1"
    >
    </loginRegister>
    <div v-for="(template, i) in templates" :key="i" class="list-template">
      <component :is="template" @b_form_click="b_form_click"></component>
    </div>
    <pre> {{ models }} </pre>
  </b-container>
</template>

<script>
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
//import loginRegister from "./App/components/loginRegister.vue";
import drupalFormFields from "./App/formatFields/formatFieldsBootstrap.js";
export default {
  name: "App",
  components: {
    loginRegister: () =>
      import("./App/components/LoginRegister.vue").then((component) => {
        return new Promise((resolv) => {
          const callback = () => {
            resolv(component);
          };
          loadScript("https://accounts.google.com/gsi/client").then(() => {
            callback();
          });
        });
      }),
  },
  data() {
    return {
      templates: [],
      models: {},
    };
  },
  mounted() {
    this.getFields();
  },
  methods: {
    getFields() {
      const F = new drupalFormFields("user", "user");
      F.format().then((temp) => {
        console.log(temp);
        this.templates = temp.templates;
        this.models = temp.models;
      });
    },
    b_form_click() {
      alert("b_form_click");
    },
  },
};
</script>

<style lang="scss">
//@import "~@/assets/scss/vendors/bootstrap-vue/index";
</style>
