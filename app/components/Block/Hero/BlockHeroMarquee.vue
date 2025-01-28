<script setup lang="ts">
defineProps<{
  text: string
  color: string
}>()
</script>

<template>
  <AppMarquee
      :text="text"
      :color="color"
  />
</template>

<style scoped lang="scss">
.dx-marquee {
  max-width: 220px;
}
</style>