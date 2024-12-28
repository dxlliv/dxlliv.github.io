<template>
  <div class="dx-block-hero">
    <div class="dx-block-hero__inner">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dx-block-hero {
  position: relative;
  display: grid;
  align-items: center;
  aspect-ratio: 1;
  overflow: hidden;
}
</style>