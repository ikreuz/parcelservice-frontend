import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  customVariables: [],
  treeShake: true,
  breakpoint: {
    thresholds: {
      xs: 530,
      sm: 640,
      md: 768,
      lg: 1280,
    },
    // true if screen width < mobileBreakpoint
    // mobile: true,
    // mobileBreakpoint: number,
    scrollBarWidth: 24,
  },
  icons: {
    iconfont: "md",
  },
  theme: {
    options: {
      customProperties: true,
    },

    themes: {
      light: {
        primary: "#0265FA",
        secondary: "#FFF24D",
        accent: "#8c9eff",
        white: "#fff",

        clara: "#01B283",
        josefine: "#1064FE",
        anderson: "#34495E",
        ember: "#232f3e",
        bunker: "#292D33",
        background: "#f5f5f7",
      },
    },
  },
});
