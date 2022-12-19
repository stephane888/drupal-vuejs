// Cette approche n'est pas recommandé, car toutes les données sont importées meme si elles ne sont pas utilisées.
// utilisé la version 3x
export { default as drupalSession } from "./src/App/session.js";
export { default as drupalUtilities } from "./src/App/utilities.js";
export { default as termsTaxo } from "./src/App/jsonApi/termsTaxo.js";
export { default as users } from "./src/App/users/user.js";
export { default as RequestBasicAuthen } from "./src/App/BasicAuthentification/RequestBasicAuthen";
export { default as drupalFormFields } from "./src/App/formatFields/formatFieldsBootstrap.js";
export { default as loginfacebook } from "./src/App/rx/facebook.js";
export { default as loginGoogle } from "./src/App/components/logingoogle.vue";
export { default as loginRegister } from "./src/App/components/loginRegister.vue";
