<template>
  <BlockHeroCard to="/">

    <AppLogo />

    <slot />

  </BlockHeroCard>
</template>

<style scoped lang="scss">
:deep(.dx-logo) {
  font-size: 100px !important;
  height: 100px;
  line-height: 120px;
  transition: transform 0.1s ease;
  transform: scale(1);
  will-change: transform;
}

.dx-block-hero__card:active {
  .dx-logo {
    transform: scale(1.05);
  }
}
</style>