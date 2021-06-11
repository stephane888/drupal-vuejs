import utilities from "../utilities.js";
import Confs from "./Confs.js";
class termsTaxo {
  constructor(vid) {
    this.vid = vid;
    //
    this.url = Confs.baseURl + "/taxonomy_term" + this.vid;
    this.terms = [];
  }
  /**
   * Recupere les terms
   */
  get() {
    return new Promise(() => {
      utilities.get(this.url, Confs.headers).then((resp) => {
        this.terms = resp.data;
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
