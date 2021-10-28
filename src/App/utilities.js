import session from "./session";
import config from "../config";

const utilities = {
  ...config,
  /**
   * configCustom[{name:"",value:""}]
   */
  async dPost(url, datas, configCustom = null) {
    const Token = await session.getToken();
    var configs = {
      "X-CSRF-Token": Token,
      "Content-Type": "application/json",
    };
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.post(url, datas, {
      headers: configs,
    });
  },
  /**
   * Get datas;
   */
  async dGet(url, configCustom = null) {
    const Token = await session.getToken();
    var configs = {
      "X-CSRF-Token": Token,
      "Content-Type": "application/json",
    };
    if (configCustom) {
      configs = this.mergeHeaders(configCustom, configs);
    }
    return this.get(url, {
      headers: configs,
    });
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
export default utilities;
