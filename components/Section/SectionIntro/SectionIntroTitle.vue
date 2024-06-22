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

    <div class="dxlliv-links mt-4 mb-n2 mx-n2">

      <a href="https://github.com/dxlliv" target="_blank" class="mx-2">
        <GithubIcon/>
      </a>

      <a>
        <v-icon
            icon="mdi-at" :size="29"
            class="mx-2 cursor-pointer"
            style="vertical-align: 1px;"
        />

        <v-tooltip activator="parent" content-class="bg-grey-darken-3" location="right" :open-delay="1000">
          hello@dxlliv.dev
        </v-tooltip>

        <ContactDialog/>
      </a>
    </div>

    <SectionIntroSkills />

  </div>
</template>

<style scoped lang="scss">
.dxlliv-section-intro-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 64px;
  display: table;
  letter-spacing: -0.6px;

  @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3),
  only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    zoom: 1.35;
  }

  &-1 {
    margin-bottom: -2px;

    @media(max-width: 769px) {
      margin-bottom: 10px;
    }

    @media(max-width: 285px), (max-height: 459px) {
      display: none;
    }

    @media(min-width: 479px) and (max-width: 769px) and (max-height: 619px) {
      display: none;
    }
  }

  @media(max-width: 285px) {
    //text-align: center;
  }

  h1 {
    font-family: "Bebas Neue", serif;
    font-weight: 900;
    font-size: 74px;
    line-height: 70px;
    word-spacing: 4px;
    margin-left: -2px;

    @media(max-width: 959px) {
      font-size: 60px;
      line-height: 58px;
    }

    @media(max-width: 769px) {
      max-width: 350px;
      line-height: 52px;
    }

    @media(max-width: 479px) {
      font-size: 44px;
      line-height: 38px;
    }

    @media(max-width: 340px) {
      font-size: 42px;
      line-height: 36px;
    }

    @media(max-width: 285px), (max-height: 459px) {
      line-height: 40px;
    }
  }
}

body.ios .dxlliv-section-intro-title h1 {
  letter-spacing: -3.5px;

  @media(max-width: 1379px) {
    font-size: 66px;
  }

  @media(max-width: 959px) {
    font-size: 62px;
  }

  @media(max-width: 479px) {
    font-size: 50px;
  }

  @media(max-width: 340px) {
    font-size: 48px;
  }
}
</style>