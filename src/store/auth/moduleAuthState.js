/*=========================================================================================
  File Name: moduleAuthState.js
  Description: Auth Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
export default {
  User: [],
  Settings: {},
  isUserLoggedIn: () => {
    return !!localStorage.getItem("userInfo");
  },
  isEmailExist: "",
  isRegisteredCompany: "",
  isForgetPasswordSent: ""
};
