<script setup lang="ts">
import {useDateFormat} from "@vueuse/core";

const props = withDefaults(defineProps<{
  article: any
  format?: string
}>(), {
  format: 'DD MMM YYYY'
})

const formattedDate = computed(() => {
  return useDateFormat(props.article.created_at, props.format)
})
</script>

<template>
  <span>
    {{ formattedDate }}
  </span>
</template>

<style scoped lang="scss">

</style>