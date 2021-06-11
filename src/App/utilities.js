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
      configs = this.mergeHeaders(configCustom, configs);
    }
    return config.post(config.baseURl + url, datas, {
      headers: configs,
    });
  },
  /**
   * get datas;
   */
  async get(url, configCustom = null) {
    const Token = await session.getToken();
    var configs = {
      "X-CSRF-Token": Token,
      "Content-Type": "application/json",
    };
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return config.get(config.baseURl + url, {
      headers: configs,
    });
  },
  /**
   *
   */
  mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (const i in configCustom) {
        configs.append(configCustom[i].name, configCustom[i].value);
      }
    }
    return configs;
  },
};
export default utilities;
