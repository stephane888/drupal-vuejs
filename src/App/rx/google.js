//const gapi = window.gapi;
export default {
	user: {},
	gapi: null,
	api_key: "",
	client_id: "666466407349-oanmp950m4pp4arec1fcp8okvj6so4cj.apps.googleusercontent.com",
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
			self.checkParams();
			self.gapi = window.gapi;
			self.gapi.load("auth2", () => {
				self.gapi.auth2
					.init({
						clientId: self.client_id,
						apiKey: self.api_key,
						scope: self.scope,
						discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
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
	oautSignIn() {
		var self = this;
		var endPoint = "https://accounts.google.com/o/oauth2/v2/auth";
		var form = document.createElement("form");
		form.setAttribute("method", "GET");
		form.setAttribute("action", endPoint);
		var params = {
			client_id: self.client_id,
			redirect_uri: "https://lesroisdelareno.fr/user/login/",
			response_type: "token",
			scope: "profile email",
			include_granted_scopes: "true",
			state: "kksa-888"
		};
		for (var p in params) {
			var input = document.createElement("input");
			input.setAttribute("type", "hidden");
			input.setAttribute("name", p);
			input.setAttribute("value", params[p]);
			form.appendChild(input);
		}

		// Add form to page and submit it to open the OAuth 2.0 endpoint.
		document.body.appendChild(form);
		form.submit();
	},
	checkParams() {
		var self = this;
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
			if (params["state"] && params["state"] == "kksa-888") {
				//window.localStorage.setItem("user-google", JSON.stringify(params));
				self.user = params;
				console.log("user", self.user);
				var event = new CustomEvent("wbu-gl-status-change");
				document.dispatchEvent(event);
				window.history.replaceState(null, null, window.location.pathname);
			}
		}
	},

	initLogin() {
		var self = this;
		var gapi = self.gapi;
		var auth = gapi.auth2.getAuthInstance();
		auth
			.signIn({
				response_type: "token",
				state: "try_sample_request",
				include_granted_scopes: "true",
				scope: "profile email",
				prompt: "consent",
				ux_mode: "redirect",
				redirect_uri: "http://localhost:8080/"
			})
			.then(
				function (resp) {
					self.onSignIn(resp);
				},
				function (resp) {
					self.onFaillure(resp);
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
			email: profile.getEmail()
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
	}
};
