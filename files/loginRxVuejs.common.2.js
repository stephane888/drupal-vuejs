((typeof self !== 'undefined' ? self : this)["webpackJsonploginRxVuejs"] = (typeof self !== 'undefined' ? self : this)["webpackJsonploginRxVuejs"] || []).push([[2],{

/***/ "0d95":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logingoogle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aaa3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logingoogle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_logingoogle_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1182":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c0a9802-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/components/loginRegister.vue?vue&type=template&id=299e9d5b&
var loginRegistervue_type_template_id_299e9d5b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ValidationObserver',{ref:"formValidate",attrs:{"tag":"form"}},[_c('div',{staticClass:"login-page"},[(_vm.alertDisplay)?_c('div',{staticClass:"alert w-100",class:_vm.alertType,attrs:{"role":"alert"},domProps:{"innerHTML":_vm._s(_vm.alertText)}}):_vm._e(),(_vm.isBusy)?_c('div',{staticClass:"spinner-grow text-primary",staticStyle:{"width":"3rem","height":"3rem"},attrs:{"role":"status"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Loading...")])]):_vm._e(),_c('transition',{attrs:{"name":"customslide"}},[(_vm.stepe === 'checkstatus')?_c('div',{key:'checkstatus',staticClass:"block-center"},[_c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('p',[_vm._v("Connectez vous avec")]),_c('div',{staticClass:"content-center__btn-column"},[_c('logingoogle',{attrs:{"idHtml":"default"}}),_c('div',{staticClass:"btn-login btn-login--facebook",on:{"click":_vm.loginFacebook}},[_c('span',{staticClass:"btn-login__icon icon-facebook"}),_c('i',{staticClass:"btn-login__text"},[_vm._v(" Facebook ")]),(_vm.waiting === 'facebook')?_c('svgWaiting'):_vm._e()],1)],1),_c('strong',{staticClass:"d-block"},[_vm._v(" Ou ")]),_c('hr',{staticClass:"diviseur"}),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.log_email))]),_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{attrs:{"name":"name","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.login_check),expression:"login_check"}],staticClass:"form-control",attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.login_check)},on:{"input":function($event){if($event.target.composing){ return; }_vm.login_check=$event.target.value}}}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,2271490516)})],1),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.checkUserStatus}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.first)+" ")]),(_vm.waiting === 'wait')?_c('svgWaiting'):_vm._e()],1)])])]):_vm._e(),(_vm.stepe === 'final-fb-register' || _vm.stepe === 'final-gl-register')?_c('div',{key:'checkstatus',staticClass:"block-center"},[_c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('p',[_vm._v("Finaliser votre connexion")]),_vm._l((_vm.templates),function(temp,i){return _c('ValidationProvider',{key:i,ref:temp.ref,refInFor:true,staticClass:"content-center__input",scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c(temp,{tag:"component"}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,true)})}),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.finalRegister}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.final)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)])],2)]):_vm._e(),(_vm.stepe === 'setPassword')?_c('div',{key:'setPassword',staticClass:"block-center"},[_c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.pass))]),_c('div',{staticClass:"form-group content-center__input"},[_c('ValidationProvider',{ref:"refPass",attrs:{"name":"pass","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-control",attrs:{"type":"password","name":"pass"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,1164253440)})],1),_c('a',{staticClass:"content-center__forgot-pass",attrs:{"href":"/user/password"}},[_vm._v(" Mot de passe oublié ? ")]),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.Login}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.connect)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)])])]):_vm._e(),(_vm.stepe === 'register')?_c('div',{key:'register',staticClass:"block-center"},[_c('div',{staticClass:"content-center"},[_c('a',{staticClass:"content-center__img",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.urlLogo,"alt":""}})]),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.login))]),_c('div',{staticClass:"form-group content-center__input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.login_check),expression:"login_check"}],staticClass:"form-control",attrs:{"type":"text","readonly":"true","name":"name"},domProps:{"value":(_vm.login_check)},on:{"input":function($event){if($event.target.composing){ return; }_vm.login_check=$event.target.value}}})]),(_vm.showPassword)?_c('h3',{staticClass:"content-center__title"},[_vm._v(" "+_vm._s(_vm.messages.pass)+" ")]):_vm._e(),(_vm.showPassword)?_c('div',{staticClass:"form-group content-center__input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"}],staticClass:"form-control",attrs:{"type":"password","name":"pass"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]):_vm._e(),_c('h3',{staticClass:"content-center__title"},[_vm._v(_vm._s(_vm.messages.mail))]),_c('ValidationProvider',{ref:"mail",staticClass:"d-block w-100",attrs:{"name":"mail","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c('div',{staticClass:"form-group content-center__input"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.mail),expression:"mail"}],staticClass:"form-control",attrs:{"type":"mail","name":"mail"},domProps:{"value":(_vm.mail)},on:{"input":function($event){if($event.target.composing){ return; }_vm.mail=$event.target.value}}})]),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,false,620003705)}),_vm._l((_vm.templates),function(temp,i){return _c('ValidationProvider',{key:i,ref:temp.ref,refInFor:true,staticClass:"content-center__input",scopedSlots:_vm._u([{key:"default",fn:function(v){return [_c(temp,{tag:"component"}),_c('div',{staticClass:"text-danger text-small"},_vm._l((v.errors),function(error,ii){return _c('small',{key:ii,staticClass:"d-block"},[_vm._v(" "+_vm._s(error)+" ")])}),0)]}}],null,true)})}),_c('div',{staticClass:"content-center__btn"},[_c('div',{staticClass:"btn-login btn-login--connexion",on:{"click":_vm.Register}},[_c('span',{staticClass:"btn-login__text"},[_vm._v(" "+_vm._s(_vm.messages.submit.register)+" ")]),(_vm.waiting == 'wait')?_c('svgWaiting'):_vm._e()],1)])],2)]):_vm._e()])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App/components/loginRegister.vue?vue&type=template&id=299e9d5b&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__("4795");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/wbuutilities/index.js + 71 modules
var wbuutilities = __webpack_require__("bfb1");

// CONCATENATED MODULE: ./src/App/components/config.js


var vm = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
/* harmony default export */ var config = ({
  messages: {
    log_email: "Email ou Nom d'utilisateur",
    pass: "Mot de passe",
    login: "Nom d'utilisateur",
    mail: "Email",
    submit: {
      first: "Suivant",
      connect: "Connexion",
      register: "S'inscrire",
      "final": "terminée"
    },
    devisCreateUser: "Votre compte a été creer sur <a href='/'> lesroisdelareno.fr </a>. <br> <strong> Bien vouloir verifier votre boite mail afin de valider votre compte </strong>"
  },
  modalSuccess: function modalSuccess(body, conf) {
    return wbuutilities["b" /* AjaxToastBootStrap */].modalSuccess(body, conf);
  },

  /**
   *
   * @param {Array} text
   * @returns
   */
  msgCreate: function msgCreate(texts) {
    var h = vm.$createElement;
    var text = [];

    for (var i in texts) {
      text.push(h("p", {
        domProps: {
          innerHTML: texts[i]
        },
        style: {
          lineHeight: "25px",
          fontSize: "17px",
          padding: "15px 15px 0px",
          margin: 0
        }
      }, []));
    }

    return h("div", {}, [text]);
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./src/config.js



var config_config = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, wbuutilities["a" /* AjaxBasic */]), {}, {
  /**
   * Retoune un entier arleatoire entre [99-999]
   */
  getRandomIntInclusive: function getRandomIntInclusive() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 99;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
});

/* harmony default export */ var src_config = (config_config);
// CONCATENATED MODULE: ./src/App/session.js



/* harmony default export */ var session = ({
  url_session: "/session/token",
  token: null,

  /**
   * Permet d'obtenir le token.
   */
  getToken: function getToken() {
    var _this = this;

    return new Promise(function (resolv) {
      if (_this.token) resolv(_this.token);
      console.log(" Config :: ", src_config.BaseUrl(), "\n this.url_session :: ", _this.url_session);
      src_config.get(src_config.BaseUrl() + _this.url_session).then(function (resp) {
        _this.token = resp.data;
        resolv(resp.data);
      });
    });
  }
});
// CONCATENATED MODULE: ./src/App/utilities.js






var utilities = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, src_config), {}, {
  /**
   * configCustom[{name:"",value:""}]
   */
  dPost: function dPost(url, datas) {
    var _arguments = arguments,
        _this = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              configCustom = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : null;
              _context.next = 3;
              return session.getToken();

            case 3:
              Token = _context.sent;
              configs = {
                "X-CSRF-Token": Token,
                "Content-Type": "application/json"
              };

              if (configCustom) {
                configs = _this.mergeHeaders(configCustom, configs);
              }

              return _context.abrupt("return", _this.post(url, datas, {
                headers: configs
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },

  /**
   * Get datas;
   */
  dGet: function dGet(url) {
    var _arguments2 = arguments,
        _this2 = this;

    return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var configCustom, Token, configs;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              configCustom = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : null;
              _context2.next = 3;
              return session.getToken();

            case 3:
              Token = _context2.sent;
              configs = {
                "X-CSRF-Token": Token,
                "Content-Type": "application/json"
              };

              if (configCustom) {
                configs = _this2.mergeHeaders(configCustom, configs);
              }

              return _context2.abrupt("return", _this2.get(url, {
                headers: configs
              }));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },

  /**
   *
   */
  mergeHeaders: function mergeHeaders(configCustom, configs) {
    if (configCustom) {
      for (var i in configCustom) {
        configs[i] = configCustom[i];
      }
    }

    return configs;
  }
});

/* harmony default export */ var App_utilities = (utilities);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("bee2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// CONCATENATED MODULE: ./src/App/formatFields/InputBootstrap.js




/* harmony default export */ var InputBootstrap = ({
  modelsFields: {},

  /**
   * La valeur par defaut peut etre definit via defaultValue, lors de la consctruction, ou definit dans <component.
   * On recupere les données via un emit @b-input au niveau du <component.
   * @param {} h
   * @param {*} field
   * @param {*} defaultValue
   * @returns
   */
  string: function string(h, field) {
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    if (defaultValue.length === 0) {
      defaultValue.push({
        value: ""
      });
    }

    var inputs = [];
    defaultValue.forEach(function (el) {
      inputs.push(h("b-form-input", {
        props: {
          type: "text",
          value: el.value,
          b_input: {
            type: Object,
            required: true
          }
        },
        on: {
          input: function input(e) {
            el.value = e;
          }
        }
      }));
    });
    var formG = h("b-form-group", {
      props: {
        label: field.label_value,
        description: field.description
      }
    }, inputs);
    return formG;
  }
});
// CONCATENATED MODULE: ./src/App/formatFields/formatFieldsBootstrap.js









/**
 * Permet de formater les champs drupal avec les equivalence bootstrap vuejs.
 */

var formatFieldsBootstrap_formatField = /*#__PURE__*/function () {
  function formatField(entity, bundle) {
    Object(classCallCheck["a" /* default */])(this, formatField);

    this.entity = entity;
    this.bundle = bundle; // ---------
  }
  /**
   * Retoune les champs convertie en utilisant les composants bootstrap-vuejs.
   * @returns Array []
   */


  Object(createClass["a" /* default */])(formatField, [{
    key: "format",
    value: function () {
      var _format = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var fields;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getFields();

              case 2:
                fields = _context.sent;
                return _context.abrupt("return", new Promise(function (resolv, reject) {
                  if (fields.data && fields.data.fields) {
                    InputBootstrap.modelsFields = _this.buildModel(fields.data.fields);
                    var formatFields = [];

                    var _loop = function _loop(i) {
                      formatFields.push({
                        ref: i,
                        props: {
                          name: {
                            type: String,
                            "default": fields.data.fields[i].name
                          }
                        },
                        render: function render(createElement) {
                          var renderField = [];

                          switch (fields.data.fields[i].type) {
                            case "string":
                              renderField.push(InputBootstrap.string(createElement, fields.data.fields[i], InputBootstrap.modelsFields[i]));
                              break;
                          }

                          return createElement("div", renderField);
                        }
                      });
                    };

                    for (var i in fields.data.fields) {
                      _loop(i);
                    }

                    resolv({
                      templates: formatFields,
                      models: InputBootstrap.modelsFields
                    });
                  } else {
                    reject("Aucune donnée disponible");
                  }
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function format() {
        return _format.apply(this, arguments);
      }

      return format;
    }()
    /**
     * Get fileds in drupal.
     * @returns
     */

  }, {
    key: "getFields",
    value: function getFields() {
      var url = "/api/form-node/generate-form";

      if (this.entity === "user") {
        url = "/api/form-node/generate-user";
      }

      url += "/" + this.bundle;
      return App_utilities.get(url);
    }
    /**
     * - Cet object permet de rendre les elements de l'object ecoutable.
     *   on creer tous les champs, puis on initialise InputBootstrap.modelsFields avec tous les champs. Decette facon vuejs peut ecouter les MAJ de champs.
     */

  }, {
    key: "buildModel",
    value: function buildModel(fields) {
      var models = {};

      for (var i in fields) {
        if (fields[i].type) models[i] = [];
      }

      return models;
    }
  }]);

  return formatField;
}();

/* harmony default export */ var formatFieldsBootstrap = (formatFieldsBootstrap_formatField);
// EXTERNAL MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
var vee_validate_esm = __webpack_require__("7bb1");

// EXTERNAL MODULE: ./node_modules/vee-validate/dist/rules.js
var rules = __webpack_require__("4c93");

// CONCATENATED MODULE: ./src/App/components/vee-validate-custom.js


 // No message specified.

Object(vee_validate_esm["c" /* extend */])("email", rules["b" /* email */]); // Override the default message.

Object(vee_validate_esm["c" /* extend */])("required", Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, rules["d" /* required */]), {}, {
  message: "Ce champs est requis"
}));
Object(vee_validate_esm["c" /* extend */])("alpha", rules["a" /* alpha */]);
Object(vee_validate_esm["c" /* extend */])("alpha", rules["c" /* numeric */]); //export default extend;
// CONCATENATED MODULE: ./src/App/rx/facebook.js

//const FB = window.Fb;
/* harmony default export */ var facebook = ({
  user: {},
  FB: null,
  appId: "",
  scope: "public_profile, email",
  version: "v11.0",

  /**
   * Ouverture de la boite de dislogue, facebook.
   */
  openPopup: function openPopup() {
    var _this = this;

    var self = this;
    window.FB.login(function (resp) {
      _this.statusChangeCallback(resp, true);
    }, {
      scope: self.scope,
      return_scopes: true
    });
  },
  logOut: function logOut() {
    window.FB.logout(function (res) {
      this.onLogOut(res);
    });
  },
  onLogOut: function onLogOut(resp) {
    console.log("Déconnetion réussi", resp);
  },

  /**
   * Permet de definir les informations de base et emet un evenement
   * $event 'wbu-fb-status-change'
   * @param {*} r
   */
  statusChangeCallback: function statusChangeCallback(r) {
    var getInfoUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.user = r;

    if (getInfoUser) {
      var event = new CustomEvent("wbu-fb-status-change");
      document.dispatchEvent(event);
    }

    console.log("status", this.user);
  },
  getUserStatus: function getUserStatus() {
    var self = this;
    window.FB.getLoginStatus(function (response) {
      self.statusChangeCallback(response);
    });
  },
  chargement: function chargement() {
    var self = this;
    var head = document.getElementsByTagName("head")[0];
    var js = document.createElement("script");
    head.appendChild(js);
    js.id = "facebook-jssdk-021"; // js.addEventListener("load", () => {
    //   console.log("Chargement du JS FACEBOOK END;");
    // });
    //

    js.onload = function () {
      function checkFB() {
        if (window.FB) {
          self.FB = window.FB;
          self.FB.init({
            appId: self.appId,
            cookie: true,
            xfbml: true,
            version: self.version,
            statue: false
          });
          console.log("Chargement du JS facebook");
          self.getUserStatus();
        } else {
          console.log("facebook not load");
          setTimeout(function () {
            checkFB();
          }, 900);
        }
      }

      checkFB();
    };

    js.src = "https://connect.facebook.net/en_US/sdk.js";
  }
});
/*
window.fbAsyncInit = function () {
  FB.init({
    appId: "344690973822888",
    cookie: true,
    xfbml: true,
    version: "v11.0",
  });
  FB.AppEvents.logPageView();
  Facebook.getUserStatus();
};
// Etape1 : chargement.
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
/**/
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2c0a9802-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/components/logingoogle.vue?vue&type=template&id=2d79c0bd&
var logingooglevue_type_template_id_2d79c0bd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttton-google-aouth",attrs:{"id":_vm.idHtmlrender}})}
var logingooglevue_type_template_id_2d79c0bd_staticRenderFns = []


// CONCATENATED MODULE: ./src/App/components/logingoogle.vue?vue&type=template&id=2d79c0bd&

// CONCATENATED MODULE: ./src/App/rx/google.js
//const gapi = window.gapi;
/* harmony default export */ var google = ({
  userAccess: {},
  //contient les informations renvoyés par google apres approbations.
  client_id: "513247959752-qapd9jb30pdtoh51m0h53070a2v8c4er.apps.googleusercontent.com"
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/components/logingoogle.vue?vue&type=script&lang=js&




//
//
//
//
function loadScript(src) {
  return new Promise(function (resolv) {
    var s = document.createElement("script");
    s.setAttribute("src", src);

    s.onload = function () {
      console.log(" Chargement du script ok : ", src);
      resolv(true);
    };

    document.head.appendChild(s);
  });
}



/* harmony default export */ var logingooglevue_type_script_lang_js_ = ({
  name: "logingoogle",
  props: {
    idHtml: {
      type: String,
      required: true
    },
    returnUidInfo: {
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (!window.google) {
      loadScript("https://accounts.google.com/gsi/client").then(function () {
        _this.getUserInfoFromFrame();
      });
    } else {
      this.getUserInfoFromFrame();
    }
  },
  computed: {
    idHtmlrender: function idHtmlrender() {
      return "google-login-tab" + this.idHtml;
    }
  },
  methods: {
    getUserInfoFromFrame: function getUserInfoFromFrame() {
      var self = this;

      function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: ", response);
        google.userAccess = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, response), {}, {
          client_id: response.clientId
        });
        self.TryToLoginWithGoogle();
        window.rxGoogle = google;
      }

      console.log(" window.onload ! ", window.onload);

      var goo = function goo() {
        window.google.accounts.id.initialize({
          client_id: google.client_id,
          callback: handleCredentialResponse
        });
        window.google.accounts.id.renderButton(document.getElementById(self.idHtmlrender), {
          theme: "outline",
          size: "large"
        } // customization attributes
        );
        window.google.accounts.id.prompt(); // also display the One Tap dialog
      };

      goo();
    },

    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithGoogle: function TryToLoginWithGoogle() {
      var _this2 = this;

      // this.IsBusy();
      // this.getFields();
      return new Promise(function (resolv, reject) {
        App_utilities.post("/login-rx-vuejs/google-check", google.userAccess).then(function (resp) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-success";
          _this2.alertText = "Connexion réussie";

          _this2.$emit("ev_logingoogle", resp.data);

          if (_this2.returnUidInfo) {
            resolv(resp);
            return;
          } // --; Si l'utilisateur est redirigé vers un autre domaine.


          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            window.location.assign(resp.reponse.request.responseURL);
          } // Il faut s'assurer que les données sont ok.
          else if (resp.data && resp.data.createuser) {
            _this2.stepe = "final-gl-register";
          } else {
            window.location.assign(window.location.origin);
          }

          resolv(resp);
        })["catch"](function (errors) {
          _this2.isBusy = false;
          _this2.alertDisplay = true;
          _this2.alertType = "alert-danger";
          _this2.alertText = "Google : Erreur de connexion";

          if (errors.error && errors.error.statusText && errors.error.statusText != "") {
            _this2.alertText = errors.error.statusText;
          }

          console.log(" Error ajax ", errors.error);
          console.log(" Error ajax ", errors.code);
          console.log(" Error ajax ", errors.stack);
          reject(errors);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/components/logingoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_logingooglevue_type_script_lang_js_ = (logingooglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/components/logingoogle.vue?vue&type=style&index=0&lang=scss&
var logingooglevue_type_style_index_0_lang_scss_ = __webpack_require__("0d95");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App/components/logingoogle.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_logingooglevue_type_script_lang_js_,
  logingooglevue_type_template_id_2d79c0bd_render,
  logingooglevue_type_template_id_2d79c0bd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var logingoogle = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App/components/loginRegister.vue?vue&type=script&lang=js&












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var loginRegistervue_type_script_lang_js_ = ({
  name: "LoginRegister",

  /**
   * --
   */
  props: {
    showPassword: {
      type: Boolean,
      "default": false
    }
  },
  components: {
    svgWaiting: function svgWaiting() {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "93ef"));
    },
    ValidationProvider: vee_validate_esm["b" /* ValidationProvider */],
    ValidationObserver: vee_validate_esm["a" /* ValidationObserver */],
    logingoogle: logingoogle
  },

  /**
   * --
   */
  data: function data() {
    return {
      messages: config.messages,
      waiting: "",
      login_check: "",
      password: "",
      mail: "",
      stepe: "checkstatus",
      templates: [],
      models: {},
      baseURl: src_config.baseURl,
      isBusy: false,
      alertDisplay: false,
      alertType: "alert-danger",
      alertText: "",
      urlLogo: window.location.origin + "" + window.logo_current_theme
    };
  },

  /**
   * --
   */
  mounted: function mounted() {
    facebook.appId = 889256191665205;
    this.TryToLoginWithFacebook();
    facebook.chargement();
  },
  methods: {
    /**
     * Ecoute un evenement afin de determiner si l'utilisateur a clique sur le bonton de connexion et que le processus soit terminé.
     */
    TryToLoginWithFacebook: function TryToLoginWithFacebook() {
      var _this = this;

      document.addEventListener("wbu-fb-status-change", function () {
        _this.isBusy = true;

        _this.getFields();

        App_utilities.post("/login-rx-vuejs/facebook-check", facebook.user).then(function (resp) {
          _this.isBusy = false;
          _this.alertDisplay = true;
          _this.alertType = "alert-success";
          _this.alertText = " Connexion réussie  ";

          if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
            window.location.assign(resp.reponse.request.responseURL);
          } // il faut s'assurer que les données sont ok.
          else if (resp.data && resp.data.createuser) {
            _this.stepe = "final-fb-register";
          } else {
            window.location.assign(window.location.origin);
          }
        })["catch"](function (errors) {
          _this.isBusy = false;
          _this.isBusy = false;
          _this.alertDisplay = true;
          _this.alertType = "alert-danger";
          _this.alertText = "Facebook : Erreur de connexion ";

          if (errors.error) {
            _this.alertText = errors.error.statusText;
          }
        });
      }, false);
    },
    IsBusy: function IsBusy() {
      this.isBusy = true;
      console.log("this.isbusy", this.isBusy);
    },
    loginFacebook: function loginFacebook() {
      this.waiting = "facebook";
      facebook.openPopup();
    },
    logOutFacebook: function logOutFacebook() {
      facebook.logOut();
    },

    /**
     * --
     */
    getFields: function getFields() {
      var _this2 = this;

      var fds = new formatFieldsBootstrap("user", "user");
      fds.format().then(function (resp) {
        _this2.templates = resp.templates;
        _this2.models = resp.models;
      });
    },

    /**
     * --
     */
    checkUserStatus: function checkUserStatus() {
      var _this3 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, test;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this3.waiting = "wait";
                url = "/login-rx-vuejs/check-user-status";
                _context.next = 4;
                return _this3.$refs.formValidate.validate();

              case 4:
                test = _context.sent;
                if (test) App_utilities.post(url, {
                  name: [{
                    value: _this3.login_check
                  }]
                }).then(function (resp) {
                  _this3.waiting = "";
                  if (resp.data) _this3.stepe = "setPassword";else {
                    _this3.getFields();

                    _this3.stepe = "register";
                  }
                });else _this3.waiting = "";

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * --
     */
    Login: function Login() {
      var _this4 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url, test;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this4.waiting = "wait";
                url = "/login-rx-vuejs/user-connexion";
                _context2.next = 4;
                return _this4.$refs.formValidate.validate();

              case 4:
                test = _context2.sent;
                if (test) App_utilities.post(url, {
                  name: [{
                    value: _this4.login_check
                  }],
                  password: [{
                    value: _this4.password
                  }]
                }).then(function (resp) {
                  _this4.waiting = "";
                  if (resp) _this4.stepe = "setPassword";

                  if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
                    window.location.assign(resp.reponse.request.responseURL);
                  } else if (resp.data) {
                    window.location.assign("/");
                  }
                })["catch"](function (e) {
                  _this4.$refs.refPass.setErrors([e.error.statusText]);

                  _this4.waiting = "error";
                });else _this4.waiting = "";

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * --
     */
    finalRegister: function finalRegister() {
      var _this5 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var params, url, test;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this5.waiting = "wait";
                params = {};
                url = "";

                if (_this5.stepe === "final-gl-register") {
                  url = "/login-rx-vuejs/google-login";
                  params = {
                    fields: _this5.models,
                    google: []
                  };
                } else if (_this5.stepe === "final-fb-register") {
                  url = "/login-rx-vuejs/facebook-login";
                  params = {
                    fields: _this5.models,
                    facebook: facebook.user
                  };
                }

                _context3.next = 6;
                return _this5.$refs.formValidate.validate();

              case 6:
                test = _context3.sent;
                if (test) App_utilities.post(url, params).then(function (resp) {
                  console.log(resp);
                  _this5.waiting = "";

                  if (resp.reponse && resp.reponse.config.url !== resp.reponse.request.responseURL) {
                    window.location.assign(resp.reponse.request.responseURL);
                  }
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },

    /**
     * --
     */
    Register: function Register() {
      var _this6 = this;

      this.waiting = "wait";
      this.$set(this.models, "name", [{
        value: this.login_check
      }]);
      this.$set(this.models, "mail", [{
        value: this.mail
      }]);
      if (this.showPassword) this.$set(this.models, "pass", [{
        value: this.password
      }]);
      var url = "/user/register?_format=json";
      App_utilities.post(url, this.models).then(function (resp) {
        console.log("resp : ", resp);
        _this6.waiting = "";
        config.modalSuccess(config.msgCreate([_this6.messages.devisCreateUser]), {
          title: "Votre compte a été crré",
          footerClass: "d-none",
          headerBgVariant: "success",
          headerTextVariant: "light"
        });
        setTimeout(function () {// window.location.assign("/");
        }, 5000);
      })["catch"](function (e) {
        _this6.waiting = ""; //console.log("catch : ", e);

        if (e.error && e.error.data && e.error.data.errors) {
          var errors = e.error.data.errors; //console.log(" this.$refs : ", this.$refs);

          errors.forEach(function (error) {
            var field = error.split(":"); // console.log(" field : ", field);

            if (_this6.$refs[field[0]]) {
              if (_this6.$refs[field[0]][0]) {
                _this6.$refs[field[0]][0].setErrors([field[1]]);
              } else _this6.$refs[field[0]].setErrors([field[1]]);
            }
          });
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/App/components/loginRegister.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loginRegistervue_type_script_lang_js_ = (loginRegistervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App/components/loginRegister.vue?vue&type=style&index=0&lang=scss&
var loginRegistervue_type_style_index_0_lang_scss_ = __webpack_require__("f073");

// CONCATENATED MODULE: ./src/App/components/loginRegister.vue






/* normalize component */

var loginRegister_component = Object(componentNormalizer["a" /* default */])(
  components_loginRegistervue_type_script_lang_js_,
  loginRegistervue_type_template_id_299e9d5b_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loginRegister = __webpack_exports__["default"] = (loginRegister_component.exports);

/***/ }),

/***/ "aaa3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eeab":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f073":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eeab");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loginRegister_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=loginRxVuejs.common.2.js.map