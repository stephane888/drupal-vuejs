<template>
  <div class="content-center">
    <a class="content-center__img" href="/">
      <img :src="urlLogo" alt="" />
    </a>
    <h3 class="content-center__title">{{ messages.pass }}</h3>
    <div class="form-group content-center__input">
      <ValidationProvider v-slot="v" ref="refPass" name="pass" rules="required">
        <input v-if="form.pass" v-model="form.pass[0].value" type="password" class="form-control" name="pass" />
        <div class="text-danger text-small">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>
    </div>
    <a class="content-center__forgot-pass" href="/user/password"> {{ messages.forget_pass }} </a>
    <div class="content-center__btn">
      <div class="btn-login btn-login--connexion" @click="Login">
        <span class="btn-login__text">
          {{ messages.submit.connect }}
        </span>
        <svgWaiting v-if="waiting == 'wait'"></svgWaiting>
      </div>
    </div>
    <hr />
    <a href="#" class="text-center d-block" @click="$emit('select-stepe', 'checkstatus')"> {{ messages.back }} </a>
  </div>
</template>

<script>
import config from "./config";
import { mapState } from "vuex";

export default {
  name: "SetPassword",
  components: {
    svgWaiting: () => import("./SvgWaiting.vue"),
  },
  props: {
    urlLogo: {
      type: String,
      required: true,
    },
    formValidate: {
      type: Object,
      required: true,
    },
    actionAfterLogin: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      waiting: "",
    };
  },
  computed: {
    ...mapState(["form", "configs_login_rx_vuejs"]),
    messages() {
      if (this.configs_login_rx_vuejs && this.configs_login_rx_vuejs.texts) {
        return this.configs_login_rx_vuejs.texts;
      } else return config.messages;
    },
  },
  mounted() {
    if (this.form.pass === undefined) {
      this.$set(this.form, "pass", [{ value: "" }]);
    }
  },
  methods: {
    async Login() {
      this.waiting = "wait";
      const test = await this.formValidate.validate();
      setTimeout(() => {
        if (test)
          config
            .connexionUser(this.form, this.actionAfterLogin)
            .then(() => {
              this.waiting = "";
            })
            .catch((e) => {
              console.log("Login : ", e);
              this.$refs.refPass.setErrors([e.error.statusText]);
              this.waiting = "error";
            });
        else this.waiting = "";
      }, 3000);
    },
  },
};
</script>
