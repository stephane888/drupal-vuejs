//const FB = window.Fb;
export default {
  user: {},
  FB: null,
  appId: "215214177170922",
  scope: "public_profile, email",
  version: "v11.0",
  openPopup() {
    var self = this;
    console.log("fb", this.FB);
    window.FB.login(
      function (resp) {
        self.statusChangeCallback(resp);
      }
      // { scope: self.scope, return_scopes: true }
    );
  },
  logOut() {
    window.FB.logout(function (res) {
      this.onLogOut(res);
    });
  },
  onLogOut(resp) {
    console.log("Déconnetion réussi", resp);
  },
  statusChangeCallback(r) {
    this.user = r;
    console.log("status", this.user);
  },
  getUserStatus() {
    var self = this;
    window.FB.getLoginStatus(function (response) {
      self.statusChangeCallback(response);
    });
  },
  chargement() {
    var self = this;
    const f = (d, s, id) => {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = function () {
        function checkFB() {
          if (window.FB) {
            self.FB = window.FB;
            self.FB.init({
              appId: self.appId,
              cookie: true,
              xfbml: true,
              version: self.version,
              statue: false,
            });
            console.log("Chargement du JS facebook");
            self.getUserStatus();
          } else {
            console.log("ass");
            setTimeout(() => {
              checkFB();
            }, 900);
          }
        }
        checkFB();
      };
    };
    f(document, "script", "facebook-jssdk");
  },
};

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
