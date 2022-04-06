// Gere uniquement la connexion Google.

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
