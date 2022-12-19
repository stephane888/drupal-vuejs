import utilities from "../utilities.js";
import Confs from "./Confs.js";
import buildFilter from "./buildFilter.js";
class termsTaxo {
  constructor(vid) {
    this.vid = vid;
    //
    this.url = Confs.baseURl + "/taxonomy_term/" + this.vid;
    this.terms = [];
  }
  /**
   * Recupere les terms
   */
  get() {
    return new Promise((resolv) => {
      utilities.get(this.url, Confs.headers).then((resp) => {
        this.terms = resp.data;
        resolv(resp.data);
      });
    });
  }
  /**
   * Recupere les terms
   */
  getSearch(search) {
    const filter = new buildFilter();
    filter.addFilter("name", "CONTAINS", search);
    return new Promise((resolv) => {
      utilities
        .get(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.terms = resp.data;
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
        .get(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.terms = resp.data;
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
        .get(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.terms = resp.data;
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
    filter.addFilter("id", "=", id);
    return new Promise((resolv) => {
      utilities
        .get(this.url + "?" + filter.query, Confs.headers)
        .then((resp) => {
          this.terms = resp.data;
          resolv(resp.data);
        });
    });
  }
  /**
   * Retourne les termes sous formes de liste d'otpions.
   */
  getOptions() {
    const options = [];
    for (const i in this.terms.data) {
      const term = this.terms.data[i];
      options.push({
        text: term.attributes.name,
        value: term.attributes.drupal_internal__tid,
      });
    }
    return options;
  }
}
export default termsTaxo;
