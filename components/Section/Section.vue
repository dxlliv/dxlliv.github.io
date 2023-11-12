<script setup lang="ts">
defineProps<{
  height?: string
  dark?: boolean
}>()
</script>

<template>
  <div
      :class="['dxlliv-section', {'dxlliv-section--dark': dark}]"
      ref="sectionElement"
  >
    <div class="dxlliv-section__inner">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dxlliv-section {
  position: relative;
  display: grid;
  align-content: center;
  width: 100%;
  min-height: v-bind(height);
}
</style>