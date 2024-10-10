<script setup lang="ts">
import {GithubIcon} from "vue3-simple-icons";
import {VueWriter} from 'vue-writer'

const specializationArray = [
    'Web Designer',
    'Web Developer',
    'Consultant',
]
</script>

<template>
  <div class="dx-section-intro-title">
    <h1 class="font-weight text-uppercase cursor-pointer">
      <div
          class="dx-section-intro-title-1"
          v-html="$t('intro.title1')"
      />
      <div
          class="dx-section-intro-title-2"
      >
        <span v-html="$t('intro.title2')" />
        <VueWriter
          :array="specializationArray"
          :eraseSpeed="0"
        />
      </div>

      <ContactDialog/>
    </h1>

    <div class="dx-links mt-4 mb-n2 mx-n2">

      <a href="https://github.com/dxlliv" target="_blank" class="mx-2">
        <GithubIcon/>
      </a>

      <a href="mailto:hello@dxlliv.dev">
        <v-icon
            icon="mdi-at" :size="29"
            class="mx-2 cursor-pointer"
            style="vertical-align: 1px;"
        />

        <v-tooltip
            activator="parent" content-class="bg-grey-darken-3"
            location="right" :open-delay="1000" :offset="[0, 25]"
        >
          hello@dxlliv.dev
        </v-tooltip>
      </a>
    </div>

    <SectionIntroSkills />

  </div>
</template>

<style scoped lang="scss">
.dx-section-intro-title {
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

  @media(min-width: 880px) {
    :deep(br) {
      display: none;
    }
  }

  &-1 {
    margin-bottom: -2px;

    @media(max-width: 879px) {
      margin-bottom: 12px;
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
      font-size: 68px;
      line-height: 62px;
    }

    @media(max-width: 879px) {
      min-width: 300px;
      line-height: 58px;
    }

    @media(max-width: 479px) {
      font-size: 50px;
      line-height: 42px;
    }

    @media(max-width: 380px) {
      max-width: 230px;
      font-size: 44px;
      line-height: 40px;
    }
  }

  .is-typed {
    display: inline;
  }
}

body.ios .dx-section-intro-title h1 {
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