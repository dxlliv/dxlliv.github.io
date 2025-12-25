<script setup lang="ts">
defineProps<{
  count: number
}>()
</script>

<template>
  <div class="dx-social-post-action">
    <div
        class="font-weight-bold"
        v-text="count"
    />
  </div>
</template>

<style scoped lang="scss">
.dx-social-post-action {
  height: 24px;

  .font-weight-bold {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 17px;
  }
}
</style>