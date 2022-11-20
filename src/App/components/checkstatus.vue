<template>
  <div class="content-center">
    <a class="content-center__img" href="/">
      <img :src="urlLogo" alt="" class="img-fluid" />
    </a>
    <h4 class="title">Connectez vous avec</h4>
    <div class="content-center__btn-column">
      <logingoogle idHtml="default"></logingoogle>
      <div class="btn-login btn-login--facebook" @click="loginFacebook">
        <span class="btn-login__icon icon-facebook"></span>
        <i class="btn-login__text"> Facebook </i>
        <svgWaiting v-if="waiting === 'facebook'"></svgWaiting>
      </div>
    </div>
    <strong class="d-block"> Ou </strong>
    <hr class="diviseur" />
    <h3 class="content-center__title">{{ messages.log_email }}</h3>
    <div class="form-group content-center__input">
      <ValidationProvider v-slot="v" name="name" rules="required">
        <input
          type="text"
          class="form-control"
          v-model="form.name[0].value"
          name="name"
        />
        <div class="text-danger text-small">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>
    </div>
    <div class="content-center__btn">
      <div class="btn-login btn-login--connexion" @click="checkUserStatus">
        <span class="btn-login__text">
          {{ messages.submit.first }}
        </span>
        <svgWaiting v-if="waiting === 'wait'"></svgWaiting>
      </div>
    </div>
  </div>
</template>

<script>
import rxFacebook from "../rx/facebook";
import utilities from "../utilities";
import config from "./config";
import logingoogle from "./logingoogle.vue";
//import { ValidationProvider } from "vee-validate";

export default {
  name: "checkstatus",
  props: {
    urlLogo: {
      type: String,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
    formValidate: {
      type: Object,
      required: true,
    },
  },
  components: {
    svgWaiting: () => import("./svg-waiting.vue"),
    //ValidationProvider,
    logingoogle,
  },
  data() {
    return {
      messages: config.messages,
      waiting: "",
    };
  },
  methods: {
    loginFacebook() {
      this.waiting = "facebook";
      rxFacebook.openPopup();
    },
    logOutFacebook() {
      rxFacebook.logOut();
    },
    /**
     * Verifie si l'utilisateur existe deja.
     */
    async checkUserStatus() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/check-user-status";
      const test = await this.formValidate.validate();
      if (test)
        utilities.post(url, this.form).then((resp) => {
          this.waiting = "";
          if (resp.data) this.$emit("select-stepe", "setPassword");
          else {
            this.$emit("select-stepe", "register");
          }
        });
      else this.waiting = "";
    },
  },
};
</script>
