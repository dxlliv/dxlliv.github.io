<script setup lang="ts">
import {NuxtdotjsIcon} from 'vue3-simple-icons'
</script>

<template>
  <div class="dxlliv-specialization">

    <SectionIntroCanvas class="dxlliv-specialization__canvas" />

    <div class="dxlliv-specialization__inner">
      <NuxtdotjsIcon />
      <span v-text="$t('specialization')" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.dxlliv-specialization {
  position: absolute;
  top: 14px;
  right: 23px;
  width: 16px;
  border-top: 4px solid white;
  box-shadow: 0 -6px 0 0 black, 0 -9px 0 0 white, 0 -15px 0 0 black;
  font-weight: bold;
  font-size: 21px;
  word-spacing: 2px;
  font-family: "Bebas Neue", serif !important;
  text-transform: uppercase;
  //display: none;

  &__inner {
    width: 72px;
    margin-top: 20px;
    margin-left: -26px;
    transform: rotateZ(-90deg);
    text-align: center;
  }

  @media(max-width: 1279px) and (max-height: 799px) {
    display: block;
  }

  @media(max-width: 529px) {
    display: block;
  }

  svg {
    width: 32px;
    height: 23px;
    fill: #00DC82;
    margin-right: 2px;
    vertical-align: -4px;
  }

  &:after {
    position: absolute;
    top: -28px;
    right: -5px;
    width: 10px;
    height: 10px;
    transform: rotateZ(-45deg);
    background: white;
    content: '';
  }
}

body.ios .dxlliv-specialization {
  &__inner span {
    letter-spacing: -1.5px;
  }
}
</style>