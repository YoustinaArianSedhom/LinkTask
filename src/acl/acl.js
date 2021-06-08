import Vue from "vue";
import { AclInstaller, AclCreate, AclRule } from "vue-acl";
import router from "./../router";
Vue.use(AclInstaller);

let initialRole = "Anonymous";
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
if (userInfo && userInfo.userRoleId) {
  if (userInfo.userRoleId == 1) {
    initialRole = "Admin";
  } else {
    initialRole = "Admin";
  }
}
const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
export default new AclCreate({
  initial: initialRole,
  notfound: {
    path: "/pages/Error404",
    forwardQueryParams: true
  },
  router,
  acceptLocalRules: true,
  globalRules: {
    isAdmin: new AclRule("SuperAdmin").generate(),
    isPublic: new AclRule("Admin").or("Anonymous").generate()
  },
  middleware: async acl => {
    debugger;
    acl.change(initialRole);
    // console.log(AclRule.permission);
  }
});
