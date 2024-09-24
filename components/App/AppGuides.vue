<script setup lang="ts">
import Guides from "vue3-guides";

// add body class for extra v-application padding
document.body.classList.add('tool-guides--enabled')

const guideX = ref()
const guideY = ref()

window.addEventListener("resize", () => {
  if (guideX.value) guideX.value.resize();
  if (guideY.value) guideY.value.resize();
})
</script>

<template>
  <div class="dxlliv-layout-guides">
    <Guides
        ref="guideX" type="horizontal"
        oncontextmenu="return false"
    />
    <Guides
        ref="guideY" type="vertical"
        oncontextmenu="return false"
    />
  </div>
</template>

<style lang="scss">
body {
  @media (min-width: 700px) and (min-height: 499px) {
    padding: 36px 0 0 36px;

    .v-application {
      height: calc(100dvh - 36px) !important;
      margin-top: 36px;
      margin-left: 36px;
    }
  }
}
</style>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

:global(.scena-guides-guide) {
  background: rgba(0, 0, 0, 0.25) !important;
}

.dxlliv-layout-guides {
  z-index: 1;

  &:before {
    background: #333333;
    position: fixed;
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    content: '';
    z-index: 99;
  }

  .scena-guides-manager {
    canvas {
      vertical-align: top;
    }

    &.scena-guides-horizontal {
      position: fixed;
      top: 0;
      left: 36px;
      height: 36px;
      width: 100vw;
    }
    &.scena-guides-vertical {
      position: fixed;
      top: 36px;
      left: 0;
      width: 36px;
      height: 100%;
    }
  }
}
</style>