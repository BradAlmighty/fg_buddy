<template>
  <v-card class="ma-2" outlined>
    <v-card-title
      >{{ currentSpell?.name }}
      <span :class="castCostClass"
        >({{ spellCastModifier }})</span
      ></v-card-title
    >
    <v-card-subtitle
      >{{ spellSchool }} - {{ currentSpell?.category }}</v-card-subtitle
    >
    <v-expansion-panels>
      <v-expansion-panel
        title="Spell Details"
        :text="currentSpell?.description"
      >
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useSpellStore } from "@/stores/spellStore";
import { useWizardStore, WizardSchools, WizardSchoolCode } from "@/stores/wizardStore";

const spellStore = useSpellStore();
const wizardStore = useWizardStore();
const props = defineProps({
  spell: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
});

const castCostClass = ref("");

const currentSpell = computed(() => {
  return spellStore.getSpellById(props.spell);
});

const currentSchool = computed(() => {
  return wizardStore.getWizardById(props.school);
});

const spellSchool = computed(() => {
  if (currentSpell.value && currentSpell.value.school) {
    return WizardSchools[currentSpell.value.school as WizardSchoolCode];
  }
  return "";
});

const spellCastModifier = computed(() => {
  if (!currentSchool.value || !currentSpell.value) {
    castCostClass.value = "";
    return "";
  }
  const schoolCode = currentSpell.value.school as WizardSchoolCode;
  if (currentSchool.value.aligned.includes(schoolCode)) {
    castCostClass.value = "cast-color-aligned";
    return currentSpell.value.baseCast + 2;
  } else if (currentSchool.value.neutral.includes(schoolCode)) {
    castCostClass.value = "cast-color-neutral";
    return currentSpell.value.baseCast + 4;
  } else if (currentSchool.value.opposed === schoolCode) {
    castCostClass.value = "cast-color-opposed";
    return currentSpell.value.baseCast + 6;
  } else {
    castCostClass.value = "";
    return currentSpell.value.baseCast;
  }
});
</script>

<style scoped>
.cast-color-aligned {
  color: #4caf50; /* Green color for the cast modifier */
}
.cast-color-neutral {
  color: #2196f3; /* Blue color for the cast modifier */
}
.cast-color-opposed {
  color: #f44336; /* Red color for the cast modifier */
}
</style>
