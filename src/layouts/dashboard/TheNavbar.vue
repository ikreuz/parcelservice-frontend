<template>
  <v-toolbar dense class="nopadding global-nav noshadow" color="background">
    <nav
      class="global-nav__menu"
      role="navigation"
      id="global-nav-si"
      color="background"
    >
      <div class="global-nav__inner" color="background">
        <router-link to="/">
          <div class="global-nav__row" data-link="nav-mpm">
            <div class="global-nav__content">
              <div class="global-nav__brand">
                <img
                  width="36rem"
                  height="36rem"
                  src="@/assets/img/logo.svg"
                  alt="Parcel logo"
                  id="nav-logo-si"
                  class="global-nav__logo"
                />
              </div>
            </div>
          </div>
        </router-link>

        <v-divider></v-divider>

        <TheSearch id="global-nav-search-si" />

        <v-divider></v-divider>
        <ul class="global-nav__container menu" id="menu-si">
          <li class="global-nav__link-wrapper d-flex mx-4 menu-folio">
            <v-badge content="6" color="anderson" dark overlap>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title data-view-name="view-folio-count"
                    >Folios restantes</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-badge>
          </li>
          <li
            class="global-nav__link-wrapper login-container d-flex menu-notif"
          >
            <TheMenuNotification />
          </li>
          <li
            class="global-nav__link-wrapper login-container d-flex menu-account"
          >
            <TheMenuAccount />
          </li>
        </ul>
      </div>
    </nav>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";
import ParcelUtils from "@/assets/js/parcel_utils.js";
export default {
  components: {
    // MpmichPolarLight: () => import("@/libs/MpmichPolarLight.vue"),
    // MpmLogoPolarLight: () => import("@/libs/MpmLogoPolarLight.vue"),
    // ----- Menu cuenta
    TheMenuAccount: () => import("./TheMenuAccount.vue"),
    TheMenuNotification: () => import("./TheMenuNotification.vue"),
    TheSearch: () => import("./TheSearch.vue"),
  },
  data: () => ({
    parcelCls: new ParcelUtils(),
    awake: 0,
    posNavbarCovid: 584,
    posNavbarNosotros: 2184,
    posNavbarPasos: 3044,
    posNavbarServicios: 4144,
    posNavbarPreguntas: 4744,
    posPortalReady: 5644,
    isMobile: false,
  }),
  computed: {
    dialogSignin: {
      get() {
        // console.log(this.$store.state.dialogSignin);
        return this.$store.state.dialogSignin;
      },
      set(value) {
        this.$store.commit("SET_DIALOG_SIGNIN", value);
      },
    },
    options() {
      return this.$store.state.jaeger.options;
    },
    activeIndex: {
      get() {
        return this.$store.state.jaeger.activeIndex;
      },
      set(val) {
        this.$store.dispatch("axnJaegerActiveIndex", val);
      },
    },
  },
  watch: {},
  // Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });

    console.log("mobile " + this.$vuetify.breakpoint.mobile);
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  destroyed() {},
  methods: {
    ...mapActions([
      "jaeger",
      [
        "axnJaegerAddTab",
        "axnJaegerDeleteTab",
        "axnJaegerActiveIndex",
        "axnJaegerRemoveTab",
      ],
    ]),
    navClickHandler(ev) {
      // console.log(ev.target);
      this.navRemoveAttActivated(ev);
    },
    signin() {
      this.$router.push({ path: "/signin" });
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
  // end Hooks
};
</script>

<style lang="scss" >
</style>
