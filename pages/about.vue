<script setup lang="ts">
useHead({
  title: 'About Me'
})
</script>

<template>
  <v-row no-gutters>
    <v-col align-self="center" class="text-center">
      <v-sheet width="180px" max-width="80vw" class="mx-auto">
        <v-progress-linear indeterminate />

        <div class="text-overline mt-2 text-grey-lighten-1">
          Work in progress
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>