<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" md="8" lg="6">
                <v-card>
                    <v-card-title class="headline">
                        Welcome to Frostgrave Buddy
                    </v-card-title>
                    <v-card-text>
                        <p>
                            This is your companion app for managing your Frostgrave games. Use the navigation to explore features and manage your warbands, spells, and campaigns.
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" to="/warband">
                            Get Started
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
// No script logic needed for static content
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>