<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon
      varient="text"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Frostgrave Buddy</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app temporary left>
    <v-list>
      <v-list-item title="Menu"></v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="item in navItems"
        :key="item.title"
        :to="item.to"
        :prepend-icon="item.icon"
        :title="item.title"
        link
      >
      </v-list-item>

      <!-- <v-list-item title="Nest Test">
        <v-menu :open-on-focus="false" activator="parent" submenu>
          <v-list>
            <v-list-item title="Nested Test 1"></v-list-item>
            <v-list-item title="Nested Test 2"></v-list-item>
            <v-list-item title="Nested Test 3"></v-list-item>
          </v-list>
        </v-menu>
      </v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const navItems = [
  { title: "Home", icon: "home", to: "/" },
  // { title: "Warband Builder", icon: "mdi-account-group", to: "/warband" },
  { title: "Spells", icon: "mdi-book-open-variant", to: "/spells" },
  { title: "Items", icon: "mdi-sword", to: "/items" },
  { title: "Rules", icon: "mdi-map", to: "/rules" },
  // { title: "Settings", icon: "mdi-cog", to: "/settings" },
];
</script>

<style scoped>
/* Optional: Adjust drawer width for mobile */
.v-navigation-drawer {
  max-width: 260px;
}
</style>
