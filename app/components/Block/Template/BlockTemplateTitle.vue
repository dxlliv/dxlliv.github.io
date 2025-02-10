<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <BlockHeroCard>

    <h3 class="text-h4 font-weight-bold" v-text="title" />
    <p v-text="subtitle" />

  </BlockHeroCard>
</template>

<style scoped lang="scss">

</style>