import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";
import "@/assets/scss/style.scss";
import "@/assets/scss/login.scss";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import jsCookie from "js-cookie";
import VueMeta from "vue-meta";
import { VueReCaptcha } from "vue-recaptcha-v3";
//
Vue.config.productionTip = false;
Vue.use(jsCookie);
Vue.use(VueMeta);
Vue.use(VueReCaptcha, {
  siteKey: "6LdqZC0cAAAAADHJS7yfVTZBtdhFZDXV1SliXkme",
  version: 3, // Version
  size: "compact", // Size: 'compact', 'normal', 'invisible' (v2)
  loaderOptions: {
    useRecaptchaNet: true,
    autoHideBadge: true,
  },
});
Vue.use(Toast, {
  // Can be either a string or an array of strings
  containerClassName: "parcel-toast__container",
  // For the actual toast, including different toast types:
  toastClassName: ["parcel-toast"],
  // For the toast body when using strings or a custom component as content
  bodyClassName: [
    "parcel-toast__body",
    "parcel-toast__component-body",
    "text-truncate",
    "text-no-wrap",
  ],
});
//
router.beforeEach((to, from, next) => {
  let bit = false;
  let logged_in = jsCookie.get("logged_in");
  let access_token = jsCookie.get("access_token");

  if (logged_in) bit = true;
  if (access_token) bit = true;
  if (to.name !== "Login" && !bit) next({ name: "Login" });
  else next();
});
//
router.afterEach(() => {});
//
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
