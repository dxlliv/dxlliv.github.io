<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <BlockHeroCard color="grey-darken-3">
    <v-img :src="image" cover />

    <slot />
  </BlockHeroCard>
</template>