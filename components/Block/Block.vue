<script setup lang="ts">
defineProps<{
  dark?: boolean
}>()
</script>

<template>
  <div :class="['dx-block', dark ? 'dx-block--dark' : '']">
    <div class="dx-block__inner">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dx-block {
  position: relative;
  display: grid;
  align-content: center;
  margin: 0 auto;
  width: 100%;
  max-height: 100%;

  &--dark {
    :deep(p) {
      color: #ffffffaa !important;
    }
  }

  @media(min-width: 1699px) {
    zoom: 1.2;
  }

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
    }

    @media(max-width: 1279px) and (max-height: 680px) {
      :deep(.v-avatar) {
        display: none;
      }
    }
  }
}
</style>