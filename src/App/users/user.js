import utilities from "../utilities.js";
export default {
  getCurrentUser() {
    return new Promise((resolv) => {
      utilities.get("/appformmanager/current-user").then((resp) => {
        resolv(resp.data);
      });
    });
  },
  getUser(uid) {
    return new Promise((resolv) => {
      utilities.get("/user/" + uid + "?_format=json").then((resp) => {
        resolv(resp.data);
      });
    });
  },
};
