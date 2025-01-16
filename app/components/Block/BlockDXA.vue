<template>
  <BlockHeroCard
    :slide-next="false"
  >

    <AppLogo name="archive"/>

    <slot/>

  </BlockHeroCard>
</template>

<style scoped lang="scss">
:deep(.dx-logo) {
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