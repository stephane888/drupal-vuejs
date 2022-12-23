<template>
  <!-- Register -->
  <div class="content-center">
    <a class="content-center__img" href="/">
      <img :src="urlLogo" alt="" />
    </a>
    <div v-if="modelRegisterForm === 'default'">
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
          v-if="form.password"
          v-model="form.password[0].value"
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
    <div v-if="modelRegisterForm === 'generate_password'">
      <h4 class="title">Creation automatique du compte</h4>
      <p class="mb-4">
        Vos informations de connexion seront transferés à cette adresse.
      </p>
      <!-- On verifie si le name contient un email -->
      <div v-if="validEmail(form.name[0].value)" class="mb-5">
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
    actionAfterLogin: {
      type: String,
      required: true,
    },
    modelRegisterForm: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      messages: config.messages,
      waiting: "",
      templates: [],
    };
  },
  computed: {
    ...mapState(["form"]),
  },
  mounted() {
    if (this.showPassword) {
      if (this.form.password === undefined) {
        this.$set(this.form, "password", [{ value: "" }]);
      }
    } else if (this.form.password) {
      delete this.form.password;
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
            config.AfterRedirect(this.actionAfterLogin, resp);
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
            console.log("resp : ", resp);
            this.waiting = "";
            config
              .modalSuccess(config.msgCreate([this.messages.devisCreateUser]), {
                title: "Votre compte a été crré",
                footerClass: "d-none",
                headerBgVariant: "success",
                headerTextVariant: "light",
              })
              .then(() => {
                config.AfterRedirect(this.actionAfterLogin, resp);
              });
          })
          .catch((e) => {
            this.waiting = "";
            // console.log("catch : ", e);
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
