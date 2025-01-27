<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>

<template>
  <BlockHeroCard color="grey-darken-4">
    <iframe :src="src" />
  </BlockHeroCard>
</template>

<style scoped lang="scss">
iframe {
  width: 100%;
  height: 100%;
  border: 0;
  aspect-ratio: 1;
}
</style>