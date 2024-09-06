<template>
  <b-container>
    <h1>Login drupal</h1>
    <loginRegister
      urlLogo="https://habeuk.com/sites/default/files/styles/medium/public/2022-07/untitled-42_4x-v2.png"
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
    //
  },
  methods: {},
};
</script>

<style lang="scss">
//@import "~@/assets/scss/vendors/bootstrap-vue/index";
body {
  background: #233f59;
}
</style>
