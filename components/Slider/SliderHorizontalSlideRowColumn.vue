<script setup lang="ts">
defineProps<{
  margin?: boolean
}>()
</script>

<template>
  <v-col :class="['dx-slider-horizontal__row-column', {'dx-slider-horizontal__row-column--margin': margin}]">
    <slot />
  </v-col>
</template>