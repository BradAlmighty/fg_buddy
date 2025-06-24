<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Die Roll</th>
        <th class="text-left">Result</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rulesStore.getSpellcasterSurvivalTableData">
        <td>{{ item.roll }}</td>
        <td>
          <strong>{{ item.result }}</strong> - {{ item.description }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { useRulesReferenceStore } from "@/stores/rulesReferenceStore";

const rulesStore = useRulesReferenceStore();
</script>
