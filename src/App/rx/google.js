//const gapi = window.gapi;
import queryString from "query-string";
export default {
  user: {},
  userLocal: {},
  isConnected: false,
  gapi: null,
  api_key: "",
  client_id:
    "666466407349-oanmp950m4pp4arec1fcp8okvj6so4cj.apps.googleusercontent.com",
  scope: "email profile",
  redirect_uri: "https://lesroisdelareno.fr/user/login",
  closePopUp: true,
  modeIframe: false,
  query: {},
  loadGapi() {
    var head = document.getElementsByTagName("head")[0];
    var gapi = document.createElement("script");
    head.appendChild(gapi);
    gapi.id = "gapi-jsgo";
    //gapi.setAttribute("async", "");
    //gapi.setAttribute("defer", "");
    // gapi.addEventListener("load", () => {
    //   console.log("Chargement du JS Google END;");
    // });
    gapi.onload = () => {
      this.initGoogleApi();
    };
    gapi.src = "https://apis.google.com/js/platform.js?onload=";
  },
  initGoogleApi() {
    var self = this;
    var nbr = 0;
    // var gapi = self.gapi;
    if (window.gapi && nbr < 10) {
      self.checkLocalStorage();
      self.gapi = window.gapi;
      self.gapi.load("auth2", () => {
        self.gapi.auth2
          .init({
            clientId: self.client_id,
            apiKey: self.api_key,
            scope: self.scope,
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
            ],
          })
          .then(
            function (res) {
              self.isConnected =
                self.gapi.auth2.getAuthInstance().isSignedIn.get;
              self.checkParams();
              console.log("gapi", window.gapi);
              // self.checkIfConnected();
              self.onSuccess(res);
              // self.checkLocalStorage();
            },
            function (error) {
              self.onFaillure(error);
            }
          );
      });
    } else {
      // console.log("Google not load");
      nbr++;
      setTimeout(() => {
        this.initGoogleApi();
      }, 900);
    }
  },
  /**
   * Get access token
   */
  createSubmitForm() {
    var self = this;
    var external = window.open(
      "",
      "external",
      "width=450,height=600,left=100,top=50"
    );
    var endPoint = "https://accounts.google.com/o/oauth2/v2/auth";
    var doc = external.document;
    var form = doc.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", endPoint);
    form.target = "external";
    var params = {
      client_id: self.client_id,
      redirect_uri: self.redirect_uri,
      response_type: "token",
      scope: "profile email",
      include_granted_scopes: "true",
      state: "kksa-888",
    };
    for (var p in params) {
      var input = external.document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
  },

  oautSignIn() {
    var self = this;
    var endPoint = "https://accounts.google.com/o/oauth2/v2/auth";
    var form = document.createElement("form");
    form.setAttribute("method", "GET");
    form.setAttribute("action", endPoint);
    var params = {
      client_id: self.client_id,
      redirect_uri: self.redirect_uri,
      response_type: "token",
      scope: "profile email",
      include_granted_scopes: "true",
      state: "kksa-888",
    };
    for (var p in params) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }
    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    if (self.user && self.user.access_token) {
      console.log("user", self.user);
      var event = new CustomEvent("wbu-gl-status-change");
      document.dispatchEvent(event);
    } else {
      document.body.appendChild(form);
      form.submit();
    }
  },

  checkLocalStorage() {
    var self = this;
    var local = window.localStorage.getItem("user-google");
    if (local !== null) {
      self.userLocal = JSON.parse(local);
      self.user = self.userLocal;
      console.log("local", self.user);
    } else {
      console.log("localRien", self.UserLocal);
    }
  },
  checkParams() {
    var self = this;
    this.query = queryString.parse(window.location.hash);
    console.log("window.location :", window.location);
    console.log("this.query : ", this.query);
    //	var host = window.location.origin;
    var fragmentString = location.hash.substring(1);
    var params = {};
    //var localUser = JSON.parse(window.localStorage.getItem("user-google"));
    var regex = /([^&=]+)=([^&]*)/g,
      m;
    while ((m = regex.exec(fragmentString))) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    if (Object.keys(params).length > 0) {
      console.log("userae", params);
      if (params["state"] && params["state"] == "kksa-888") {
        //	window.localStorage.setItem("user-google", JSON.stringify(params));
        //this.checkLocalStorage();
        self.user = self.query;
        console.log("user before : ", self.user);
        var event = new CustomEvent("wbu-gl-status-change");
        document.dispatchEvent(event);
        //window.history.replaceState(null, null, window.location.pathname);
      }
    }
  },
  /**
   * Permet de selectionner le mode d'ouverture du block d'authentification google.
   * if form true (valeur par defaut), on ouvre le block d'authentification dans la fenetre encours.
   * Si non, on ouvre dans un iframe(popup), ensuite les informations seront renvoyées vers le iframes principales.
   *
   * @param {*} form
   */
  typeOfLogin(form = true) {
    if (!form) {
      this.createSubmitForm();
      this.modeIframe = false;
    } else {
      this.initLogin();
      this.modeIframe = true;
    }
  },
  initLogin() {
    var self = this;
    var gapi = self.gapi;
    // self.isConnected = window.gapi.auth2.getAuthInstance().isSignedIn.get();
    // console.log("connected", self.isConnected);
    var auth = gapi.auth2.getAuthInstance();
    auth
      .signIn({
        scope: "email profile openid",
        response_type: "access_token",
        state: "kksa-888",
        ux_mode: "redirect",
        include_granted_scopes: "true",
        prompt: "consent",
        redirect_uri: self.redirect_uri,
      })
      .then(function (reponse) {
        self.onSignIn(reponse);
        /*  traiter la réponse  */
      });
  },
  initLogOut() {
    var auth = self.gapi.auth2.getAuthInstance();
    auth.signOut().then(function (res) {
      this.onSuccess(res);
    });
  },
  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    this.user = {
      id: profile.getId(),
      name: profile.getName(),
      imgUrl: profile.getImageUrl(),
      email: profile.getEmail(),
    };
    console.log("user", this.user);
    var event = new CustomEvent("wbu-gl-status-change");
    document.dispatchEvent(event);
  },
  onSuccess(r) {
    console.log("Initialisation de l'app réussi : ", r);
  },
  onFaillure(resp) {
    console.log("Échec de l'opération : ", resp);
  },
};
