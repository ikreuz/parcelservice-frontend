<template>
  <v-menu
    nudge-top="-3"
    offset-y
    origin="center center"
    transition="scroll-y-transition"
    :close-on-content-click="false"
    :nudge-width="300"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        dark
        color="anderson"
        v-bind="attrs"
        v-on="on"
        rounded
        elevation="0"
        class="
          parcel-btn parcel-border-top-radius parcel-border-bottom-radius
          parcel-btn__notification
        "
        @click.prevent="mastheadNotifications"
        ><i class="mdi mdi-bell"></i
      ></v-btn>
    </template>
    <v-card>
      <v-list class="parcel-toolbar-notif__list">
        <v-list-item
          class="parcel-toolbar-notif__list-item parcel-toolbar-notif__header"
        >
          <v-list-item-content>
            <v-list-item-title class="parcel-toolbar-notif__title"
              >Notificaciones</v-list-item-title
            >
          </v-list-item-content>

          <v-list-item-action class="parcel-toolbar-notif__list-item-action">
            <v-btn icon color="anderson">
              <v-icon class="parcel-toolbar-notif__icon">mdi-cog</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-list class="parcel-toolbar-notif__list">
        <v-list-item
          class="parcel-toolbar-notif__list-item parcel-toolbar-notif__body"
        >
          <v-list-item-title
            ><v-icon color="anderson" class="parcel-toolbar-notif__icon mx-4"
              >mdi-bell</v-icon
            >Notificaciones</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      itemsMenuNotification: [
        { title: "Notificacion 1", icon: "mdi-bell" },
        { title: "Notificacion 2", icon: "mdi-bell" },
        { title: "Notificacion 3", icon: "mdi-bell" },
      ],
    };
  },
  methods: {
    mastheadNotifications(ev) {
      let button = document.querySelector(".parcel-btn__notification");
      console.log(button);
      console.log(ev);
    },
  },
};
</script>

<style lang="scss">
</style>
