import { AjaxToastBootStrap } from "wbuutilities";
import user from "./user";
import drupalUtile from "../drupal-utilities";
var formatBasicAuth = function (userName, password) {
  var basicAuthCredential = userName + ":" + password;
  var bace64 = btoa(basicAuthCredential);
  return "Basic " + bace64;
};
export default {
  ...AjaxToastBootStrap,
  ...user,
  ...drupalUtile,
  /**
   * Recupere les données à travers une route authentifié via drupal;
   */
  async dGet(url, configCustom = null, showNotification = false) {
    const userLogin = this.loadCredential();
    var configs = {
      "Content-Type": "application/json",
    };
    if (userLogin) {
      configs["Authorization"] = formatBasicAuth(userLogin.name, userLogin.pass);
    }
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.bGet(
      url,
      {
        headers: configs,
      },
      showNotification
    );
  },
  /**
   * Enregistre les données à travers une route authentifié via drupal;
   */
  async dPost(url, datas, configCustom = null, showNotification = true) {
    const userLogin = this.loadCredential();
    var configs = {
      "Content-Type": "application/json",
    };
    if (userLogin) {
      configs["Authorization"] = formatBasicAuth(userLogin.name, userLogin.pass);
    }
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.bPost(
      url,
      datas,
      {
        headers: configs,
      },
      showNotification
    );
  },
  /**
   *
   */
  mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (const i in configCustom) {
        configs[i] = configCustom[i];
      }
    }
    return configs;
  },
};
