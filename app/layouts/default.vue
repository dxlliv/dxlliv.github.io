<template>
  <v-layout>

    <SliderHorizontal :key="$route.name">
      <slot/>
    </SliderHorizontal>

  </v-layout>

  <Footer/>
  <Toolbar/>

</template>

<style scoped lang="scss">
.v-layout {
  display: grid;
  height: calc(74dvh - var(--dx-toolbar-height));
  align-items: center;
}
</style>