<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="text-overline mb-n2" v-text="title" />
</template>