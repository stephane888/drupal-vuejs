<template>
  <!-- Register -->
  <div class="content-center">
    <a class="content-center__img" href="/">
      <img :src="urlLogo" alt="" />
    </a>
    <div v-if="modelRegisterFormResult === 'default'">
      <!-- Champs afficher le login. -->
      <h3 class="content-center__title">{{ messages.login }}</h3>
      <div class="form-group content-center__input">
        <input
          v-model="form.name[0].value"
          type="text"
          readonly="true"
          class="form-control"
          name="name"
        />
      </div>
      <!-- Champs pour afficher le pass -->
      <h3 v-if="showPassword" class="content-center__title">
        {{ messages.pass }}
      </h3>
      <div v-if="showPassword" class="form-group content-center__input">
        <input
          v-if="form.pass"
          v-model="form.pass[0].value"
          type="password"
          class="form-control"
          name="pass"
        />
      </div>
      <!-- Champs pour afficher le mail -->
      <h3 class="content-center__title">{{ messages.mail }}</h3>
      <ValidationProvider
        v-slot="v"
        ref="mail"
        name="mail"
        rules="required"
        class="d-block w-100"
      >
        <div class="form-group content-center__input">
          <input
            v-model="form.mail[0].value"
            type="mail"
            class="form-control"
            name="mail"
          />
        </div>
        <div class="text-danger text-small">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>
      <ValidationProvider
        v-for="(temp, i) in templates"
        v-slot="v"
        :ref="temp.ref"
        :key="i"
        class="d-block w-100"
      >
        <component :is="temp"></component>
        <div class="text-danger text-small">
          <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
            {{ error }}
          </small>
        </div>
      </ValidationProvider>
      <div class="content-center__btn">
        <div class="btn-login btn-login--connexion" @click="RegisterDefault">
          <span class="btn-login__text">
            {{ messages.submit.register }}
          </span>
          <svgWaiting v-if="waiting == 'wait'"></svgWaiting>
        </div>
      </div>
      <hr />
    </div>
    <div v-if="modelRegisterFormResult === 'generate_password'">
      <h4 class="title mb-5">Creation automatique du compte</h4>
      <!-- On verifie si le name contient un email -->
      <div v-if="validEmail(form.name[0].value)" class="mb-5">
        <p>Vos informations de connexion seront transferés à cette adresse.</p>
        <strong> {{ form.name[0].value }} </strong>
        {{ set_email() }}
      </div>
      <div v-if="!validEmail(form.name[0].value)">
        <ValidationProvider
          v-slot="v"
          ref="mail"
          name="mail"
          rules="required"
          class="d-block w-100"
        >
          <div class="form-group content-center__input">
            <label class="mb-0 pb-0"> Votre adresse email </label>
            <input
              v-model="form.mail[0].value"
              type="mail"
              class="form-control"
              name="mail"
            />
            <div>
              <small>
                Vos informations de connexion seront transferés à cette adresse.
              </small>
            </div>
          </div>
          <div class="text-danger text-small">
            <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
              {{ error }}
            </small>
          </div>
        </ValidationProvider>
      </div>
      <div class="content-center__btn">
        <div class="btn-login btn-login--connexion" @click="generatePassword">
          <span class="btn-login__text">
            {{ messages.submit.register }}
          </span>
          <svgWaiting v-if="waiting == 'wait'"></svgWaiting>
        </div>
      </div>
    </div>
    <b-alert
      dismissible
      variant="danger"
      fade
      :show="error.message ? true : false"
      @dismissed="error.message = false"
    >
      {{ error.message }}
    </b-alert>

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
import drupalFormFields from "../formatFields/formatFieldsBootstrap";

export default {
  name: "RegisTer",
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
    showPassword: {
      type: Boolean,
      default: false,
    },
    actionAfterRegister: {
      type: String,
      required: true,
    },
    modelRegisterForm: {
      type: [String, Boolean],
      required: true,
    },
    showModalSuccess: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      messages: config.messages,
      waiting: "",
      templates: [],
      /**
       * Drupal >9.5 renvoit l'erreur dans {message}
       */
      error: {
        message: false,
      },
    };
  },
  computed: {
    ...mapState(["form", "configs_login_rx_vuejs"]),
    /**
     * Resultat entre la config endur et celle en BD.
     */
    modelRegisterFormResult() {
      if (
        this.modelRegisterForm == "generate_password" ||
        this.modelRegisterForm == "default"
      ) {
        return this.modelRegisterForm;
      } else if (
        this.configs_login_rx_vuejs &&
        this.configs_login_rx_vuejs.generate_user
      ) {
        return "generate_password";
      } else {
        return "default";
      }
    },
  },
  mounted() {
    if (this.showPassword) {
      if (this.form.pass === undefined) {
        this.$set(this.form, "pass", [{ value: "" }]);
      }
    } else if (this.form.pass) {
      delete this.form.pass;
    }
    this.getFields();
  },
  methods: {
    async generatePassword() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/genrate-password";
      const test = await this.formValidate.validate();
      if (test) {
        utilities
          .post(url, this.form)
          .then((resp) => {
            console.log("resp : ", resp);
            this.waiting = "";
            config.AfterRedirect(this.actionAfterRegister, null, resp);
          })
          .catch(() => {
            this.waiting = "";
          });
      } else {
        this.waiting = "";
        console.log("echec de validation de mail");
      }
    },
    /**
     * --
     */
    async RegisterDefault() {
      this.waiting = "wait";
      var url = "/user/register?_format=json";
      const test = await this.formValidate.validate();
      if (test)
        utilities
          .post(url, this.form)
          .then((resp) => {
            this.waiting = "";
            if (this.showModalSuccess)
              config
                .modalSuccess(
                  config.msgCreate([this.messages.devis_create_user]),
                  {
                    title: "Votre compte a été crré",
                    footerClass: "d-none",
                    headerBgVariant: "success",
                    headerTextVariant: "light",
                  }
                )
                .then(() => {
                  config.AfterRedirect(this.actionAfterRegister, null, resp);
                });
            else config.AfterRedirect(this.actionAfterRegister, null, resp);
          })
          .catch((e) => {
            this.waiting = "";
            console.log("catch : ", e);
            if (e.error.data && e.error.data.message) {
              this.error.message = e.error.data.message;
            }
            if (e.error && e.error.data && e.error.data.errors) {
              const errors = e.error.data.errors;
              // console.log(" this.$refs : ", this.$refs);
              errors.forEach((error) => {
                const field = error.split(":");
                // console.log(" field : ", field);
                if (this.$refs[field[0]]) {
                  if (this.$refs[field[0]][0]) {
                    this.$refs[field[0]][0].setErrors([field[1]]);
                  } else this.$refs[field[0]].setErrors([field[1]]);
                }
              });
            }
          });
      else this.waiting = "";
    },

    /**
     * --
     */
    getFields() {
      const fds = new drupalFormFields("user", "user");
      fds.format().then((resp) => {
        this.templates = resp.templates;
        for (const fieldName in resp.models) {
          this.$set(this.form, fieldName, resp.models[fieldName]);
        }
        console.log("resp : ", resp);
      });
    },
    validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    set_email() {
      this.form.mail = this.form.name;
    },
  },
};
</script>
