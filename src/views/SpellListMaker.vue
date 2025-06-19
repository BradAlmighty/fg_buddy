<template>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <v-select
                    v-model="selectedWizard"
                    :items="wizardStore.getWizardSchools"
                    item-title="name"
                    item-value="id"
                    label="Select Wizard Type"
                    outlined
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-select
                    v-model="selectedSpells"
                    :items="filteredSpells"
                    item-title="name"
                    item-value="id"
                    label="Select Spells"
                    multiple
                    outlined
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="spell in selectedSpells" :key="spell.id" cols="12" md="4">
                <SpellCard :spell="spell" :school="selectedWizard"/>
            </v-col>
        </v-row>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useWizardStore } from '@/stores/wizardStore'
import { useSpellStore } from '@/stores/spellStore'
import SpellCard from '@/components/SpellCard.vue'

const wizardStore = useWizardStore()
const spellStore = useSpellStore()

const wizardTypes = computed(() => wizardStore.wizardTypes)
const spells = computed(() => spellStore.spells)

const selectedWizard = ref(null)
const selectedSpells = ref([])

const filteredSpells = computed(() => {
    if (!selectedWizard.value) return []
    return spells.value.filter(spell =>
        !spell.wizardTypeId || spell.wizardTypeId === selectedWizard.value
    )
})
</script>
