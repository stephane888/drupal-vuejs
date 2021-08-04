import Vue from "vue";
import { AjaxToastBootStrap } from "wbuutilities";
const vm = new Vue();
export default {
  messages: {
    log_email: "Email ou Nom d'utilisateur",
    pass: "Mot de passe",
    login: "Nom d'utilisateur",
    mail: "Email",
    submit: {
      first: "Suivant",
      connect: "Connexion",
      register: "S'inscrire",
    },
    devisCreateUser:
      "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>",
  },
  modalSuccess(body, conf) {
    return AjaxToastBootStrap.modalSuccess(body, conf);
  },
  /**
   *
   * @param {Array} text
   * @returns
   */
  msgCreate(texts) {
    var h = vm.$createElement;
    const text = [];
    for (const i in texts) {
      text.push(
        h(
          "p",
          {
            domProps: {
              innerHTML: texts[i],
            },
            style: {
              lineHeight: "25px",
              fontSize: "17px",
              padding: "15px 15px 0px",
              margin: 0,
            },
          },
          []
        )
      );
    }
    return h("div", {}, [text]);
  },
};
