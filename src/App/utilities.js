import session from "./session";
import config from "../config";

const utilities = {
  /**
   * configCustom[{name:"",value:""}]
   */
  async post(url, datas, configCustom = null) {
    const Token = await session.getToken();

    var configs = {
      "X-CSRF-Token": Token,
      "Content-Type": "application/json",
    };
    if (configCustom) {
      for (const i in configCustom) {
        configs.append(configCustom[i].name, configCustom[i].value);
      }
    }
    return config.post(config.baseURl + url, datas, {
      headers: configs,
    });
  },
  get(url) {
    return config.get(config.baseURl + url);
  },
};
export default utilities;
