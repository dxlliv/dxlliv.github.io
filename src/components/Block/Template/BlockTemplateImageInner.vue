<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <v-img :src="image" cover />
</template>