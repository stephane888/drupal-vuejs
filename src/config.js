import { AjaxBasic } from "wbuutilities";
const config = {
  ...AjaxBasic,
  baseURl: window.location.host.includes("localhost")
    ? "http://lesroisdelareno.kksa"
    : window.location.origin,
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
