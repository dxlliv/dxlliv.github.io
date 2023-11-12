<template>
  <main class="dxlliv-container">
    <slot />
  </main>

  <Footer />
</template>

<style scoped lang="scss">
.dxlliv-container {
  min-height: 90vh;
  overflow: hidden;

  @media(max-height: 415px) {
    height: inherit;
  }
}
</style>