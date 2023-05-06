import utilities from "../utilities.js";
import Confs from "./Confs.js";
import buildFilter from "./buildFilter.js";
class itemsEntity {
  constructor(entity_type_id, bundle = null, config = null) {
    this.entity_type_id = entity_type_id;
    //
    if (!bundle) {
      bundle = entity_type_id;
    }
    this.url = Confs.baseURl + "/" + this.entity_type_id + "/" + bundle;
    this.items = [];
    this.newConfig = config;
    // En function de l'environement on doit ajouter les paramettres de bases.( notament baseUrl, TestDomain, les methodes surchargées ).
    if (config) {
      // à ce state la surcharge total pose probleme, donc on doit surcharger par necessite.
      // utilities = {
      //   ...utilities,
      //   ...config,
      // };
      if (config.TestDomain) utilities.TestDomain = config.TestDomain;
    }
  }
  /**
   * Recupere les items en passant par le token.
   * ( ce cas de figure correspond à une application qui est sur le meme domaine ).
   */
  get() {
    return new Promise((resolv) => {
      utilities.dGet(this.url, Confs.headers).then((resp) => {
        this.items = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Recupere les items
   */
  getSearch(search) {
    const filter = new buildFilter();
    filter.addFilter("name", "CONTAINS", search);
    return new Promise((resolv) => {
      utilities
        .dGet(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.items = resp.data;
          resolv(resp.data);
        });
    });
  }
  /**
   *
   * @returns *
   */
  getValue(term) {
    const filter = new buildFilter();
    filter.addFilter("name", "=", term);
    return new Promise((resolv) => {
      utilities
        .dGet(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.items = resp.data;
          resolv(resp.data);
        });
    });
  }
  /**
   *
   * @returns *
   */
  getValueByTid(id) {
    const filter = new buildFilter();
    filter.addFilter("tid", "=", id);
    return new Promise((resolv, reject) => {
      utilities
        .dGet(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.items = resp.data;
          resolv(resp.data);
        })
        .catch((er) => {
          reject(er);
        });
    });
  }

  /**
   *
   * @returns *
   */
  getValueById(id) {
    const filter = new buildFilter();
    let fieldId = "id";
    switch (this.entity_type_id) {
      case "user":
        fieldId = "uid";
        break;
      case "domain":
        fieldId = "drupal_internal__id";
        break;
    }

    filter.addFilter(fieldId, "=", id);
    return new Promise((resolv) => {
      utilities
        .get(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.items = resp.data;
          resolv(resp.data);
        });
    });
  }
  /**
   * Les entities à joindre dans la requete.
   * @param {Array} entities
   */
  addIncludesEntities(entities = []) {
    //IE.url += "?include=executants,project_manager";
  }
  /**
   * Retourne les termes sous formes de liste d'otpions.
   * NB: Pour recuperer certaines données l'utilisateur doit envoyer ses entites l'utilisateur doit s'authentifier.
   */
  getOptions() {
    const options = [];
    for (const i in this.items.data) {
      const term = this.items.data[i];
      if (this.entity_type_id == "user") {
        options.push({
          text: term.attributes.name
            ? term.attributes.name
            : term.attributes.display_name,
          value: term.attributes.drupal_internal__uid,
        });
      } else if (term.attributes.name) {
        options.push({
          text: term.attributes.name,
          value: term.attributes.drupal_internal__id,
        });
      } else if (term.attributes.label) {
        options.push({
          text: term.attributes.label,
          value: term.attributes.drupal_internal__id,
        });
      }
    }
    return options;
  }
  /**
   * On a deux cas interne et externe au domaine, et en function de l'environnement
   * on doit utiliser token ou basic authentification.
   * ## approche 1
   * ( On ajoute cette variable en attendant la validation des autres modules de plus
   * il faudra que dans "config" la methode dGet existe, ce qui n'est pas le cas pour certains environnement.
   * gestion-projet-v2 => OK (--mode=dev), error (--mode=prod --> /projets/3248)
   * edit-entity => ??
   * Creation-cv => ??
   * Creation de site web => ??
   * ).
   * ## approche 2
   * faire une boucle.
   */
  remplaceConfig() {
    // On vide l'objet afin d'eviter le bug : https://projets-old.habeuk.com/#/projets/3248
    // utilities = {};
    // console.log("utilities : ", utilities);
    // console.log("newConfig : ", this.newConfig);
    // utilities = this.newConfig;
    for (const i in this.newConfig) {
      utilities[i] = this.newConfig[i];
    }
  }
}
export default itemsEntity;
