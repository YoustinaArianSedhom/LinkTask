<template>
  <div>
    <div
      class="the-navbar__user-meta flex items-center"
      v-if="activeUserInfo.name"
    >
      <div class="text-right leading-tight hidden sm:block">
        <p class="font-semibold">
          {{ activeUserInfo.name }}
        </p>
        <!-- <span v-if="!activeUserInfo.branchName">
          {{ activeUserInfo.clinicName }} /
        </span>
        <span v-if="activeUserInfo.branchName">
          {{ activeUserInfo.branchName }}
        </span> -->
      </div>

      <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
        <div class="con-img ml-3">
          <img
            key="onlineImg"
            src="@/assets/images/flags/ar.png"
            alt="user-img"
            width="40"
            height="40"
            class="rounded-full shadow-md cursor-pointer block"
          />
        </div>

        <vs-dropdown-menu class="vx-navbar-dropdown">
          <ul style="min-width: 9rem">
            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="$router.push('/UserPersonalDetails').catch(() => {})"
            >
              <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
              <span class="ml-2">Profile</span>
            </li>

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-dark hover:text-white"
              @click="$router.push('/apps/email').catch(() => {})"
            >
              <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />
              <span class="ml-2">Inbox</span>
            </li>

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="$router.push('/apps/todo').catch(() => {})"
            >
              <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />
              <span class="ml-2">Tasks</span>
            </li>

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="$router.push('/apps/chat').catch(() => {})"
            >
              <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />
              <span class="ml-2">Chat</span>
            </li>

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="$router.push('/apps/eCommerce/wish-list').catch(() => {})"
            >
              <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />
              <span class="ml-2">Wish List</span>
            </li>

            <vs-divider class="m-1" />

            <li
              class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
              @click="logout"
            >
              <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
              <span class="ml-2">Logout</span>
            </li>
          </ul>
        </vs-dropdown-menu>
      </vs-dropdown>
    </div>
    <div v-else>
      <span v-if="windowWidth > 500">
        Call Us
        <a :href="`tel:${TechNumber}`" class="text-md mr-4 text-primary">
          {{ TechNumber }}</a
        >
      </span>

      <vs-button
        class="rounded-full"
        :to="{
          name: 'Register'
        }"
        color="primary"
        type="border"
        >{{ $t("Register") }}</vs-button
      >
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
