import utilities from "../utilities";
import InputBootstrap from "./InputBootstrap";
/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */
class formatField {
  constructor(entity, bundle) {
    this.entity = entity;
    this.bundle = bundle;
    // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */
  async format() {
    var fields = await this.getFields();
    return new Promise((resolv, reject) => {
      if (fields.data && fields.data.fields) {
        InputBootstrap.modelsFields = this.buildModel(fields.data.fields);
        const formatFields = [];
        for (const i in fields.data.fields) {
          formatFields.push({
            ref: i,
            props: {
              name: {
                type: String,
                default: fields.data.fields[i].name,
              },
            },
            render(createElement) {
              var renderField = [];
              switch (fields.data.fields[i].type) {
                case "string":
                  renderField.push(
                    InputBootstrap.string(
                      createElement,
                      fields.data.fields[i],
                      InputBootstrap.modelsFields[i]
                    )
                  );
                  break;
              }
              return createElement("div", renderField);
            },
          });
        }
        resolv({
          templates: formatFields,
          models: InputBootstrap.modelsFields,
        });
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
  /**
   * - Cet object permet de rendre les elements de l'object ecoutable.
   *   on creer tous les champs, puis on initialise InputBootstrap.modelsFields avec tous les champs.
   *   De cette facon vuejs peut ecouter les MAJ de champs.
   */
  buildModel(fields) {
    const models = {};
    for (const i in fields) {
      if (fields[i].type) models[i] = [];
    }
    return models;
  }
}

export default formatField;
