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
  <div class="dx-layout-guides">
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
  padding: 36px 0 0 36px;

  .v-application {
    height: calc(100dvh - 36px) !important;
    margin-top: 36px;
    margin-left: 36px;
  }

  @media(max-width: 479px) {
    padding: 30px 0 0 30px;

    .v-application {
      height: calc(100dvh - 30px) !important;
      margin-top: 30px;
      margin-left: 30px;
    }
  }
}
</style>

<style scoped lang="scss">
@import "vuetify/lib/styles/settings/_variables";

:global(.scena-guides-guide) {
  background: rgba(0, 0, 0, 0.25) !important;
}

.dx-layout-guides {
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

    @media(max-width: 479px) {
      width: 30px;
      height: 30px;
    }
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

      @media(max-width: 479px) {
        top: -5px;
        left: 30px;
      }
    }
    &.scena-guides-vertical {
      position: fixed;
      top: 36px;
      left: 0;
      width: 36px;
      height: 100%;

      @media(max-width: 479px) {
        top: 30px;
        left: -5px;
      }
    }
  }
}
</style>