<template>
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <span class="cursor-pointer flex items-center i18n-locale">
      <span class=" sm:block ml-2">{{ getCurrentLocaleData.lang }}</span>
      <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
    </span>
    <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
      <vs-dropdown-item @click="updateLocale('en')">
        &nbsp;EN
      </vs-dropdown-item>

      <vs-dropdown-item @click="updateLocale('ar')">
        &nbsp;AR
      </vs-dropdown-item>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
/* eslint-disable */
export default {
  computed: {
    rtl: {
      get() {
        return this.$vs.rtl;
      },
      set(val) {
        this.$vs.rtl = val;
      }
    },
    getCurrentLocaleData() {
      const locale = this.$i18n.locale;
      if (locale === "en") return { flag: "us", lang: "EN" };
      // else if (locale === "pt") return { flag: "br", lang: "Portuguese" };
      // else if (locale === "fr") return { flag: "fr", lang: "French" };
      else if (locale === "ar") return { flag: "ar", lang: "AR" };
    }
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("SaveLang", locale);
      if (locale === "ar") {
        this.SwitchToRTL();
      } else {
        this.SwitchToLTR();
      }
    },
    SwitchToRTL() {
      this.rtl = true;
    },
    SwitchToLTR() {
      this.rtl = false;
    }
  }
};
</script>
