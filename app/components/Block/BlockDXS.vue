<template>
  <BlockHeroCard
    :slide-next="false"
  >

    <AppLogo name="shooting"/>

    <slot/>

    <BlockHeroBottomSheet>
      <BlockHeroBottomText>

        <a href="https://dxshooting.click" target="_blank">
          dxshooting.click
        </a>

      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

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