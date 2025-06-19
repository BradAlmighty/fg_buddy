<template>
    <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Frostgrave Buddy</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
        left
    >
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
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const navItems = [
    { title: 'Home', icon: 'mdi-home', to: '/' },
    { title: 'Warband Builder', icon: 'mdi-account-group', to: '/warband' },
    { title: 'Spells', icon: 'mdi-book-open-variant', to: '/spells' },
    { title: 'Items', icon: 'mdi-sword', to: '/items' },
    { title: 'Rules', icon: 'mdi-map', to: '/rules' },
    { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
]
</script>

<style scoped>
/* Optional: Adjust drawer width for mobile */
.v-navigation-drawer {
    max-width: 260px;
}
</style>