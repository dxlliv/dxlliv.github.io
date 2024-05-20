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
  top: 103px;
  right: 0px;
  width: 32px;
  font-weight: bold;
  font-size: 21px;
  word-spacing: 2px;
  font-family: "Bebas Neue", serif !important;
  text-transform: uppercase;
  //display: none;

  @media(max-width: 1279px) {
    top: 92px;
  }

  @media(max-width: 844px) {
    top: 89px;
  }

  @media(max-height: 799px) {
    top: 64px;
  }

  &__inner {
    width: 72px;
    margin-top: 18px;
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
    height: 24px;
    fill: #00DC82;
    vertical-align: -4px;
  }
}

body.ios .dxlliv-specialization {
  @media(max-height: 799px) {
    top: 69px;
  }

  &__inner span {
    letter-spacing: -1.5px;
  }
}
</style>