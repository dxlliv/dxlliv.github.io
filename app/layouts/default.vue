<template>
  <v-layout>

    <SliderHorizontal>
      <slot/>
    </SliderHorizontal>

  </v-layout>

  <Footer/>

</template>

<style scoped lang="scss">
.v-layout {
  display: grid;
  height: calc(74dvh - var(--dx-toolbar-height));
  align-items: center;
}
</style>