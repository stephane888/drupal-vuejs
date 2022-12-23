<template>
  <div class="content-center">
    <a class="content-center__img" href="/">
      <img :src="urlLogo" alt="" />
    </a>
    <h3 class="content-center__title">{{ messages.pass }}</h3>
    <div class="form-group content-center__input">
      <ValidationProvider v-slot="v" ref="refPass" name="pass" rules="required">
        <input
          v-if="form.password"
          v-model="form.password[0].value"
          type="password"
          class="form-control"
          name="pass"
        />
        <div class="text-danger text-small">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>
    </div>
    <a class="content-center__forgot-pass" href="/user/password">
      Mot de passe oublié ?
    </a>
    <div class="content-center__btn">
      <div class="btn-login btn-login--connexion" @click="Login">
        <span class="btn-login__text">
          {{ messages.submit.connect }}
        </span>
        <svgWaiting v-if="waiting == 'wait'"></svgWaiting>
      </div>
    </div>
    <hr />
    <a
      href="#"
      class="text-center d-block"
      @click="$emit('select-stepe', 'checkstatus')"
    >
      Retour
    </a>
  </div>
</template>

<script>
import utilities from "../utilities";
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
      messages: config.messages,
      waiting: "",
    };
  },
  computed: {
    ...mapState(["form"]),
  },
  mounted() {
    if (this.form.password === undefined) {
      this.$set(this.form, "password", [{ value: "" }]);
    }
  },
  methods: {
    async Login() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/user-connexion";
      const test = await this.formValidate.validate();
      setTimeout(() => {
        if (test)
          utilities
            .post(url, this.form)
            .then((resp) => {
              this.waiting = "";
              config.AfterRedirect(this.actionAfterLogin, null, resp);
            })
            .catch((e) => {
              this.$refs.refPass.setErrors([e.error.statusText]);
              this.waiting = "error";
            });
        else this.waiting = "";
      }, 3000);
    },
  },
};
</script>
