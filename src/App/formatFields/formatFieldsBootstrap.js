import utilities from "../utilities";
import InputBootstrap from "./InputBootstrap";
import Vue from "vue";
/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */
class formatField {
  constructor(entity, bundle, vm = null) {
    this.entity = entity;
    this.bundle = bundle;
    InputBootstrap.vue = vm ? vm : new Vue({});
    // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */
  format() {
    var fields = this.getFields();
    return new Promise((resolv, reject) => {
      if (fields.data && fields.data.fields) {
        const formatFields = [];
        for (const i in fields.data.fields) {
          formatFields.push({
            props: {},
            render(createElement) {
              var renderField = [];
              switch (fields.data.fields[i].type) {
                case "string":
                  //utilities.modelsFields[i] = "";
                  renderField.push(
                    InputBootstrap.string(createElement, fields.data.fields[i])
                  );
                  break;
              }
              return createElement("div", renderField);
            },
          });
        }
        resolv(formatFields);
      } else {
        reject("Aucune donnée disponible");
      }
    });
  }

  /**
   * Get fileds in drupal.
   * @returns
   */
  getFields() {
    var url = "/api/form-node/generate-form";
    if (this.entity === "user") {
      url = "/api/form-node/generate-user";
    }
    url += "/" + this.bundle;
    return utilities.get(url);
  }
}

export default formatField;
