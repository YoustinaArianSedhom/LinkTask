import Vue from "vue";
import Router from "vue-router";
// import store from "@/store/store.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "",
      component: () => import("./layouts/main/Main2.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("./views/Home.vue"),
          meta: {
            rule: "isPublic"
          }
        },
        {
          path: "/NewsDetails",
          name: "NewsDetails",
          component: () => import("@/views/NewsDetails.vue"),

          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "News", url: "/News" },
              { title: "News Details", active: true }
            ],
            rule: "isPublic"
          }
        },
        {
          path: "/News",
          name: "News",
          component: () => import("@/views/News.vue"),
          meta: {
            rule: "isPublic"
          }
        }
      ]
    },
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
      ]
    },

    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
      ]
    }
  ]
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});
// router.beforeEach((to, from, next) => {
//   const publicPages = ["/", "/register", "/user/forgetPassword/forgetPassword"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("userInfo");

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     store.commit("REMOVE_USER_STORE", null, { root: true });
//     next("/");
//   } else {
//     next();
//   }
// });

// });

export default router;
