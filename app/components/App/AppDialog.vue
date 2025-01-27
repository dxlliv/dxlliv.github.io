<script setup lang="ts">
defineProps<{
  fullscreen?: boolean
}>()
</script>

<template>
  <v-bottom-sheet
      v-if="$vuetify.display.xs"
      activator="parent"
  >
    <v-card class="v-card--rounded-top">
      <slot />
    </v-card>
  </v-bottom-sheet>
  <v-dialog
      v-else
      :width="600"
      max-width="calc(100vw - 36px)"
      :fullscreen="fullscreen"
      transition="dialog-bottom-transition"
      activator="parent"
  >
    <v-card :rounded="!fullscreen">
      <slot />
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>