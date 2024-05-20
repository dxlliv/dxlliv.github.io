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
  font-size: 96px;
  line-height: 90px;
  z-index: 99;

  @media(max-width: 959px) {
    font-size: 84px;
    line-height: 80px;
  }

  &--home {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: -2px;
    text-align: center;
    aspect-ratio: 1.35;
    color: black;

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