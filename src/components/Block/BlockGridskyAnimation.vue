<script setup lang="ts">
const lazyReset = ref(false)
const iframeLoaded = ref(false)

function onIframeLoad() {
  iframeLoaded.value = true
}

function onIntersect(isIntersecting: boolean) {
  if (!isIntersecting) {
    lazyReset.value = true
    iframeLoaded.value = false

    setTimeout(() => {
      lazyReset.value = false
    }, 50)
  }
}
</script>

<template>
  <BlockHeroCard
      border class="bg-grey-darken-3"
      v-intersect="onIntersect"
  >
    <v-lazy v-if="!lazyReset">
      <iframe
          v-show="iframeLoaded"
          src="https://gridsky.app/loading"
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
    height: 102%;
    margin: -1px 0 0 -1px;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: linear-gradient(to top, rgba(5, 5, 5, 0.50), rgba(35, 35, 35, 0.25));
  }
}
</style>