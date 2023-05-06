import { AjaxBasic } from "wbuutilities";
/**
 * Ce fichier a pour role de gerer laa connexion des utilisateur.
 * Logique :
 * 1 : les paramettres de connexion sont verfiées.
 * 2 : Si ok, on sauvegarde dans local storage.
 * 3 : on initialise la
 */
const keyCren = "drupal-vuejs-credential";
const valCren = "drupal-vuejs-cre-val";
export default {
  ...AjaxBasic,
  /**
   * ( Semble fonctionner au niveau drupal sans necessite de module ).
   * values = {
   *     name: '',
   *     pass: '',
   * }
   * @param {*} values
   * @returns
   */
  login(values) {
    return new Promise((resolv, reject) => {
      if (values.name && values.pass) {
        this.post("/user/login?_format=json", values)
          .then((resp) => {
            this.saveTempCredential(values, resp.data);
            resolv(resp);
          })
          .catch((error) => reject(error));
      } else throw "Format de connexion non valide";
    });
  },
  /**
   * On sauvegarde de maniere temporaire les identifications de connexion.
   * Require https for securities.
   */
  saveTempCredential(values, resp) {
    localStorage.setItem(keyCren, JSON.stringify(values));
    localStorage.setItem(valCren, JSON.stringify(resp));
  },
  loadCredential() {
    const cre = localStorage.getItem(keyCren);
    if (cre) {
      return JSON.parse(cre);
    } else false;
  },
  deleteConnexion() {
    localStorage.removeItem(keyCren);
  },
  checkCurrentUserIsLogin() {
    const cre = localStorage.getItem(valCren);
    const cre1 = localStorage.getItem(keyCren);
    if (cre && cre1) {
      return JSON.parse(cre);
    } else false;
  },
};
