<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <BlockHeroCard color="grey-darken-4">
    <BlockTemplateImageInner
        :image="image"
    />

    <slot />
  </BlockHeroCard>
</template>