import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store.js";

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

        {
          path: "/register",
          name: "Register",
          component: () => import("@/views/register/Register.vue"),
          meta: {
            rule: "isPublic"
          }
        },

        {
          path: "/contactUs",
          name: "ContactUs",
          component: () => import("@/views/ContactUs.vue"),
          meta: {
            rule: "isPublic"
          }
        },
        {
          path: "/payments",
          name: "Payments",
          component: () => import("@/views/Payments.vue"),
          meta: {
            rule: "isPublic"
          }
        },
        {
          path: "/events",
          name: "Events",
          component: () => import("@/views/Events.vue"),
          meta: {
            rule: "isPublic"
          }
        },
        {
          path: "/competitions",
          name: "Competitions",
          component: () => import("@/views/Competitions.vue"),
          meta: {
            rule: "isPublic"
          }
        },
        {
          path: "/memberCountries",
          name: "MemberCountries",
          component: () => import("@/views/MemberCountries.vue"),
          meta: {
            rule: "isPublic"
          }
        },
        {
          path: "/members",
          name: "Members",
          component: () => import("@/views/CountryMembers.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Member Countries", url: "/memberCountries" },
              { title: "members", active: true }
            ],
            rule: "isPublic"
          }
        },
        {
          path: "/regularCompetition",
          name: "RegularCompetition",
          component: () => import("@/views/RegularCompetition.vue"),
          meta: {
            breadcrumb: [
              { title: "Home", url: "/" },
              { title: "Competitions", url: "/competitions" },
              { title: "Regular Competition", active: true }
            ],
            rule: "isPublic"
          }
        }
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

        {
          path: "/pages/Error404",
          name: "Error404",
          component: () => import("@/views/pages/Error404.vue"),
          meta: {
            rule: "isPublic"
          }
        },

        {
          path: "/pages/NotAuthorized",
          name: "NotAuthorized",
          component: () => import("@/views/pages/NotAuthorized.vue"),
          meta: {
            rule: "isPublic"
          }
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/Error404"
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
