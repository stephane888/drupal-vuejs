export default {
  stringLength: 19,
  /**
   * Permet de convertir les strings en snake_case utilisable par les id de drupal.
   * @param {*} string
   * @returns
   */
  snakeCase(string) {
    return string
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join("_");
  },
  /**
   * Permet de generer un identifiant valide pour le creation de type d'entité
   */
  generateIdEntityType(string) {
    let idString = this.snakeCase(string).substring(0, this.stringLength);
    const start = new Date();
    idString += "_";
    idString += start.getFullYear();
    idString += "_";
    idString += start.getMonth();
    idString += "_";
    idString += Math.floor(Math.random() * 999);
    return idString;
  },
};
