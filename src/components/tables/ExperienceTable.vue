<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Experience</th>
        <th class="text-left">Achievement</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rulesStore.getExperienceTableData">
        <td>+{{ item.experience }}</td>
        <td>{{ item.achievement }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { useRulesReferenceStore } from "@/stores/rulesReferenceStore";

const rulesStore = useRulesReferenceStore();
</script>
