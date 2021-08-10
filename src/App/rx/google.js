//const gapi = window.gapi;
export default {
  user: {},
  gapi: null,
  client_id:
    "666466407349-oanmp950m4pp4arec1fcp8okvj6so4cj.apps.googleusercontent.com",
  scope: "email profile",
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
    //var gapi = self.gapi;
    if (window.gapi && nbr < 10) {
      self.gapi = window.gapi;
      self.gapi.load("auth2", () => {
        self.gapi.auth2
          .init({
            client_id: self.client_id,
            scope: self.scope,
          })
          .then(
            function (res) {
              self.onSuccess(res);
            },
            function (error) {
              self.onFaillure(error);
            }
          );
      });
      console.log("Chargement du JS Google");
    } else {
      console.log("Google not load");
      nbr++;
      setTimeout(() => {
        this.initGoogleApi();
      }, 900);
    }
  },
  initLogin() {
    var self = this;
    var gapi = self.gapi;
    var auth = gapi.auth2.getAuthInstance();

    // auth
    //   .signIn({
    //     scope: "profile email",
    //     prompt: "consent",
    //     // ux_mode: "redirect",
    //     // redirect_uri: "https://lesroisdelareno.fr",
    //   })
    //   .then(
    //     function (resp) {
    //       self.onSignIn(resp);
    //     },
    //     function (resp) {
    //       self.onFaillure(resp);
    //     }
    //   );
    auth.grantOfflineAccess({ prompt: "consent", scope: this.scope }).then(
      function (resp) {
        console.log("code", resp);
        self.user.code = resp.code;
        var event = new CustomEvent("wbu-gl-status-change");
        document.dispatchEvent(event);
      },
      function (error) {
        self.onFaillure(error);
      }
    );
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
    console.log("Initialisation de l'app réussi", r);
  },
  onFaillure(resp) {
    console.log("Échec de l'opération", resp);
  },
};
