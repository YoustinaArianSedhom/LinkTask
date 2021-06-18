/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
const UserRole = "1";
//  JSON.parse(localStorage.getItem("userInfo")).userRoleId;
export default [
  {
    url: "/",
    name: "Home",
    show: UserRole,
    slug: "home",
    icon: "HomeIcon",
    i18n: "Home"
  },
  {
    url: "/memberCountries",
    name: "Member Countries",
    slug: "Member Countries",
    icon: "LayoutIcon",
    show: UserRole,
    i18n: "Member Countries"
  },

  {
    url: "/competitions",
    name: "competitions",
    slug: "competitions",
    icon: "ListIcon",
    show: UserRole,
    i18n: "Competitions"
  },

  {
    url: "/events",
    name: "events",
    slug: "events",
    icon: "CalendarIcon",
    show: UserRole,
    i18n: "Events"
  },
  {
    url: "/News",
    name: "News",
    slug: "News",
    icon: "CalendarIcon",
    show: UserRole,
    i18n: "News"
  },

  {
    url: "/payments",
    name: "Payments",
    slug: "Payments",
    icon: "DollarSignIcon",
    show: UserRole,
    i18n: "Payments"
  },

  {
    url: "/contactUs",
    name: "Clinic",
    slug: "Clinic",
    icon: "PhoneCallIcon",
    show: UserRole,
    i18n: "Contact Us"
  }
];
