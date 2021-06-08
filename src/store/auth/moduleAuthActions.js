/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import jwt from "../../http/requests/auth/jwt/index.js";
import axios from "@/axios.js";
import router from "@/router";

export default {
  registerUserJWT(context, Model) {
    debugger;
    const data = new FormData();
    data.append("name", Model.params.Model.name);
    data.append("company_name", Model.params.Model.company_name);
    data.append("email", Model.params.Model.email);
    data.append("phone", Model.params.Model.phone);
    data.append("password", Model.params.Model.password);
    data.append("notes", Model.params.Model.notes);
    data.append("address", Model.params.Model.address);
    data.append("address", Model.params.Model.address);
    data.append("country_id", Model.params.Model.country_id);
    data.append("logo", Model.params.logo.file, Model.params.logo.file.name);
    return new Promise((resolve, reject) => {
      axios
        .post("web/orginsers", data)
        .then(response => {
          debugger;
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },
  Settings({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/web/settings`)
        .then(response => {
          if (response.status == 200) {
            debugger;
            commit("Set_Settings", response.data.data);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  addcontactus(context, Model) {
    return new Promise((resolve, reject) => {
      axios
        .post("web/addcontactus", Model)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  logout({ commit }) {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("RefreshToken");
    localStorage.removeItem("TokenExpiration");
    localStorage.removeItem("userInfo");
    commit("CLEAR_USER_INFO", null, { root: true });
    commit("REMOVE_USER_STORE", null, { root: true });
    // Set bearer token in axios
    commit("REMOVE_BEARER");
    router.push("/admin/login");
  }
};
