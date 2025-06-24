<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Amount By Which Casting Roll Failed</th>
        <th class="text-left">Damage Taken By Spellcaster</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rulesStore.getSpellFailureTableData">
        <td>{{ item.failAmount }}</td>
        <td>{{ item.damageTaken }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { useRulesReferenceStore } from "@/stores/rulesReferenceStore";

const rulesStore = useRulesReferenceStore();
</script>
