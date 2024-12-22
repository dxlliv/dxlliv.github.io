<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <v-card-text class="pa-6">

    <div
        class="text-overline mt-n2 mb-2"
        v-text="title"
    />

    <v-card rounded flat class="bg-grey-lighten-4">
      <v-list density="compact" class="bg-transparent px-2 text-subtitle-1">
        <slot />
      </v-list>
    </v-card>

  </v-card-text>
</template>