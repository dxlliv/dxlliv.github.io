<script setup lang="ts">
defineProps<{
  noMargin?: boolean
}>()
</script>

<template>
  <div :class="[{'mt-7': !noMargin}, 'text-grey-darken-1']">
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  position: relative;
}
</style>