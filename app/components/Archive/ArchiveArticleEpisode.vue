<script setup lang="ts">
defineProps<{
  article: any
  label?: boolean
}>()
</script>

<template>
  <span>
    <span v-if="label">Episode</span>
    #{{article.episode}}
  </span>
</template>

<style scoped lang="scss">

</style>