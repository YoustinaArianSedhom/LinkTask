<!-- =========================================================================================
	File Name: App.vue
	Description: Main vue file - APP
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import themeConfig from "@/../themeConfig.js";
import jwt from "@/http/requests/auth/jwt/index.js";
import VeeValidate, { Validator } from "vee-validate";
import ar from "vee-validate/dist/locale/ar.js";
import en from "vee-validate/dist/locale/en.js";
Validator.localize({
  ar,
  en
});
/* eslint-disable */
export default {
  data() {
    return {
      CurrentStatus: null,
      userRole: null
    };
  },
  watch: {
    userRole(val) {
      debugger;
      this.$store.dispatch("updateUserRole", {
        aclChangeRole: this.$acl.change,
        userRole: val
      });
    },
    "$store.state.theme"(val) {
      this.toggleClassInBody(val);
    },
    "$vs.rtl"(val) {
      document.documentElement.setAttribute("dir", val ? "rtl" : "ltr");
    }
  },
  // components: {BaseTimer},
  methods: {
    /* eslint-disable */
    checkAndAttachMapScript() {
      let initialized = !!window.google;
      return new Promise((resolve, reject) => {
        if (initialized) {
          return resolve(window.google);
        }

        initialized = true;
        window.mapApiInitialized = () => resolve(window.google);
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoTlXgH1pKuHPcbZsrIijQV0T_Tr926UE&libraries=places,geometry&callback=mapApiInitialized";
        script.onload = () => {
          resolve(window.google);
        };
        script.onerror = () => reject(new Error("Script load error: " + src));
        document.querySelector("head").appendChild(script);
      });
    },
    /* eslint-enable */
    showResponseErrMsg(err) {
      this.$vs.notify({
        title: this.$t("Error"),
        text: err,
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning"
      });
    },
    showFillData() {
      this.$vs.notify({
        color: "danger",
        position: "center-bottom",
        text: this.$t("PleaseFillAllRequiredData")
      });
    },
    showError() {
      this.$vs.notify({
        color: "danger",
        position: "right-bottom",
        title: this.$t("Error"),
        text: this.$t("showError")
      });
    },
    showSuccessCreate() {
      this.$vs.notify({
        color: "primary",
        position: "top-center",
        title: this.$t("Create"),
        text: this.$t("RegisterCreatedSuccessfuly")
      });
    },
    showAlreadyExist() {
      this.$vs.notify({
        color: "warning",
        position: "bottom-center",
        title: this.$t("AlreadyExist"),
        text: this.$t("ThisUserAlreadyExist")
      });
    },

    showSuccess() {
      this.$vs.notify({
        color: "primary",
        position: "top-center",
        title: this.$t("Update"),
        text: this.$t("showUpdate")
      });
    },
    showSuccessAddNote() {
      this.$vs.notify({
        color: "primary",
        position: "top-center",
        title: this.$t("Update"),
        text: this.$t("SuccessAddNote")
      });
    },
    showDriverAddeddSuccessfuly() {
      this.$vs.notify({
        color: "primary",
        position: "top-center",
        title: this.$t("Success"),
        text: this.$t("DriverAddeddSuccessfuly")
      });
    },
    showNoRecords() {
      this.$vs.notify({
        color: "warning",
        position: "bottom-center",
        title: this.$t("Search"),
        text: this.$t("showNoDataAvailable")
      });
    },
    showCheckEmail() {
      this.$vs.notify({
        color: "primary",
        position: "top-center",
        title: this.$t("ResetPassword"),
        text: this.$t("showCheckEmail")
      });
    },
    showPasswordChanged() {
      this.$vs.notify({
        color: "primary",
        position: "top-center",
        title: this.$t("ResetPassword"),
        text: this.$t("showPasswordChanged")
      });
    },
    notAllowedToAccessCurrentPage(CurrentStatus) {
      if (
        CurrentStatus == "BS11" ||
        CurrentStatus == "BS13" ||
        CurrentStatus == "BS14" ||
        CurrentStatus == "BS15" ||
        CurrentStatus == "BS16" ||
        CurrentStatus == "SO3" ||
        CurrentStatus == "SO4" ||
        CurrentStatus == "CS2" ||
        CurrentStatus == "CS3" ||
        CurrentStatus == "PS1" ||
        CurrentStatus == "DPS1"
      ) {
        this.$router.go(-1);
      }
    },
    InvalidImageType() {
      this.$vs.notify({
        color: "warning",
        position: "bottom-center",
        title: this.$t("InvalidType"),
        text: this.$t("InvalidImageType")
      });
    },
    toggleClassInBody(className) {
      if (className == "dark") {
        if (document.body.className.match("theme-semi-dark")) {
          document.body.classList.remove("theme-semi-dark");
        }
        document.body.classList.add("theme-dark");
      } else if (className == "semi-dark") {
        if (document.body.className.match("theme-dark")) {
          document.body.classList.remove("theme-dark");
        }
        document.body.classList.add("theme-semi-dark");
      } else {
        if (document.body.className.match("theme-dark")) {
          document.body.classList.remove("theme-dark");
        }
        if (document.body.className.match("theme-semi-dark")) {
          document.body.classList.remove("theme-semi-dark");
        }
      }
    },
    handleWindowResize() {
      this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);
    },
    handleScroll() {
      this.$store.commit("UPDATE_WINDOW_SCROLL_Y", window.scrollY);
    }
  },
  mounted() {
    Validator.localize(this.$i18n.locale);
    this.toggleClassInBody(themeConfig.theme);
    this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);
  },
  async created() {
    // this.$store.commit("UpdateSessionExpired", false);

    // jwt
    // jwt.init();
    // if (this.$store.state.auth.isUserLoggedIn()) {
    //   this.$store
    //     .dispatch("auth/refreshCurrentUser")
    //     .then(res => {
    //       debugger;
    //       this.userRole = res.data.roleId;
    //       console.log(this.userRole);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       debugger;
    //       this.$store.commit("CLEAR_USER_INFO", null, { root: true });
    //       this.$store.commit("REMOVE_USER_STORE", null, { root: true });
    //       this.$store.dispatch("auth/logout");
    //     });
    // }

    if (localStorage.getItem("SaveLang") === "ar") {
      this.$vs.rtl = true;
    }
    window.showError = this.showError;
    window.InvalidImageType = this.InvalidImageType;
    window.showResponseErrMsg = this.showResponseErrMsg;
    window.showSuccess = this.showSuccess;
    window.showNoRecords = this.showNoRecords;
    window.showCheckEmail = this.showCheckEmail;
    window.showFillData = this.showFillData;
    window.showPasswordChanged = this.showPasswordChanged;
    window.notAllowedToAccessCurrentPage = this.notAllowedToAccessCurrentPage;
    window.showSuccessCreate = this.showSuccessCreate;
    window.showAlreadyExist = this.showAlreadyExist;
    window.checkAndAttachMapScript = this.checkAndAttachMapScript;
    window.showDriverAddeddSuccessfuly = this.showDriverAddeddSuccessfuly;
    window.showSuccessAddNote = this.showSuccessAddNote;
    let dir = this.$vs.rtl ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);

    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style>
.con-vs-avatar {
  font-size: xx-large !important;
}
</style>
<style scoped>
#loading-bg {
  width: 100%;
  height: 100%;
  background: #fff;
  display: block;
  position: absolute;
}

.loading-logo {
  position: absolute;
  left: calc(50% - 45px);
  top: 35%;
}

.loading {
  position: absolute;
  left: calc(50% - 35px);
  top: 50%;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid transparent;
}

.loading .effect-1,
.loading .effect-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-left: 3px solid rgba(121, 97, 249, 1);
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.loading .effect-1 {
  animation: rotate 1s ease infinite;
}

.loading .effect-2 {
  animation: rotateOpacity 1s ease infinite 0.1s;
}

.loading .effect-3 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-left: 3px solid rgba(121, 97, 249, 1);
  -webkit-animation: rotateOpacity 1s ease infinite 0.2s;
  animation: rotateOpacity 1s ease infinite 0.2s;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.loading .effects {
  transition: all 0.3s ease;
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes rotateOpacity {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    opacity: 0.1;
  }
  100% {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
    opacity: 1;
  }
}
</style>
