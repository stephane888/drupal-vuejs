<template>
  <!-- Register -->

  <div class="content-center">
    <a class="content-center__img" href="/">
      <img :src="urlLogo" alt="" />
    </a>
    <!-- -->
    <h3 class="content-center__title">{{ messages.login }}</h3>
    <div class="form-group content-center__input">
      <input
        type="text"
        readonly="true"
        class="form-control"
        v-model="form.name[0].value"
        name="name"
      />
    </div>
    <!-- -->
    <h3 class="content-center__title" v-if="showPassword">
      {{ messages.pass }}
    </h3>
    <div class="form-group content-center__input" v-if="showPassword">
      <input
        type="password"
        class="form-control"
        v-model="form.password[0].value"
        v-if="form.password"
        name="pass"
      />
    </div>
    <!-- -->
    <h3 class="content-center__title">{{ messages.mail }}</h3>
    <ValidationProvider
      v-slot="v"
      name="mail"
      rules="required"
      class="d-block w-100"
      ref="mail"
    >
      <div class="form-group content-center__input">
        <input
          type="mail"
          class="form-control"
          v-model="form.mail[0].value"
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
      :key="i"
      class="d-block w-100"
      v-slot="v"
      :ref="temp.ref"
    >
      <component :is="temp"></component>
      <div class="text-danger text-small">
        <small v-for="(error, ii) in v.errors" :key="ii" class="d-block">
          {{ error }}
        </small>
      </div>
    </ValidationProvider>
    <div class="content-center__btn">
      <div class="btn-login btn-login--connexion" @click="Register">
        <span class="btn-login__text">
          {{ messages.submit.register }}
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
import { ValidationProvider } from "vee-validate";
import drupalFormFields from "../formatFields/formatFieldsBootstrap";

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
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    svgWaiting: () => import("./svg-waiting.vue"),
    ValidationProvider,
  },
  data() {
    return {
      messages: config.messages,
      waiting: "",
      templates: [],
    };
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
    /**
     * --
     */
    async Register() {
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
                window.location.assign("/");
              });
          })
          .catch((e) => {
            this.waiting = "";
            //console.log("catch : ", e);
            if (e.error && e.error.data && e.error.data.errors) {
              const errors = e.error.data.errors;
              //console.log(" this.$refs : ", this.$refs);
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
  },
};
</script>
