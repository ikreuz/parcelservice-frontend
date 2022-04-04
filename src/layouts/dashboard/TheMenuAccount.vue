<template>
  <v-menu
    offset-y
    left
    nudge-top="-9"
    origin="center center"
    transition="scroll-y-transition"
    :close-on-content-click="true"
    max-width="300"
    width="300"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        dark
        color="anderson"
        v-bind="attrs"
        v-on="on"
        role="button"
        aria-label="settings"
        class="px-0 px-md-2"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item link class="text-left">
        <v-list-item-content>
          <v-list-item-title>
            <v-list-item-avatar>
              <v-icon>mdi-account-settings</v-icon>
            </v-list-item-avatar>
            {{ matchGuide.cliente_origen }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense router>
      <v-list-item link class="text-left">
        <v-list-item-icon>
          <v-icon>mdi-id-card</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          Mich ID:
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <span class="text-truncate ml-2" v-bind="attrs" v-on="on">{{
                matchGuide.cliente_origen_rfc
              }}</span>
            </template>
            <span>{{ matchGuide.cliente_origen_rfc }}</span>
          </v-tooltip>
        </v-list-item-title>
      </v-list-item>
      <v-list-item link to="/setting" class="text-left">
        <v-list-item-icon>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Perfil</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/login" @click="signOut" class="text-left">
        <v-list-item-icon>
          <v-icon>mdi-logout-variant</v-icon>
        </v-list-item-icon>
        <v-list-item-title> Salir</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
/** importacion de funcion para hacer llamadas a la api/json */
// import srvAxios from "@/services/srv_axios.js";
import jsCookie from "js-cookie";
export default {
  components: {},
  props: {},
  data: () => ({
    itemsStudio: [
      { row: 1, title: "Mpm ID", icon: "mdi-id-card" },
      { row: 2, title: "Profile", icon: "mdi-account-outline" },
      { row: 3, title: "Log out", icon: "mdi-logout-variant" },
    ],
    /** */
    customerProfile: {},
    matchInvoice: {},
    matchGuide: {},
    matchClient: {},
  }),

  computed: {},
  watch: {
    "$store.state.customerProfile": function (variable) {
      this.customerProfile = variable;
      console.log(
        "__[: ToolbarMenuAccount/watch :customerProfile " +
          JSON.stringify(variable)
      );
    },
  },
  // Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  async mounted() {
    // console.log(
    //   "__[view] guias:user " + JSON.stringify(this.$store.state.user)
    // );

    // console.log(
    //   "__[view] guias:auth " + JSON.stringify(this.$store.state.auth)
    // );

    // console.log(
    //   "__[view] Dashboard/matchClient:: " +
    //     JSON.stringify(this.$store.state.matchClient)
    // );
    // console.log(
    //   "__[view] Dashboard/matchGuide:: " +
    //     JSON.stringify(this.$store.state.matchGuide)
    // );
    // console.log(
    //   "__[view] Dashboard/matchInvoice:: " +
    //     JSON.stringify(this.$store.state.matchInvoice)
    // );
    // console.log(
    //   "__[view] Dashboard/customerProfile:: " +
    //     JSON.stringify(this.$store.state.customerProfile)
    // );

    this.customerProfile = this.$store.state.customerProfile;
    this.matchClient = this.$store.state.matchClient;
    this.matchGuide = this.$store.state.matchGuide;
    this.matchInvoice = this.$store.state.matchInvoice;

    console.log(
      "__[: toolbarMenuAccount/mounted :customerProfile " +
        JSON.stringify(this.customerProfile)
    );

    document.addEventListener("click", this.close);
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    // ...mapActions(["drawerAccount", "actionAuthenticated"]),
    signOut() {
      this.$store.dispatch("actAuthenticated", false);
      this.$store.commit("SET_AUTH", null); // mutating to store for client rendering
      jsCookie.remove("access_token");
      jsCookie.remove("mpm_session");
      localStorage.removeItem("_Secure");
      localStorage.removeItem("secure_jwt");
      localStorage.removeItem("logged_in");
      localStorage.removeItem("vuex");
      localStorage.removeItem("_grecaptcha");
      console.log(
        "__[: toolbarMenuAccount/signOut() :auth " + this.$store.state.auth
      );

      this.$router.push("/login");
    },
  },
};
</script>
