<template>
  <v-layout>

    <div class="dx-slider">
      <SliderHorizontal :key="$route.name">
        <slot/>
      </SliderHorizontal>
    </div>

    <Footer v-if="$vuetify.display.height > 660"/>
    <Toolbar v-if="$vuetify.display.height > 660"/>

  </v-layout>
</template>

<style scoped lang="scss">
.v-layout {
  $toolbarMobileSafeMarginBottom: 3vh;

  display: grid;
  grid-template-rows: calc(74dvh - var(--dx-toolbar-height)) 26vh var(--dx-toolbar-height);

  @media(max-width: 600px) {
    grid-template-rows: calc(74dvh - $toolbarMobileSafeMarginBottom - var(--dx-toolbar-height)) 26vh var(--dx-toolbar-height);
  }

  @media(max-height: 660px) {
    grid-template-rows: 100dvh;
  }
}

.dx-slider {
  display: grid;
  align-items: center;
  height: 100%;
}
</style>