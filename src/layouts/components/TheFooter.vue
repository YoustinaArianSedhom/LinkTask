<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<!--functional -->
<template>
  <footer class="text-black" :class="classes">
    <vs-row
      class="mt-16 font-medium bg-grey-light sm:px-0 md:px-4 lg:px-24 xl:px-64 "
    >
      <vs-col class="text-gray mb-4" vs-lg="3" vs-sm="3" vs-xs="12">
        <ul class="mt-4">
          <li class="mb-2">
            <span>
              News
            </span>
          </li>
          <li class="mb-2">
            <span>
              Events
            </span>
          </li>
          <li class="mb-2">
            <span>
              About
            </span>
          </li>
          <li class="mb-2">
            <span>
              FAQs
            </span>
          </li>
        </ul>
      </vs-col>
      <vs-col class="mb-4" vs-lg="3" vs-sm="3" vs-xs="12">
        <span class="mb-8">About Us</span>
        <ul class="mt-4">
          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                About Us</a
              >
            </span>
          </li>

          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Work Protfolio</a
              >
            </span>
          </li>

          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Team</a
              >
            </span>
          </li>

          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Plan & Pricing</a
              >
            </span>
          </li>
        </ul>
      </vs-col>
      <vs-col class="mb-4" vs-lg="2" vs-sm="3" vs-xs="12">
        <span class="mb-8">Others</span>
        <ul class="mt-4">
          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Contacts</a
              >
            </span>
          </li>

          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Privary & Policy</a
              >
            </span>
          </li>

          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Legal</a
              >
            </span>
          </li>

          <li class="mb-2">
            <span>
              <a
                class="text-gray"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Help Center</a
              >
            </span>
          </li>
        </ul>
      </vs-col>
    </vs-row>
    <vs-row>
      <!-- <vs-divider color="white" /> -->
      <div
        class="flex w-full bg-img vx-row no-gutter bg-primary items-center justify-center h-14"
        style="height:"
      >
        <span class="text-white"
          >All right receved-Link Development Company © 2020
        </span>
      </div>
    </vs-row>
  </footer>
</template>

<script>
export default {
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  },
  data() {
    return {};
  },
  components: {},
  computed: {
    webSettings() {
      return this.$store.state.auth.Settings;
    },
    webSettingsAddress() {
      return this.$store.state.auth.Settings.address.split(",");
    }
  },
  created() {
    this.$store.dispatch("auth/Settings");
  }
};
</script>
<style scoped>
.text-white {
  color: #fff !important;
}
</style>
