<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <BlockHeroCard>

    <h3 class="text-h4" v-text="title" />
    <p v-text="subtitle" />

  </BlockHeroCard>
</template>

<style scoped lang="scss">

</style>