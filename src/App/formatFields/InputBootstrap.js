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
    defaultValue.forEach((el) => {
      inputs.push(
        h("b-form-input", {
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
              el.value = e;
            },
          },
        })
      );
    });

    const formG = h(
      "b-form-group",
      {
        props: {
          label: field.label_value,
          description: field.description,
        },
      },
      inputs
    );
    return formG;
  },
};
