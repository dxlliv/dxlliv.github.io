<template>
  <div class="flex">

    <v-layout>

      <SliderHorizontal>
        <slot />
      </SliderHorizontal>

    </v-layout>

    <Footer/>
    <Toolbar/>

  </div>
</template>

<style scoped lang="scss">
.flex {
  background: linear-gradient(to top, #111, #000);
  height: 100dvh;

  .v-layout {
    display: grid;
    height: calc(74dvh - var(--dx-toolbar-height) - 4px);
    align-items: center;
  }
}
</style>