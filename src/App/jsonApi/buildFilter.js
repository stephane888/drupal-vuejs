import config from "../../config";
/**
 * @see https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/filtering
 */
class filters {
  constructor(query = "") {
    this.query = query;
    //
  }
  addFilter(fieldName, operator, value) {
    var key = "fil-" + config.getRandomIntInclusive();
    this.addParam(key, "path", fieldName);
    this.addParam(key, "operator", operator);
    this.addParam(key, "value", value);
    return this.query;
  }
  addParam(key, action, value) {
    if (this.query && this.query !== "") {
      this.query += "&";
    }
    this.query += `filter[${key}][condition][${action}]=${value}`;
  }
}
export default filters;
