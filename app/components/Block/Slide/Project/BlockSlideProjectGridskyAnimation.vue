<script setup lang="ts">
const iframeLoaded = ref(false)

function onIframeLoad() {
  iframeLoaded.value = true
}
</script>

<template>
  <BlockHeroCard
      border color="grey-darken-4"
  >
    <v-lazy>
      <iframe
          src="/gsky/loading/"
          @load="onIframeLoad"
      />
    </v-lazy>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
.dx-block-hero__card {
  overflow: hidden;
  align-content: inherit;

  .v-lazy {
    min-height: 100%;
  }

  iframe {
    border: 0;
    width: 102%;
    height: 122%;
    aspect-ratio: 1;
    margin: -10% 0 0 -1px;
    opacity: 0.9;
    pointer-events: none;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: linear-gradient(to top, rgba(5, 5, 5, 0.50), rgba(35, 35, 35, 0.15));
  }
}
</style>