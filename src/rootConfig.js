import { AjaxBasic } from "wbuutilities";
const config = {
  ...AjaxBasic,
  languageId: window.drupalSettings && window.drupalSettings.path && window.drupalSettings.path.currentLanguage ? window.drupalSettings.path.currentLanguage : null,
  // on ne laisse la valeur par defaut, pour permttre au domaine local de pouvoir se connecter.
  TestDomain: window.location.host.includes("localhost") ? "http://habeuk.kksa" : window.location.protocol + "//" + window.location.host,
  /**
   * Retoune un entier arleatoire entre [99-999]
   */
  getRandomIntInclusive(min = 99, max = 999) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};
export default config;
