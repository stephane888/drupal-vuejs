import { AjaxBasic } from "wbuutilities";
const config = {
  ...AjaxBasic,
  baseURl: window.location.host.includes("localhost")
    ? "http://lesroisdelareno.kksa"
    : window.location.origin,
};
export default config;
