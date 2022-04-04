<template>
  <v-card
    class="card-search nobackground noborder nobordercolor noshadow nopadding"
    width="500"
    max-width="500"
  >
    <v-container fluid align-self-center class="card-search__container z-50">
      <div class="wrapper card-search__wrapper" id="card-search-wrapper-si">
        <div class="parcel-input-data skrull card-search__input-data">
          <v-autocomplete
            solo
            color="primary"
            class="parcel-input"
            flat
            hide-no-data
            hide-details
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            item-text="Description"
            item-value="API"
            label="Public APIs"
            placeholder="Start typing to Search"
          >
          </v-autocomplete>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "",
  middleware: "",
  props: {},
  components: {},
  data: () => ({
    descriptionLimit: 40,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),
  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map((key) => {
        return {
          key,
          value: this.model[key] || "n/a",
        };
      });
    },
    items() {
      return this.entries.map((entry) => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
      });
    },
  },
  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://api.publicapis.org/entries")
        .then((res) => res.json())
        .then((res) => {
          const { count, entries } = res;
          this.count = count;
          this.entries = entries;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
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

<style lang="scss">
</style>
