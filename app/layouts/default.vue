<template>
  <v-layout>

    <div class="dx-slider">
      <SliderHorizontal :key="$route.name">
        <slot/>
      </SliderHorizontal>
    </div>

    <Footer v-if="$vuetify.display.height > 660"/>
    <Toolbar/>

  </v-layout>
</template>

<style scoped lang="scss">
.v-layout {
  display: grid;
  grid-template-rows: calc(74dvh - var(--dx-toolbar-height)) 26vh var(--dx-toolbar-height);

  @media(max-height: 600px) {
    grid-template-rows: calc(100dvh - var(--dx-toolbar-height)) var(--dx-toolbar-height);
  }
}

.dx-slider {
  display: grid;
  align-items: center;
  height: 100%;
}
</style>