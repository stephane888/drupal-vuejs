<template>
  <div
    :id="idHtmlrender"
    class="buttton-google-aouth"
    :class="classRender"
  ></div>
</template>

<script>
function loadScript(src) {
  return new Promise((resolv) => {
    var s = document.createElement("script");
    s.setAttribute("src", src);
    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };
    document.head.appendChild(s);
  });
}
import rxGoogle from "../rx/google.js";
import utilities from "../utilities";
import config from "./config_for_all";
export default {
  name: "logingoogle",
  props: {
    idHtml: {
      type: String,
      required: true,
    },
    returnUidInfo: {
      type: Boolean,
      default: false,
    },
    classRender: {
      type: Array,
      default: function () {
        return ["mx-auto"];
      },
    },
    action_after_login: {
      type: String,
      default: "default",
    },
  },
  mounted() {
    if (!window.google) {
      loadScript("https://accounts.google.com/gsi/client").then(() => {
        this.getUserInfoFromFrame();
      });
    } else {
      this.getUserInfoFromFrame();
    }
  },
  computed: {
    idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    },
  },
  methods: {
    getUserInfoFromFrame() {
      var self = this;
      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: ", response);
        rxGoogle.userAccess = {
          ...response,
          client_id: response.clientId,
        };
        self.TryToLoginWithGoogle();
        window.rxGoogle = rxGoogle;
      }
      console.log(" window.onload ! ", window.onload);
      const goo = () => {
        window.google.accounts.id.initialize({
          client_id: rxGoogle.client_id,
          callback: handleCredentialResponse,
        });
        window.google.accounts.id.renderButton(
          document.getElementById(self.idHtmlrender),
          { theme: "outline", size: "large" } // customization attributes
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };
      goo();
    },
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle() {
      // this.IsBusy();
      // this.getFields();
      return new Promise((resolv, reject) => {
        utilities
          .post("/login-rx-vuejs/google-check", rxGoogle.userAccess)
          .then((resp) => {
            this.isBusy = false;
            this.alertDisplay = true;
            this.alertType = "alert-success";
            this.alertText = "Connexion réussie";
            this.$emit("ev_logingoogle", resp.data);
            // Si on souhaite juste obtenir les infos concernant l'utilisateur.
            if (this.returnUidInfo) {
              resolv(resp);
              return;
            }
            config.AfterRedirect(this.action_after_login, null, resp);
            resolv(resp);
          })
          .catch((errors) => {
            this.isBusy = false;
            this.alertDisplay = true;
            this.alertType = "alert-danger";
            this.alertText = "Google : Erreur de connexion";
            if (
              errors.error &&
              errors.error.statusText &&
              errors.error.statusText != ""
            ) {
              this.alertText = errors.error.statusText;
            }
            console.log(" Error ajax ", errors.error);
            console.log(" Error ajax ", errors.code);
            console.log(" Error ajax ", errors.stack);
            reject(errors);
          });
      });
    },
  },
};
</script>
<style lang="scss">
.buttton-google-aouth {
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}
</style>
