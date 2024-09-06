// Gere uniquement la connexion Google.
// le fichier est diviser en deux. Fonctionne dans le cas ou l'url de base est identique avec l'application.

import Vue from "vue";
const tag = "#appLoginRegister";

const loginRegister = () =>
  import("./App/components/logingoogle.vue").then((component) => {
    return new Promise((resolv) => {
      const callback = () => {
        resolv(component);
      };
      callback();
    });
  });
new Vue({
  render: (h) => {
    return h("div", {}, [
      h(loginRegister, {
        props: { idHtml: "commerce", classRender: ["my-4", "mx-0"] },
      }),
    ]);
  },
}).$mount(tag);
