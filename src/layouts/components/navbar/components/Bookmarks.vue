<template>
  <div class="navbar-bookmarks flex items-center align-bottom">
    <!-- STARRED PAGES - FIRST 10 -->

    <ul class="vx-navbar__starred-pages" v-if="isAdmin">
      <div :group="{ name: 'pinList' }" class="flex cursor-move">
        <li
          :class="[{ 'router-link-active': activeLink }]"
          class="starred-page"
          v-for="(page, index) in AdminList"
          :key="page.url"
        >
          <span
            @click="ChangeClassForActiveUrl(page.url, index)"
            class="p-2 cursor-pointer text-lg text-primary"
            >{{ page.title }}
          </span>
          <ActiveLink
            v-if="
              (IsActiveLink && index === activeItem) ||
                $router.history.current.path == page.url
            "
            class="flex justify-center"
          />
        </li>
      </div>
    </ul>
    <ul class="vx-navbar__starred-pages" v-else>
      <div :group="{ name: 'pinList' }" class="flex cursor-move">
        <li
          :class="[{ 'router-link-active': activeLink }]"
          class="starred-page"
          v-for="(page, index) in QuickAccessPagesList"
          :key="page.url"
        >
          <span
            @click="ChangeClassForActiveUrl(page.url, index)"
            class="p-2 cursor-pointer text-lg text-primary"
            >{{ page.title }}
          </span>
          <ActiveLink
            v-if="
              (IsActiveLink && index === activeItem) ||
                $router.history.current.path == page.url
            "
            class="flex justify-center"
          />
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import ActiveLink from "@/layouts/svg/ActiveLink.vue";

export default {
  props: {
    navbarColor: {
      type: String,
      default: "#fff"
    }
  },
  data() {
    return {
      activeItem: null,
      IsActiveLink: false,
      showBookmarkPagesDropdown: false,
      QuickAccessPagesList: [
        { url: "/", title: "Home" },
        { url: "/memberCountries", title: "Member Countries" },
        { url: "/competitions", title: "Competitions" },
        { url: "/events", title: "Events" },
        { url: "/payments", title: "Payments" },
        { url: "/contactUs", title: "Contact Us" }
      ],
      AdminList: [
        { url: "/", title: "Home" },
        { url: "/usersList", title: "Users List" }
      ]
    };
  },
  components: {
    ActiveLink
  },
  watch: {
    $route() {
      if (this.showBookmarkPagesDropdown)
        this.showBookmarkPagesDropdown = false;
    }
  },
  computed: {
    isAdmin() {
      return this.$store.state.AppActiveUser.token;
    },
    activeLink() {
      return !!(
        (this.to === this.$route.path ||
          this.$route.meta.parent === this.slug) &&
        this.to
      );
    },
    navbarSearchAndPinList() {
      return { pages: this.$store.state.navbarSearchAndPinList["pages"] };
    },
    starredPages() {
      return this.$store.state.starredPages;
    },
    starredPagesLimited: {
      get() {
        return this.starredPages.slice(0, 10);
      },
      set(list) {
        this.$store.dispatch("arrangeStarredPagesLimited", list);
      }
    },
    starredPagesMore: {
      get() {
        return this.starredPages.slice(10);
      },
      set(list) {
        this.$store.dispatch("arrangeStarredPagesMore", list);
      }
    },
    textColor() {
      return {
        "text-dark":
          this.$store.state.mainLayoutType === "vertical" &&
          this.navbarColor !==
            (this.$store.state.theme === "dark"
              ? "#10163a"
              : ",'hover:bg-blue-700'#fff")
      };
    }
  },
  methods: {
    ChangeClassForActiveUrl(url, index) {
      this.$router.push(url);
      this.activeItem = index;
      this.IsActiveLink = true;
    },
    selected(obj) {
      this.$store.commit("TOGGLE_CONTENT_OVERLAY", false);
      this.showBookmarkPagesDropdown = false;
      this.$router.push(obj.pages.url).catch(() => {});
    },
    actionClicked(item) {
      this.$store.dispatch("updateStarredPage", {
        url: item.url,
        val: !item.is_bookmarked
      });
      // this.$refs.bookmarkAutoSuggest.filterData()
    },
    outside() {
      this.showBookmarkPagesDropdown = false;
    },
    hnd_search_query_update(query) {
      // Show overlay if any character is entered
      this.$store.commit("TOGGLE_CONTENT_OVERLAY", !!query);
    }
  },
  directives: {
    "click-outside": {
      bind(el, binding) {
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          /* eslint-disable no-mixed-operators */
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            /* eslint-enable no-mixed-operators */
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        document.addEventListener("click", handler);
      },

      unbind(el) {
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
  created() {}
};
</script>
