import utilities from "../utilities.js";
export default {
  ...utilities,
  getCurrentUser() {
    return new Promise((resolv) => {
      this.get("/appformmanager/current-user").then((resp) => {
        resolv(resp.data);
      });
    });
  },
  getUser(uid) {
    return new Promise((resolv) => {
      this.get("/user/" + uid + "?_format=json").then((resp) => {
        resolv(resp.data);
      });
    });
  },
};
