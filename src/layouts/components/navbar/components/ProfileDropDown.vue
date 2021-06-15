import _color from '@/assets/utils/color.js';
<template>
  <div>
    <div class="the-navbar__user-meta flex items-center">
      <div class="con-img ml-3">
        <img
          key="onlineImg"
          src="@/assets/images/img.png"
          alt="user-img"
          width="45"
          height="45"
          class="rounded-full shadow-md cursor-pointer block"
        />
      </div>
      <div class="  ">
        <p class="text-sm">
          {{ "User Name" }}
        </p>
      </div>

      <vs-dropdown
        vs-custom-content
        vs-trigger-click
        class="cursor-pointer pr-20"
      >
        <div class="con-img ml-3">
          <feather-icon
            icon="SettingsIcon"
            svgClasses="h-45 w-45"
            class="ml-4 mr-4"
          />
        </div>

        <vs-dropdown-menu class="vx-navbar-dropdown">
          <ul style="min-width: 12rem">
            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            >
              <span class="ml-2">Language</span>
            </li>

            <li
              class="flex justify-content-between py-2 px-4 cursor-pointer hover:bg-dark hover:text-white"
            >
              <span class="ml-2 align-content-start">English</span>
              <feather-icon
                icon="CheckIcon"
                svgClasses="w-4 h-4  align-content-end "
              />
            </li>

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            >
              <!-- <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" /> -->
              <span class="ml-2">اللغة العربية</span>
            </li>
            <vs-divider class="m-1" />

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            >
              <span class="ml-2">Font size</span>
            </li>

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            >
              <span class="ml-2 text-3xl text-bold p-1"> A</span>
              <span class="ml-2 text-xl text-bold mt-2 p-1"> A</span>
              <span class="ml-2 text-sm text-bold mt-4 p-1"> A</span>
            </li>

            <vs-divider class="m-1" />
            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
            >
              <span class="ml-2">Account</span>
            </li>
            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="logout"
            >
              <span class="ml-2">Sign Out</span>
            </li>
          </ul>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TechNumber: "+201208950563"
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
    userClinicInfo() {
      return this.$store.state.auth.userClinicInfo;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    logout() {
      this.$store.commit("CLEAR_USER_INFO", null, { root: true });
      // this.$store.commit("REMOVE_USER_INFO",{ root: true });
      this.$store.dispatch("auth/logout");
    },

    mounted() {
      if (!this.activeUserInfo) {
        this.$router.push("admin/login");
      }
    }
  }
};
</script>
