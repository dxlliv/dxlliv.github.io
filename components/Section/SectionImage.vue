<script setup lang="ts">
defineProps<{
  height: string
  src: string
}>()
</script>

<template>
  <Section class="dxlliv-section-image">
    <v-parallax>
      <v-img
          width="100vw" :height="height" cover
          :src="src" alt=""
      >
        <BlockScroll scroll class="dxlliv-section-image__block">
          <div />
        </BlockScroll>
      </v-img>
    </v-parallax>
  </Section>
</template>

<style scoped lang="scss">
.dxlliv-section-image {
  height: v-bind('height');
  background: #202020;

  .v-parallax {
    position: static;
  }

  &__block {
    position: absolute !important;
    width: 500px;
    min-height: 30vh !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    div {
      width: 100%;
      height: 30vh;
    }
  }
}
</style>