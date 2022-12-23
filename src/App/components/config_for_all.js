// Contient les methodes et attributs utilisé par toutes les sous modules.
export default {
  /**
   *
   * @param {String} action
   * @param {Object} resp
   */
  AfterRedirect(action = "reload", url_redirect = null, resp = null) {
    console.log("AfterRedirect action .", action);
    var stepe = null;
    /**
     * Pour forcer la rediction.
     */
    if (action == "redirect" && url_redirect) {
      //
    } else if (action == "home") {
      window.location.assign("/");
    }
    // Reload current page.
    else if (action == "reload") {
      window.location.reload();
    }
    // Emit event when is finnish.
    else if (action == "emit_even") {
      var event = new CustomEvent("login_rx_vuejs__user_is_login");
      document.dispatchEvent(event);
    }
    // Comportement par defaut.
    else if (action == "default") {
      // --; Si l'utilisateur est redirigé vers une autre url.
      if (
        resp.reponse &&
        resp.reponse.config.url !== resp.reponse.request.responseURL
      ) {
        window.location.assign(resp.reponse.request.responseURL);
      }
      // On demande la creation d'un utilisateur.
      else if (resp.data && resp.data.createuser) {
        stepe = "final-gl-register";
      }
      // On recharge la meme page.
      else if (resp.data) {
        window.location.reload();
      }
    }
    return stepe;
  },
};
