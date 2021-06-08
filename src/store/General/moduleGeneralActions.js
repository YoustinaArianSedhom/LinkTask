import axios from "@/axios.js";

export default {
  getcountries({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("web/getcountries")
        .then(response => {
          debugger;
          if (response.status == 200) {
            resolve(response);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  GetRoles({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("WithoutAuthorize/GetLookups", {
          params: {
            groupName: "Role"
          }
        })
        .then(response => {
          debugger;
          if (response.status == 200) {
            commit("SET_ROLE", response.data);
            resolve(response);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  GetCities({ commit }, id) {
    debugger;
    return new Promise((resolve, reject) => {
      axios
        .get("WithoutAuthorize/GetCities", {
          params: {
            id: id
          }
        })
        .then(response => {
          debugger;
          if (response.status == 200) {
            commit("SET_CITY", response.data);
            resolve(response);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
