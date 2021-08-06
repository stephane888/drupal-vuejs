const FB = window.fbAsyncInit;
export default {
  user: {},
  openPopup() {
    var self = this;
    FB.login(function (resp) {
      self.statusChangeCallback(resp);
    });
  },
  statusChangeCallback(r) {
    this.user = r;
  },
  getUserStatus() {
    var self = this;
    FB.getLoginStatus(function (response) {
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
        FB.init({
          appId: "344690973822888",
          cookie: true,
          xfbml: true,
          version: "v11.0",
        });
        console.log("Chargement du JS facebook");
        self.getUserStatus();
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
