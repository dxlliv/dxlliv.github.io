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

    @media(max-width: 1350px) and (min-width: 1280px) {
      font-size: 16.5px;
    }
  }
}
</style>