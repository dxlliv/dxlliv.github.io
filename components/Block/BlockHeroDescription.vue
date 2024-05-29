<template>
  <div :class="[
      'mt-4 mb-7 text-grey-darken-1',
    ]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

div {
  :deep(p) {
    @media(min-width: 600px) {
      line-height: 28px;
    }

    &:nth-child(1) {
      margin-top: 24px;
    }

    &:nth-child(2) {
      margin-top: 8px;

      @media #{map-get($display-breakpoints, 'xs')} {
        display: none;
      }
    }

    @media(max-width: 1350px) and (min-width: 1280px) {
      font-size: 16.5px;
    }
  }
}
</style>