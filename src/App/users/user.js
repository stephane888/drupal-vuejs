import utilities from "../utilities.js";

export default {
  ...utilities,

  getCurrentUser() {
    return new Promise((resolv) => {
      this.get("/login-rx-vuejs/current-user").then((resp) => {
        resolv(resp.data);
      });
    });
  },
  getUser(uid) {
    return new Promise((resolv) => {
      this.get("/user/" + uid + "?_format=json").then((resp) => {
        resolv(resp.data);
      });
    });
  },
  /**
   * Utilise le module login-vuejs
   * values ={
        name: [{ value: user }],
        password: [{ value: pass }],
      }
   * @param {*} values 
   * @returns 
   */
  loginRxVuejs(values) {
    if (
      values.name &&
      values.name[0] &&
      values.password &&
      values.password[0]
    ) {
      return this.post("/login-rx-vuejs/user-connexion", values);
    }
    throw "Format de connexion non valide";
  },
  /**
   * Semble fonctionner par defaut.
   * values ={
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
            this.getToken()
              .then((r) => {
                this.testAuthentificaton();
                resolv({ user: resp, token: r });
              })
              .catch((error) => reject(error));
          })
          .catch((error) => reject(error));
      } else throw "Format de connexion non valide";
    });
  },
  testAuthentificaton() {
    this.dGet("/gestion-project-v2/test");
  },
};
