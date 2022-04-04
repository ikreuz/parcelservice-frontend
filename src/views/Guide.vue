<template>
  <v-row class="mt-12 mx-4">
    <v-col>
      <v-subheader>Guides</v-subheader>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Guides",
  metaInfo: {
    title: "Guides",
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
