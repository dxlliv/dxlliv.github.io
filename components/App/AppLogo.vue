<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
  size?: string
  invert?: boolean
}>(), {
  name: 'default'
})
</script>

<template>
  <div :class="['dxlliv-logo', `dxlliv-logo--${name}`, {'dxlliv-logo--invert': invert}]">
    DX
  </div>
</template>

<style scoped lang="scss">
.dxlliv-logo {
  font-family: 'minimal', serif;
  font-size: 68px;
  z-index: 99;

  &--home {
    position: absolute;
    top: 70px;
    left: 62px;
    height: 86px;
    text-align: center;
    aspect-ratio: 1.35;
    color: black;

    @media(max-width: 1279px) {
      top: 60px;
    }

    @media(max-width: 844px) {
      top: 56px;
      left: 46px;
      height: 78px;
    }

    @media(max-width: 479px) {
      top: 32px;
      left: 34px;
      right: 36px;
      height: 62px;
    }

    @media(max-width: 340px) {
      left: 16px;
    }

    @media(max-height: 479px) {
      top: 36px;
    }

    @media(max-height: 599px) {
      //display: none;
    }

    @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3),
    only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      zoom: 1.35;
    }
  }

  &--invert {
    filter: invert(1);
  }
}
</style>