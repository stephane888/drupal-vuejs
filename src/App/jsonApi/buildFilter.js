import config from "../../rootConfig.js";
/**
 * @see https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/filtering
 */
class filters {
  constructor(query = "") {
    this.query = query;
    //
    this.arrayOperators = ["IN", "NOT IN"];
  }
  addFilter(fieldName, operator, value) {
    this.ValidOperator(operator);
    var key = "fil-" + config.getRandomIntInclusive();
    this.addParam(key, "path", fieldName);
    this.addParam(key, "operator", encodeURIComponent(operator));
    if (this.arrayOperators.includes(operator) && Array.isArray(value)) {
      let kTag = 1;
      value.forEach((val) => {
        this.addParam(key, "value", val, kTag);
        kTag++;
      });
    } else this.addParam(key, "value", value);
    return this.query;
  }
  addParam(key, action, value, item = null) {
    if (this.query && this.query !== "") {
      this.query += "&";
    }
    if (item) this.query += `filter[${key}][condition][${action}][${item}]=${value}`;
    else this.query += `filter[${key}][condition][${action}]=${value}`;
  }
  /**
   * https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/filtering
   * @see \Drupal\jsonapi\Query\EntityCondition::$allowedOperators
   * @returns
   */
  ValidOperator(operator) {
    const operators = {
      "=": "=",
      "<>": "<>",
      ">": ">",
      ">=": ">=",
      "<": "<",
      "<=": "<=",
      STARTS_WITH: "STARTS_WITH",
      CONTAINS: "CONTAINS",
      ENDS_WITH: "ENDS_WITH",
      IN: "IN",
      "NOT IN": "NOT IN",
      BETWEEN: "BETWEEN",
      "NOT BETWEEN": "NOT BETWEEN",
      "IS NULL": "IS NULL",
      "IS NOT NULL": "IS NOT NULL",
    };
    if (!operators[operator]) {
      console.log("List valid operators : ", operators);
      throw new Error("Operator is not valid : ", operator);
    }
  }
}
export default filters;
