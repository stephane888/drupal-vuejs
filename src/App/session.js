import config from "../config";
export default {
  url_session: "/session/token",
  token: null,
  /**
   * Permet d'obtenir le token.
   */
  getToken() {
    return new Promise((resolv) => {
      if (this.token) resolv(this.token);
      console.log(
        " Config :: ",
        config.BaseUrl(),
        "\n this.url_session :: ",
        this.url_session
      );
      config.get(config.BaseUrl() + this.url_session).then((resp) => {
        this.token = resp.data;
        resolv(resp.data);
      });
    });
  },
};
