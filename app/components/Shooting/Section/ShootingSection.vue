<script setup lang="ts">
defineProps<{
  dark?: boolean
}>()
</script>

<template>
  <div :class="['dx-section', {'dx-section--dark': dark}]">
    <div class="dx-section__inner">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dx-section {
  position: relative;
  display: grid;
  align-content: center;
  width: 100%;
  min-height: 100%;
}
</style>