<script setup lang="ts">

</script>

<template>
  <div class="dx-social-post-action">
    <div>
      <slot name="icon"/>
    </div>
    <div
        v-if="$slots.count"
        class="flex-grow-0 font-weight-bold pl-1"
        align-self="center"
    >
      <slot name="count"/>
    </div>
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.dx-social-post-action {
  width: max-content;
  padding: 8px;

  :deep(.iconify) {
    vertical-align: middle;
    color: white;
  }

  &--vertical {
    .v-row {
      flex-direction: column;

      .font-weight-bold {
        margin-left: 1px;
      }
    }
  }
}
</style>
