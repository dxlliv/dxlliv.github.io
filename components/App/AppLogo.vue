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

  @media(max-width: 479px) {
    font-size: 74px;
    line-height: 70px;
  }

  &--home {
    position: absolute;
    top: 30px;
    left: 0;
    margin-left: -2px;
    text-align: left;
    font-size: 140px;
    color: black;

    @media (max-width: 959px) {
      font-size: 120px;
    }

    @media (max-width: 559px) {
      font-size: 115px;
    }

    @media (max-width: 479px) {
      font-size: 105px;
    }

    @media (max-width: 359px) {
      font-size: 90px;
    }
  }

  &--invert {
    filter: invert(1);
  }
}
</style>