<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-select
                    v-model="selectedWizardType"
                    :items="wizardTypes"
                    item-text="name"
                    item-value="id"
                    label="Select Wizard Type"
                    outlined
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="8">
                <v-select
                    v-model="selectedSpells"
                    :items="filteredSpells"
                    item-text="name"
                    item-value="id"
                    label="Select Spells"
                    multiple
                    chips
                    outlined
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWizardStore } from '@/stores/wizardStore' // Adjust path as needed
import { useSpellStore } from '@/stores/spellStore' // Adjust path as needed

const wizardStore = useWizardStore()
const spellStore = useSpellStore()

const wizardTypes = computed(() => wizardStore.wizardTypes)
const spells = computed(() => spellStore.spells)

const selectedWizardType = ref(null)
const selectedSpells = ref([])

const filteredSpells = computed(() => {
    if (!selectedWizardType.value) return []
    return spells.value.filter(spell =>
        !spell.wizardTypeId || spell.wizardTypeId === selectedWizardType.value
    )
})
</script>
