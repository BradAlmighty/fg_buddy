<template>
    <v-container>
        <v-card>
            <v-card-title>
                Settings
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-switch
                        v-model="darkMode"
                        label="Dark Mode"
                    ></v-switch>
                    <v-text-field
                        v-model="username"
                        label="Username"
                    ></v-text-field>
                    <v-select
                        v-model="language"
                        :items="languages"
                        label="Language"
                    ></v-select>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="saveSettings">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'

const darkMode = ref(false)
const username = ref('')
const language = ref('English')
const languages = ['English', 'Spanish', 'French', 'German']

function saveSettings() {
    // Placeholder for save logic
    console.log({
        darkMode: darkMode.value,
        username: username.value,
        language: language.value
    })
}
</script>