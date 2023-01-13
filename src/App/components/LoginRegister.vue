<template>
  <ValidationObserver ref="formValidate" tag="form">
    <div class="login-page">
      <!-- -->
      <div
        v-if="alertDisplay"
        class="alert w-100"
        :class="alertType"
        role="alert"
        v-html="alertText"
      ></div>
      <!-- le loader -->
      <div
        v-if="isBusy"
        class="spinner-grow text-primary"
        role="status"
        style="width: 3rem; height: 3rem"
      >
        <span class="sr-only">Chargement ...</span>
      </div>
      <transition name="customslide">
        <div class="block-center">
          <component
            :is="stepe"
            :urlLogo="urlLogo"
            :formValidate="formValidate"
            :action-after-login="actionAfterLogin"
            :model-register-form="modelRegisterForm"
            @select-stepe="selectStepe"
          ></component>
        </div>
      </transition>
    </div>
    <div class="politik-secur mx-auto text-center">
      <slot name="condition_utilisation">
        <p class="text-white">
          En vous inscrivant, vous acceptez nos
          <a href="#"> Conditions d'utilisation </a>
          , de recevoir des emails et des MAJ de LESROISDELARENO et vous
          reconnaissez avoir lu notre
          <a href="#"> Politique de confidentialité</a>
        </p>
      </slot>
    </div>
  </ValidationObserver>
</template>

<!-- .. -->

<script>
import config from "./config";
import configGlobal from "../../config.js";
import utilities from "../utilities";

//import { ValidationObserver } from "vee-validate";
import "./vee-validate-custom";
import rxFacebook from "../rx/facebook";
import CheckStatus from "./CheckStatus.vue";
import setPassword from "./SetPassword.vue";
import register from "./RegisTer.vue";

export default {
  name: "LoginRegister",
  props: {
    // see config_for_all.AfterRedirect for more informations.
    actionAfterLogin: {
      type: String,
      default: "default",
    },
    modelRegisterForm: {
      type: String,
      default: "default",
    },
  },

  /**
   * --
   */
  data() {
    return {
      messages: config.messages,
      waiting: "",
      stepe: CheckStatus,
      models: {},
      baseURl: configGlobal.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme,
      formValidate: {},
    };
  },
  /**
   * --
   */
  mounted() {
    rxFacebook.appId = 889256191665205;
    this.TryToLoginWithFacebook();
    rxFacebook.chargement();
    this.formValidate = this.$refs.formValidate;
  },
  methods: {
    selectStepe(step) {
      switch (step) {
        case "checkstatus":
          this.stepe = CheckStatus;
          break;
        case "setPassword":
          this.stepe = setPassword;
          break;
        case "register":
          this.stepe = register;
          break;
      }
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook() {
      document.addEventListener(
        "wbu-fb-status-change",
        () => {
          this.isBusy = true;
          this.getFields();
          utilities
            .post("/login-rx-vuejs/facebook-check", rxFacebook.user)
            .then((resp) => {
              this.isBusy = false;
              this.alertDisplay = true;
              this.alertType = "alert-success";
              this.alertText = " Connexion réussie  ";
              if (
                resp.reponse &&
                resp.reponse.config.url !== resp.reponse.request.responseURL
              ) {
                window.location.assign(resp.reponse.request.responseURL);
              }
              // il faut s'assurer que les données sont ok.
              else if (resp.data && resp.data.createuser) {
                this.stepe = "final-fb-register";
              } else {
                window.location.assign(window.location.origin);
              }
            })
            .catch((errors) => {
              this.isBusy = false;
              this.isBusy = false;
              this.alertDisplay = true;
              this.alertType = "alert-danger";
              this.alertText = "Facebook : Erreur de connexion ";
              if (errors.error) {
                this.alertText = errors.error.statusText;
              }
            });
        },
        false
      );
    },

    IsBusy() {
      this.isBusy = true;
      console.log("this.isbusy", this.isBusy);
    },

    /**
     * --
     */
    async finalRegister() {
      this.waiting = "wait";
      var params = {};
      var url = "";
      if (this.stepe === "final-gl-register") {
        url = "/login-rx-vuejs/google-login";
        params = {
          fields: this.models,
          google: [],
        };
      } else if (this.stepe === "final-fb-register") {
        url = "/login-rx-vuejs/facebook-login";
        params = {
          fields: this.models,
          facebook: rxFacebook.user,
        };
      }
      const test = await this.$refs.formValidate.validate();
      if (test)
        utilities.post(url, params).then((resp) => {
          console.log(resp);
          this.waiting = "";
          if (
            resp.reponse &&
            resp.reponse.config.url !== resp.reponse.request.responseURL
          ) {
            window.location.assign(resp.reponse.request.responseURL);
          }
        });
    },
  },
};
</script>

<style lang="scss">
@import "./loginRegister.scss";
.customslide-leave,
.customslide-leave-to {
  transform: translateX(-110%);
  position: absolute;
}
// --
.customslide-enter {
  transform: translateX(110%);
  position: absolute;
}
// --
.customslide-enter-active {
  position: absolute;
}
//
.politik-secur {
  font-size: 90%;
  max-width: 400px;
}
</style>
