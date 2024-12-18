<script setup lang="ts">
import {NuxtdotjsIcon} from 'vue3-simple-icons'
</script>

<template>
  <div class="dx-specialization">

    <SectionIntroCanvas class="dx-specialization__canvas" />

    <div class="dx-specialization__inner">
      <a href="https://nuxt.com" target="_blank">
        <NuxtdotjsIcon />
      </a>
      <span v-text="$t('specialization')" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.dx-specialization {
  position: absolute;
  top: -24px;
  right: 20px;
  text-transform: uppercase;
  width: 16px;
  font-weight: bold;
  font-size: 21px;
  word-spacing: 2px;
  font-family: "Bebas Neue", serif !important;
  text-transform: uppercase;

  @media(min-width: 700px) {
    zoom: 1.2;
  }

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
    margin-right: 1px;
    fill: #00DC82;
    vertical-align: -4px;
  }

  &:after {
    position: absolute;
    top: -25px;
    right: -6px;
    width: 10px;
    height: 10px;
    transform: rotateZ(-45deg);
    background: white;
    content: '';
  }
}

body.ios .dx-specialization {
  &__inner span {
    letter-spacing: -1.5px;
  }
}
</style>