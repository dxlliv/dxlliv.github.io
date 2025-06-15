<script setup lang="ts">
useSeoMeta({
  title: "The original dxlliv's desktop",
  ogImage: '/logo.webp',
  twitterCard: 'summary',
})

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <v-main>
    <div>
      <iframe src="https://dxlliv-os.pages.dev/" />
    </div>
  </v-main>
</template>

<style scoped lang="scss">
.v-main {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  margin: 0 auto;
  overflow: hidden;

  div {
    position: relative;
    width: 100%;
    height: 100dvh;
    aspect-ratio: 1280 / 768;
    max-height: 768px;
    zoom: 0.80;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    transform: scale(0.98);
    clip-path: ellipse(96% 92% at 50% 50%);
    overflow: hidden;
  }

  &:before {
    background-image: url('/desktop/crt.png');
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    content: "";
    background-repeat: no-repeat;
    background-size: 100% 100%;
    pointer-events: none;
  }

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }
}
</style>