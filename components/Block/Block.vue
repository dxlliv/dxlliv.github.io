<script setup lang="ts">
withDefaults(defineProps<{
  scroll?: boolean
}>(), {
  scroll: true
})
</script>

<template>
  <div class="dxlliv-block">
    <BlockScroll scroll class="dxlliv-block__inner">
      <slot/>
    </BlockScroll>
  </div>
</template>

<style scoped lang="scss">
.dxlliv-block {
  position: relative;
  display: grid;
  align-content: center;
  margin: 0 auto;
  max-height: 100%;

  @media(max-height: 800px) {
    padding: 80px 0;
  }

  @media(min-width: 1280px) {
    min-height: 90vh;
  }

  &__inner {
    position: relative;

    @media(min-width: 900px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1150px;
    }

    @media(max-width: 560px) {
      width: 150%;
      padding: 0 24px;
      margin-left: -25%;
      font-size: 3.3vw;

      :deep(.v-avatar) {
        width: 32vw !important;
        height: 32vw !important;
      }

      :deep(.v-icon) {
        font-size: 4vw !important;
        width: inherit !important;
        height: inherit !important;
      }

      :deep(.v-icon--big) {
        font-size: 24vw !important;
        width: inherit !important;
        height: inherit !important;
      }

      :deep(svg) {
        width: 4vw !important;
        height: 4vw !important;
      }

      :deep(.text-h6) {
        font-size: 3.6vw !important;
        line-height: 4vw;
      }

      :deep(p) {
        font-size: 3vw !important;
      }

      :deep(.v-btn) {
        font-size: 3.3vw;
        min-width: 9vw !important;
        height: 9vw !important;
      }
    }
  }
}
</style>