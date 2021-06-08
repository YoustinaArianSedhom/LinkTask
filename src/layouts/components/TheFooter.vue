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
  <footer class="text-white the-footer bg-primary flex-wrap " :class="classes">
    <vs-row class="mt-16 font-medium sm:px-0 md:px-4 lg:px-24 xl:px-64 ">
      <vs-col class="mb-4" vs-lg="4" vs-sm="3" vs-xs="12">
        <logo class="w-16 mr-6 ml-6 mb-6 fill-current text-primary" />
        <span class="text-white">
          Address :
          <span v-for="(item, index) in webSettingsAddress" :key="index">
            {{ item }} <br />
          </span>
        </span>
        <br />
        <span>
          <a :href="`tel:${webSettings.phone}`" class=" mr-4 text-white">
            {{ webSettings.phone }}</a
          >
        </span>

        <!-- <span>
          <a :href="`mailTo:${webSettings.email}`" class=" mr-4 text-white">
            {{ webSettings.email }}</a
          >
        </span> -->
        <br />
        <br />
        <a class="text-white" :href="webSettings.twitter" target="_blank">
          <feather-icon
            icon="TwitterIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>
        <a class="text-white" :href="webSettings.facebook" target="_blank">
          <feather-icon
            icon="FacebookIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>
        <a class="text-white" :href="webSettings.instagram" target="_blank">
          <feather-icon
            icon="InstagramIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>
        <a class="text-white" :href="webSettings.linkedin" target="_blank">
          <feather-icon
            icon="LinkedinIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>
      </vs-col>
      <vs-col class="text-white mb-4" vs-lg="3" vs-sm="3" vs-xs="12">
        <span class="mb-8">Competition</span>
        <ul class="mt-4">
          <li class="mb-2">
            <span>
              <a
                class="text-white"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Overview Categories</a
              >
            </span>
          </li>
          <li class="mb-2">
            <span>
              <a
                class="text-white"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Development</a
              >
            </span>
          </li>
          <li class="mb-2">
            <span>
              <a
                class="text-white"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Branding</a
              >
            </span>
          </li>
          <li class="mb-2">
            <span>
              <a
                class="text-white"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                International Final</a
              >
            </span>
          </li>

          <li class="mb-2">
            <span>
              <a
                class="text-white"
                href="https://www.google.com"
                target="_blank"
                rel="nofollow"
              >
                Previous Challenges</a
              >
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
                class="text-white"
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
                class="text-white"
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
                class="text-white"
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
                class="text-white"
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
                class="text-white"
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
                class="text-white"
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
                class="text-white"
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
                class="text-white"
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
      <vs-divider color="white" />
      <div
        class="flex w-full bg-img vx-row no-gutter items-center justify-center"
      >
        <span class="text-white"
          >{{ $t("COPYRIGHT") }} © {{ new Date().getFullYear() }}
          <a
            href="https://google.com/"
            class="text-white"
            target="_blank"
            rel="nofollow"
            >WRO Virtual</a
          ></span
        >
      </div>
    </vs-row>
  </footer>
</template>

<script>
import Logo from "@/layouts/components/FooterLogo.vue";

export default {
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  },
  data() {
    return { TechNumber: "+123 456 789" };
  },
  components: {
    Logo
  },
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
