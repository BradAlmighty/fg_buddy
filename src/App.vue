<template>
  <v-app>
    <Nav />
    <v-main no-gutters>
      <v-container fluid class="main-background">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Nav from "@/components/Nav.vue";
</script>

<style scoped>
.main-background {
  background-image: url("@/assets/FG_BG.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0; /* Light gray background */
}
</style>
