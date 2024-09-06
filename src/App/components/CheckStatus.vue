<template>
  <div class="content-center">
    <a class="content-center__img" href="/">
      <img :src="urlLogo" alt="" class="img-fluid" />
    </a>
    <h4 class="title">Connectez vous avec</h4>
    <div class="content-center__btn-column">
      <logingoogle
        idHtml="default"
        :action-after-login="actionAfterLogin"
      ></logingoogle>
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
          v-model="form.name[0].value"
          type="text"
          class="form-control"
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
    <div v-if="showRegisterLink">
      <hr class="diviseur" />
      <small> Vous n'avez pas de compte ? </small>
      <a hre="#" class="text-center d-block cursor" @click.prevent="register">
        S'inscrire
      </a>
      <div>
        <small><a href="/user/password">Mot de passe oublié</a></small>
      </div>
    </div>
  </div>
</template>

<script>
import rxFacebook from "../rx/facebook";
import utilities from "../utilities";
import config from "./config";
import logingoogle from "./LoginGoogle.vue";
import { mapState } from "vuex";

export default {
  name: "CheckStatus",
  components: {
    svgWaiting: () => import("./SvgWaiting.vue"),
    logingoogle,
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
    showRegisterLink: {
      type: Boolean,
      default: false,
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
  methods: {
    loginFacebook() {
      this.waiting = "facebook";
      rxFacebook.openPopup();
    },
    logOutFacebook() {
      rxFacebook.logOut();
    },
    register() {
      this.$emit("go-register");
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
<style lang="scss">
.cursor {
  cursor: pointer;
}
</style>
