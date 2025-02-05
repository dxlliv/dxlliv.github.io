<template>
  <v-layout>

    <SliderHorizontal :key="$route.name">
      <slot/>
    </SliderHorizontal>

  </v-layout>

  <Footer v-if="$vuetify.display.height > 660"/>
  <Toolbar/>

</template>

<style scoped lang="scss">
.v-layout {
  display: grid;
  height: calc(74dvh - var(--dx-toolbar-height));
  align-items: center;
}
</style>