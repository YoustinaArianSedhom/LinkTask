/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

// import moduleECommerce from './eCommerce/moduleECommerce.js'

export default new Vuex.Store({
  plugins: [createPersistedState()],
  getters,
  mutations,
  state,
  actions,
  modules: {
    // todo: moduleTodo,
    // chat: moduleChat,
    // email: moduleEmail,
    // eCommerce: moduleECommerce,
  },
  strict: process.env.NODE_ENV !== "production"
});
