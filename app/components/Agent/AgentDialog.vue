<script setup lang="ts">
defineProps<{
  fullscreen?: boolean
}>()

const dialog = ref(false)
</script>

<template>
  <v-dialog
      activator="parent"
      v-model="dialog"
      :width="600" max-width="calc(100vw - 36px)"
      :fullscreen="fullscreen"
      transition="dialog-bottom-transition"
  >
    <v-card :rounded="!fullscreen">

      <AgentForm/>

    </v-card>
  </v-dialog>
</template>