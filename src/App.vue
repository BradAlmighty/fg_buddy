<template>
  <v-app>
    <Nav />
    <v-main>
      <v-container fluid>
      <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
</script>

<style scoped>
</style>
