<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="relative">
    <div class="vx-navbar-wrapper">
      <vs-navbar
        class="vx-navbar navbar-custom navbar-skelton md:px-20"
        color="primary"
        :class="textColor"
      >
        <!-- SM - OPEN SIDEBAR BUTTON -->

        <vs-dropdown
          style="background:red"
          vs-trigger-click
          class="cursor-pointer bg-primary pr-20"
        >
          <div class="con-img ml-3">
            <feather-icon
              icon="MenuIcon"
              svgClasses="h-45 w-45"
              class="ml-4 mr-4"
            />
          </div>

          <vs-dropdown-menu class="bg-primary w-1/3">
            <div class="w-full bg-primary">
              <div class="vx-row w-full pt-20">
                <div class=" pl-20 vx-col text-white">
                  <div class="text-white" target="_blank">
                    <feather-icon
                      icon="TwitterIcon"
                      svgClasses="h-6 w-6"
                      class="ml-4 mr-4"
                    />
                  </div>
                  <div class="text-white" target="_blank">
                    <feather-icon
                      icon="FacebookIcon"
                      svgClasses="h-6 w-6"
                      class="ml-4 mr-4"
                    />
                  </div>
                  <div class="text-white" target="_blank">
                    <feather-icon
                      icon="YoutubeIcon"
                      svgClasses="h-6 w-6"
                      class="ml-4 mr-4"
                    />
                  </div>
                  <div class="text-white" target="_blank">
                    <feather-icon
                      icon="InstagramIcon"
                      svgClasses="h-6 w-6"
                      class="ml-4 mr-4"
                    />
                  </div>
                  <div class="text-white" target="_blank">
                    <feather-icon
                      icon="LinkedinIcon"
                      svgClasses="h-6 w-6"
                      class="ml-4 mr-4"
                    />
                  </div>
                </div>
                <div class=" pl-20 vx-col ">
                  <div>
                    <router-link
                      tag="div"
                      to="/"
                      class="vx-logo cursor-pointer mr-auto flex items-start"
                    >
                      <span class="text-2xl p-10 text-lemony "
                        >Home</span
                      ></router-link
                    >
                  </div>
                  <div>
                    <span class="text-2xl p-10 text-white mt-20">About Us</span>
                  </div>
                  <div>
                    <span class="text-lg p-10 text-grey-light">
                      who are us?</span
                    >
                  </div>
                  <div>
                    <span class="text-lg p-10 text-grey-light"> why us?</span>
                  </div>
                  <div>
                    <span class="text-2xl p-10 text-white">News</span>
                  </div>
                  <div>
                    <router-link
                      tag="div"
                      to="/News"
                      class="vx-logo cursor-pointer mr-auto flex items-start"
                    >
                      <span class="text-lg p-10 text-grey-light"> News</span>
                    </router-link>
                  </div>
                  <div>
                    <span class="text-lg p-10 text-grey-light"> Events</span>
                  </div>
                  <div>
                    <span class="text-2xl p-10  text-white">Careers</span>
                  </div>
                  <div>
                    <span class="text-lg p-10 text-grey-light">
                      Opportunities</span
                    >
                  </div>
                  <div>
                    <span class="text-2xl mt-20 p-10 text-white"
                      >Contact Us</span
                    >
                  </div>
                  <div>
                    <span class="text-2xl p-10 text-white">Site Map</span>
                  </div>
                </div>
              </div>
            </div>
          </vs-dropdown-menu>
        </vs-dropdown>

        <router-link
          tag="div"
          to="/"
          class="vx-logo cursor-pointer mr-auto flex items-start"
        >
          <logo class="w-16 mr-6 ml-6 fill-current text-primary" />
        </router-link>
        <vs-spacer v-if="windowWidth >= 992" />

        <!-- <i18n class="ml-2 mr-2" /> -->

        <!-- <search-bar class="mx-4" /> -->
        <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" class="mr-4" />

        <!-- <cart-drop-down /> -->

        <notification-drop-down class="mx-4" />

        <profile-drop-down class="mx-4" />
      </vs-navbar>
    </div>
  </div>
</template>

<script>
// import I18n from "./components/I18n.vue";
// import SearchBar from "./components/SearchBar.vue";
// import CartDropDown from "./components/CartDropDown.vue";
import NotificationDropDown from "./components/NotificationDropDown.vue";
import ProfileDropDown from "./components/ProfileDropDown.vue";
import Logo from "../Logo.vue";
// import VNavMenu from "@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue";

export default {
  name: "the-navbar-vertical",
  props: {
    navbarColor: {
      type: String,
      default: "#fff"
    }
  },
  components: {
    Logo,
    // I18n,
    // VNavMenu,
    // SearchBar,
    // CartDropDown,
    NotificationDropDown,
    ProfileDropDown
  },
  computed: {
    textColor() {
      return "text-white";
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }

    // NAVBAR STYLE
  },
  methods: {
    showSidebar() {
      this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
    },
    gotoNews() {
      debugger;
      this.$router.push("/News");
    }
  }
};
</script>
<style>
.vs-dropdown-menu {
  height: 100%;
  position: fixed;
}
.text-lemony {
  color: chartreuse;
}
</style>
