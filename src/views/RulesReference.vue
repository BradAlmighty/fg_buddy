<template>
  <v-expansion-panels>
    <v-expansion-panel title="Spell Failure" class="ma-2">
      <v-expansion-panel-text>
        <SpellFailureTable />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel title="Soldier Survival Table" class="ma-2">
      <v-expansion-panel-text>
        <SoldierSurvivalTable />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel title="Spellcaster Survival Table" class="ma-2">
      <v-expansion-panel-text>
        <SpellcasterSurvivalTable />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel title="Permanent Injury Table" class="ma-2">
      <v-expansion-panel-text>
        <PermanentInjuryTable />
      </v-expansion-panel-text>
    </v-expansion-panel>
    <v-expansion-panel title="Experience Table" class="ma-2">
      <v-expansion-panel-text>
        <ExperienceTable />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import SpellFailureTable from "@/components/tables/SpellFailureTable.vue";
import SoldierSurvivalTable from "@/components/tables/SoldierSurvivalTable.vue";
import SpellcasterSurvivalTable from "@/components/tables/SpellcasterSurvivalTable.vue";
import PermanentInjuryTable from "@/components/tables/PermanentInjuryTable.vue";
import ExperienceTable from "@/components/tables/ExperienceTable.vue";
</script>
<style scoped>
/* Add any specific styles for the ItemReference view here */
</style>
