<template>
  <BlockHeroCard>

    <AppLogo/>

  </BlockHeroCard>
</template>

<style scoped lang="scss">
:deep(.dx-logo) {
  font-size: 120px !important;
  height: 120px;
  line-height: 145px;
  transition: transform 0.1s ease;
}

.dx-block-hero__card:active {
  .dx-logo {
    transform: scale(1.05);
  }
}
</style>