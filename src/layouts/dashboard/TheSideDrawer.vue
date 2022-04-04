<template>
  <v-navigation-drawer
    id="side-drawer-si"
    :mini-variant="miniVariant"
    mini-variant-width="56"
    permanent
  >
    <v-list nav dense class="side-drawer__list" router>
      <v-btn
        id="side-btn-si"
        rounded
        elevation="0"
        class="
          parcel-btn
          mpm-border-top-radius mpm-border-bottom-radius
          parcel-btn--w-40
          mb-2
        "
        color="bunker darken-5"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-if="miniVariant">mdi mdi-arrow-expand-right</v-icon>
        <v-icon v-else>mdi mdi-arrow-expand-left</v-icon>
      </v-btn>
      <v-divider></v-divider>
      <v-list-item
        link
        class="side-drawer__list-item scrolled"
        v-for="menu in menuScope"
        :to="menu.route"
        :index="menu.route"
        :key="menu.route"
        :aria-label="menu.aria"
      >
        <v-list-item-icon class="side-drawer__list-item-icon">
          <v-icon class="sd-icon">{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="side-drawer__list-item-title">
          {{ menu.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list
      nav
      dense
      class="side-drawer__list"
      :default-active="$route.path"
      router
    >
      <v-list-item
        link
        class="side-drawer__list-item"
        v-for="menu in menuScopeSettings"
        :to="menu.route"
        :index="menu.route"
        :key="menu.route"
        :aria-label="menu.aria"
        :color="activeIndex ? 'primary' : 'bunker'"
        @click="close"
      >
        <v-list-item-icon class="side-drawer__list-item-icon">
          <v-icon class="sd-icon">{{ menu.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="side-drawer__list-item-title">
          {{ menu.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
import { mapActions } from "vuex";
import ParcelUtils from "@/assets/js/parcel_utils.js";
export default {
  name: "",
  middleware: "",
  props: {},
  components: {},
  data: () => ({
    parcelCls: new ParcelUtils(),
    drawer: true,
    mini: true,
    clipped: false,
    menuScope: [
      {
        route: "/",
        name: "Home",
        icon: "mdi-home-account",
        aria: "home",
      },
      {
        route: "/employee",
        name: "Empoyees",
        icon: "mdi-newspaper-plus",
        aria: "Employees",
      },
      {
        route: "/customer",
        name: "Customers",
        icon: "mdi-clipboard-account-outline",
        aria: "Customers",
      },
    ],
    menuScopeSettings: [
      {
        route: "/setting",
        name: "Configuración",
        icon: "mdi-cog",
        aria: "Configuración",
      },
    ],
  }),
  computed: {
    miniVariant: {
      get() {
        return this.$store.state.sideDrawer;
      },
      set(value) {
        this.$store.dispatch("axnSideDrawer", value);
      },
    },
  },
  watch: {},
  // Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    document.addEventListener("click", this.close);
    this.parcelCls.addClass(document.body, "page-the-mini-drawer");
    this.$store.dispatch("axnJaegerAddTab", { route: "/home", name: "Home" });
    this.$store.dispatch("axnJaegerActiveIndex", "/home");
    // if (compareRouter(this.$route, this.activeIndex))
    //   this.$router.push("/home");
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  destroyed() {},
  methods: {
    ...mapActions([]),
    /**
     * Error: NavigationDuplicated Navigating to current location
     * https://stackoverflow.com/questions/57837758/navigationduplicated-navigating-to-current-location-search-is-not-allowed
     */
    // compareRouter(path) {
    //   return this.$route.path !== path ? true : false;
    // },
    close(e) {
      if (!this.$el.contains(e.target)) {
        // this.drawer = !this.drawer;
        this.miniVariant = true;
      }
    },
  },
  // end Hooks
};
</script>

<style lang="scss" >
</style>
