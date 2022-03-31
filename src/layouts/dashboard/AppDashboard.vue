<template>
  <v-app>
    <v-app-bar app dense> </v-app-bar>
    <v-main id="" class="parcel-main">
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Dashboard",
  metaInfo: {
    title: "",
  },
  middleware: "auth",
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  watch: {},
  // Hooks
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {},

  // end Hooks
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/common/variables.scss";
</style>
