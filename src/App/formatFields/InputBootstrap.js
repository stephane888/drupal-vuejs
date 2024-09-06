export default {
  modelsFields: {},
  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string(h, field, defaultValue = []) {
    if (defaultValue.length === 0) {
      defaultValue.push({ value: "" });
    }
    const inputs = [];
    // Ajout du label
    inputs.push(
      h("label", { class: ["d-block", "content-center__title"] }, [
        field.label_value,
      ])
    );
    defaultValue.forEach((el) => {
      inputs.push(
        h("input", {
          props: {
            type: "text",
            value: el.value,
            b_input: {
              type: Object,
              required: true,
            },
          },
          on: {
            input: function (e) {
              if (e.target && e.target.value) el.value = e.target.value;
            },
          },
          class: ["form-control"],
        })
      );
    });
    // ajout de la description
    inputs.push(h("small", { class: ["text-muted"] }, [field.description]));

    const formG = h(
      "div",
      {
        props: {},
        class: ["form-group", "content-center__input"],
      },
      inputs
    );
    return formG;
  },
};
