<template>
    <v-card class="ma-2" outlined>
        <v-card-title>{{ currentSpell.name }} ({{spellCastModifier}})</v-card-title>
        <v-card-subtitle>{{ currentSpell.school }}</v-card-subtitle>
        <v-card-text>
            <p><strong>Description:</strong> {{ currentSpell.description }}</p>
        </v-card-text>
    </v-card>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useSpellStore } from '@/stores/spellStore'
import { useWizardStore } from '@/stores/wizardStore'

const spellStore = useSpellStore()
const wizardStore = useWizardStore()
const props = defineProps({
    spell: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    }
})
const currentSpell = computed(() => {
    return spellStore.getSpellById(props.spell)
})

const currentSchool = computed(() => {
    return wizardStore.getWizardById(props.school)
})

const spellCastModifier = computed(() => {
if (currentSchool.value.aligned.includes(currentSpell.value.school)) {
    return currentSpell.value.baseCast + 2
} else if (currentSchool.value.neutral.includes(currentSpell.value.school)) {
    return currentSpell.value.baseCast + 4
} else if (currentSchool.value.opposed === currentSpell.value.school) {
    return currentSpell.value.baseCast + 6
} else {
    return currentSpell.value.baseCast  
}})
</script>

