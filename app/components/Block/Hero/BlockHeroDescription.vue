<template>
  <div class="mt-7 text-grey-darken-1">
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  :deep(p) {
    @media(min-width: 600px) {
      line-height: 28px;
    }
  }
}
</style>