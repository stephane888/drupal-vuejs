import config from "../config";
export default {
  url_session: "/rest/session/token",
  token: null,
  /**
   * Permet d'obtenir le token.
   */
  getToken() {
    return new Promise((resolv) => {
      if (this.token) resolv(this.token);
      config.get(config.baseURl + this.url_session).then((resp) => {
        this.token = resp.data;
        resolv(resp.data);
      });
    });
  },
};
