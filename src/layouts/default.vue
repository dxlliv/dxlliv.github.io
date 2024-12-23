<template>
  <div class="flex">
    <v-layout>

      <SliderHorizontal>

        <slot />

      </SliderHorizontal>

    </v-layout>

    <Footer />

  </div>
</template>

<style scoped lang="scss">
.flex {
  background: linear-gradient(to top, #111, #000);
  height: 100%;

  .v-layout {
    display: grid;
    height: 70%;
    align-items: center;
  }
}
</style>