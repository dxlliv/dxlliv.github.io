<script setup lang="ts">
defineProps<{
  video: string
}>()
</script>

<template>
  <BlockHeroCard color="grey-darken-4">
    <template #default="{ isIntersected }">

      <BlockTemplateVideoInner
          v-if="isIntersected"
          :video="video"
      />

    </template>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
:deep(.v-card__overlay) {
  display: none;
}
</style>