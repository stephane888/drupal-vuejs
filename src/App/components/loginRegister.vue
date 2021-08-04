<template>
  <ValidationObserver ref="formValidate">
    <div class="login-page">
      <transition name="customslide">
        <div
          class="block-center"
          v-if="stepe === 'checkstatus'"
          :key="'checkstatus'"
        >
          <div class="content-center">
            <a class="content-center__img" href="/">
              <img :src="urlLogo" alt="" />
            </a>
            Connectez vous avec
            <div class="content-center__btn-column">
              <div class="btn-login btn-login--facebook" @click="loginFacebook">
                <span class="btn-login__icon icon-facebook"></span>
                <i class="btn-login__text"> Facebook </i>
              </div>
              <div class="btn-login btn-login--google">
                <i class="btn-login__icon icon-google-circles"></i>
                <span class="btn-login__text"> Google </span>
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
                  v-model="login_check"
                  name="name"
                />
                <div class="text-danger text-small">
                  <small
                    v-for="(error, ii) in v.errors"
                    :key="ii"
                    class="d-block"
                  >
                    {{ error }}
                  </small>
                </div>
              </ValidationProvider>
            </div>
            <div class="content-center__btn">
              <div
                class="btn-login btn-login--connexion"
                @click="checkUserStatus"
              >
                <span class="btn-login__text">
                  {{ messages.submit.first }}
                </span>
                <svgWaiting v-if="waiting === 'wait'"></svgWaiting>
              </div>
            </div>
            <!-- -->
          </div>
        </div>
        <div
          class="block-center"
          v-if="stepe === 'setPassword'"
          :key="'setPassword'"
        >
          <div class="content-center">
            <a class="content-center__img" href="/">
              <img :src="urlLogo" alt="" />
            </a>
            <h3 class="content-center__title">{{ messages.pass }}</h3>
            <div class="form-group content-center__input">
              <ValidationProvider
                v-slot="v"
                name="pass"
                rules="required"
                ref="refPass"
              >
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  name="pass"
                />
                <div class="text-danger text-small">
                  <small
                    v-for="(error, ii) in v.errors"
                    :key="ii"
                    class="d-block"
                  >
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
          </div>
        </div>
        <!-- Register -->
        <div class="block-center" v-if="stepe === 'register'" :key="'register'">
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
                v-model="login_check"
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
                v-model="password"
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
                  v-model="mail"
                  name="mail"
                />
              </div>
              <div class="text-danger text-small">
                <small
                  v-for="(error, ii) in v.errors"
                  :key="ii"
                  class="d-block"
                >
                  {{ error }}
                </small>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-for="(temp, i) in templates"
              :key="i"
              class="content-center__input"
              v-slot="v"
              :ref="temp.ref"
            >
              <component :is="temp"></component>
              <div class="text-danger text-small">
                <small
                  v-for="(error, ii) in v.errors"
                  :key="ii"
                  class="d-block"
                >
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
          </div>
        </div>
      </transition>
    </div>
  </ValidationObserver>
</template>
<script>
import config from "./config";
import utilities from "../utilities";
import drupalFormFields from "../formatFields/formatFieldsBootstrap";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "./vee-validate-custom";
export default {
  name: "LoginRegister",
  props: {
    urlLogo: {
      type: String,
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
    ValidationObserver,
  },
  data() {
    return {
      messages: config.messages,
      waiting: "",
      login_check: "",
      password: "",
      mail: "",
      stepe: "checkstatus",
      templates: [],
      models: {},
    };
  },
  methods: {
    loginFacebook() {},
    getFields() {
      const fds = new drupalFormFields("user", "user");
      fds.format().then((resp) => {
        this.templates = resp.templates;
        this.models = resp.models;
      });
    },
    async checkUserStatus() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/check-user-status";
      const test = await this.$refs.formValidate.validate();
      if (test)
        utilities
          .post(url, { name: [{ value: this.login_check }] })
          .then((resp) => {
            this.waiting = "";
            if (resp.data) this.stepe = "setPassword";
            else {
              this.getFields();
              this.stepe = "register";
            }
          });
      else this.waiting = "";
    },
    async Login() {
      this.waiting = "wait";
      var url = "/login-rx-vuejs/user-connexion";
      const test = await this.$refs.formValidate.validate();
      if (test)
        utilities
          .post(url, {
            name: [{ value: this.login_check }],
            password: [{ value: this.password }],
          })
          .then((resp) => {
            this.waiting = "";
            if (resp) this.stepe = "setPassword";
            if (
              resp.reponse &&
              resp.reponse.config.url !== resp.reponse.request.responseURL
            ) {
              window.location.assign(resp.reponse.request.responseURL);
            } else if (resp.data) {
              console.log("Redirection par defaut ", resp.reponse.request);
            }
          })
          .catch((e) => {
            this.$refs.refPass.setErrors([e.error.statusText]);
            this.waiting = "error";
          });
      else this.waiting = "";
    },
    Register() {
      this.waiting = "wait";
      this.$set(this.models, "name", [{ value: this.login_check }]);
      this.$set(this.models, "mail", [{ value: this.mail }]);
      if (this.showPassword)
        this.$set(this.models, "pass", [{ value: this.password }]);
      var url = "/fr/user/register?_format=json";

      utilities
        .post(url, this.models)
        .then((resp) => {
          console.log("resp : ", resp);
          this.waiting = "";
          config.modalSuccess(
            config.msgCreate([this.messages.devisCreateUser]),
            {
              title: "Votre compte a été crré",
              footerClass: "d-none",
              headerBgVariant: "success",
              headerTextVariant: "light",
            }
          );
          setTimeout(function () {
            window.location.assign("/");
          }, 5000);
        })
        .catch((e) => {
          this.waiting = "";
          console.log("catch : ", e);
          if (e.error && e.error.data && e.error.data.errors) {
            const errors = e.error.data.errors;
            console.log(" this.$refs : ", this.$refs);
            errors.forEach((error) => {
              const field = error.split(":");
              console.log("field : ", field);
              if (this.$refs[field[0]]) {
                if (this.$refs[field[0]][0]) {
                  this.$refs[field[0]][0].setErrors([field[1]]);
                } else this.$refs[field[0]].setErrors([field[1]]);
              }
            });
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

.customslide-enter {
  transform: translateX(110%);
  position: absolute;
}
.customslide-enter-active {
  position: absolute;
}
</style>
