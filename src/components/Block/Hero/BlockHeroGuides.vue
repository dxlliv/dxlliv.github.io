<script setup lang="ts">
import Guides from "vue3-guides";

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

<style scoped lang="scss">
.dx-layout-guides {
  z-index: 1;

  &:before {
    background: #333333;
    position: absolute;
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    content: '';
    z-index: 99;
    zoom: 0.5;
  }

  .scena-guides-manager {
    canvas {
      vertical-align: top;
    }

    &.scena-guides-horizontal {
      position: absolute;
      top: 0;
      left: 36px;
      height: 36px;
      zoom: 0.5;
    }

    &.scena-guides-vertical {
      position: absolute;
      top: 36px;
      left: 0;
      width: 36px;
      height: 100%;
      zoom: 0.5;
    }
  }
}
</style>