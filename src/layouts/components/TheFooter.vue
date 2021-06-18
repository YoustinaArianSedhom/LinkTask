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
    <vs-row class="mt-14 font-medium light  ">
      <vs-col vs-lg="3" vs-sm="3" vs-xs="12">
        <ul class="mt-4 ml-5">
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

      <vs-col vs-lg="3" vs-sm="3" vs-xs="12">
        <ul class="mt-4">
          <li class="mb-2">
            <span>
              Privary & Policy
            </span>
          </li>

          <li class="mb-2">
            <span>
              Contact Us
            </span>
          </li>

          <li class="mb-2">
            <span>
              Complains
            </span>
          </li>
        </ul>
      </vs-col>
      <vs-col vs-lg="3" vs-sm="3" vs-xs="12">
        <ul class="mt-4">
          <li class="mb-2">
            <span>
              subscribe To News Litter
            </span>
          </li>
          <li class="mb-2 vx-row">
            <div class="inline-block">
              <vs-input placeholder="Email Adress"></vs-input>
            </div>
            <div class="inline-block">
              <vs-button
                size="small"
                color="#B3E283"
                type="filled"
                class="h-10"
              >
                Subscribe</vs-button
              >
            </div>
          </li>
        </ul>
      </vs-col>
      <vs-col class="mt-4" vs-lg="3" vs-sm="3" vs-xs="12">
        <a class="text-black" target="_blank">
          <feather-icon
            icon="TwitterIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>

        <a class="text-black" target="_blank">
          <feather-icon
            icon="FacebookIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>

        <a class="text-black" target="_blank">
          <feather-icon
            icon="InstagramIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>

        <a class="text-black" target="_blank">
          <feather-icon
            icon="LinkedinIcon"
            svgClasses="h-6 w-6"
            class="ml-4 mr-4"
          />
        </a>
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
    return { TechNumber: "+123 456 789" };
  },
  components: {},
  computed: {},
  created() {}
};
</script>
<style scoped>
.text-white {
  color: #fff !important;
}
.light {
  background-color: #dddddd;
}
</style>
