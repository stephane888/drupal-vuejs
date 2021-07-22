export default {
  vue: "", //represente instance this de vue.
  modelsFields: {},
  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string(h, field, defaultValue = null) {
    var vm = this.vue;
    const input = h("b-form-input", {
      props: {
        type: "text",
        value: defaultValue,
        b_input: {
          type: Object,
          required: true,
        },
      },
      on: {
        input: function (e) {
          vm.$emit("ev_select_project", e);
          console.log(" Vue instance : ", vm.$emit);
        },
      },
    });
    const formG = h(
      "b-form-group",
      {
        props: {
          label: field.label_value,
          description: field.description,
        },
        on: {
          ev_select_project: function (e) {
            alert("ffffffffff");
            vm.$emit("binput", e);
            console.log("binput : ", e);
          },
          onBinput: function (e) {
            vm.$emit("binput--", e);
            console.log(" Vue instance : ", vm);
          },
        },
        onBinput: function (e) {
          vm.$emit("binput--", e);
          console.log(" Vue instance : ", vm);
        },
      },
      [input]
    );
    //return { form: formG, value: defaultValue };
    return formG;
  },
};
