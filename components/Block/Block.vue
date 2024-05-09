<template>
  <div class="dxlliv-block">
    <div class="dxlliv-block__inner">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dxlliv-block {
  position: relative;
  display: grid;
  align-content: center;
  margin: 0 auto;
  width: 100%;
  max-height: 100%;

  &__inner {
    position: relative;

    @media(max-width: 520px) {
      width: 100%;
      padding: 0 24px;
      margin-left: 0;
      box-sizing: border-box;
      font-size: 3.8vw;

      :deep(.v-avatar) {
        width: 32vw !important;
        height: 32vw !important;

        @media(max-width: 1279px) and (max-height: 680px) {
          display: none;
        }
      }

      :deep(.v-icon) {
        width: inherit !important;
        height: inherit !important;
      }

      :deep(.v-icon--big) {
        font-size: 32vw !important;
        width: inherit !important;
        height: inherit !important;
      }

      :deep(p) {
        text-wrap: pretty;
      }
    }

    @media(max-width: 560px) {
      padding: 0 12px;
    }

    @media(max-width: 440px) {
      font-size: 4.4vw;

      :deep(svg) {
        width: 4.5vw !important;
        height: 4.5vw !important;
      }

      :deep(.v-icon:not(.v-icon--big)) {
        font-size: 5.3vw !important;
      }
    }

    @media(max-width: 1279px) and (max-height: 680px) {
      :deep(.v-avatar) {
        display: none;
      }
    }
  }
}
</style>