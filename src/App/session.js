import config from "../config";
export default {
  ...config,
  url_session: "/session/token",
  token: null,
  /**
   * Permet d'obtenir la session de token.
   * La session de tokens ne change pas durant une session.
   * il serait peut etre preferable de demander qu'il expire apres un certains temps. ( https://www.drupal.org/project/marketing_cloud/issues/3195685 )
   */
  getToken() {
    return new Promise((resolv) => {
      if (this.token) resolv(this.token);
      this.get(this.url_session).then((resp) => {
        this.token = resp.data;
        resolv(resp.data);
      });
    });
  },
};
