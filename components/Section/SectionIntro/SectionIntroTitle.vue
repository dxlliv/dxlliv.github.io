<script setup lang="ts">
import {GithubIcon} from "vue3-simple-icons";
import {Vue3Marquee} from 'vue3-marquee'
</script>

<template>
  <div class="dxlliv-section-intro-title">
    <h1 class="font-weight text-uppercase cursor-pointer">
      <div
          class="dxlliv-section-intro-title-1"
          v-text="$t('intro.title1')"
      />
      <div
          class="dxlliv-section-intro-title-2"
          v-text="$t('intro.title2')"
      />
    </h1>

    <div class="dxlliv-modern-links mt-4 mb-n2 mx-n2">

      <a href="https://github.com/dxlliv" target="_blank" class="mx-2">
        <GithubIcon/>
      </a>

      <a>
        <v-icon
            icon="mdi-at" size="29px"
            class="mx-2 cursor-pointer"
            style="vertical-align: 1px;"
        />

        <v-tooltip activator="parent" content-class="bg-grey-darken-3" location="right" :open-delay="1000">
          hello@dxlliv.dev
        </v-tooltip>

        <ContactDialog/>
      </a>

      <a class="ml-n1">

      </a>
    </div>

    <Vue3Marquee :duration="96">
      Pixel Perfect Design • Web Consulting • UI/UX Battle Tester & Enhancer • Digital Pixel Perfectionist • Web
      Developer • Web Designer • Web Strategist • Silent Consultant • HTML5 • JavaScript • TypeScript • Vue.js • Nuxt.js
      • Routing • Single-page Application • Server-side Rendering • Static Site Generation • State Management • Vuex •
      Pinia • Xstate • Capacitor • Electron •&nbsp;
    </Vue3Marquee>
  </div>
</template>

<style scoped lang="scss">
.dxlliv-section-intro-title {
  position: absolute;
  bottom: 74px;
  left: 64px;
  right: 64px;
  display: table;
  letter-spacing: -0.6px;

  @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3),
  only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    zoom: 1.35;
  }

  &-1 {
    margin-bottom: -2px;

    @media(max-width: 844px) {
      margin-bottom: 6px;
    }

    @media(max-width: 600px) {
      margin-bottom: 8px;
    }

    @media(max-height: 429px) {
      display: none;
    }
  }

  @media(max-width: 285px) {
    left: 50% !important;
    transform: translateX(-50%) !important;
    right: 0 !important;
  }

  @media(max-width: 285px) {
    text-align: center;
  }

  h1 {
    font-family: "Bebas Neue", serif !important;
    font-size: 80px;
    line-height: 76px;
    word-spacing: 4px;
  }

  @media(max-width: 1379px) {
    h1 {
      font-size: 76px;
      line-height: 72px;
    }
  }

  @media(max-width: 1279px) {
    bottom: 64px;

    h1 {
      font-size: 70px;
      line-height: 68px;
    }
  }

  @media(max-width: 844px) {
    left: 48px;
    right: 48px;

    h1 {
      font-size: 56px;
      line-height: 48px;
    }
  }

  @media(max-height: 479px) {
    bottom: 40px;
  }

  @media(max-width: 479px) {
    left: 36px;
    right: 36px;
    bottom: 48px;

    h1 {
      font-size: 48px;
      line-height: 40px;
    }
  }

  @media(max-width: 340px) {
    h1 {
      font-size: 42px;
      line-height: 38px;
    }
  }

  @media(max-height: 589px) {
    //bottom: 50%;
    //transform: translateY(50%);
  }

  @media(max-width: 599px) and (min-height: 599px) {
    //bottom: 50%;
    //transform: translateY(50%);
  }

  .vue3-marquee.horizontal {
    position: absolute;
    bottom: -1px;
    right: -4px;
    max-width: 280px;
    word-spacing: 4px;
    transition: opacity 0.2s ease-in-out;
    opacity: 0.4;

    a {
      color: inherit;
      margin: 0 5px;
    }

    &:hover {
      opacity: 0.75;
    }

    &:before, &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 24px;
      content: "";
      z-index: 5;
    }

    &:before {
      left: 0;
      background: linear-gradient(to right, #ffffff, transparent);
    }

    &:after {
      right: 0;
      background: linear-gradient(to left, #ffffff, transparent);
    }

    @media(max-width: 529px) {
      display: none !important;
    }
  }
}
</style>