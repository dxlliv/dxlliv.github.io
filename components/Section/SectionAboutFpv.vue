<script setup lang="ts">
import {InstagramIcon, TiktokIcon, YoutubeIcon} from "vue3-simple-icons";
</script>

<template>
  <Section height="100vh" class="dxlliv-section--about-fpv" style="background: #181818;">
    <v-lazy class="no-pointer-events" transition="fade-transition">
      <video src="/media/dxvfpv.mp4" loop muted autoplay />
    </v-lazy>

    <BlockRight
      class="dxlliv-block--website-property"
      :title="$t('pages.about.fpv.title')"
      icon="mdi-quadcopter" dark intersect-scroll
  >
    <template v-slot:description>

      <p v-html="$t('pages.about.fpv.description.p1')" />

    </template>
    <template v-slot:actions>

      <v-btn
          href="https://instagram.com/dxvfpv" target="_blank"
          size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
      >
        <InstagramIcon width="18px" />
      </v-btn>

      <v-btn
          href="https://tiktok.com/@dxvfpv" target="_blank"
          size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
      >
        <TiktokIcon width="17px" style="margin-top: -1px;" />
      </v-btn>

      <v-btn
          href="https://youtube.com/@dxvfpv" target="_blank"
          size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
      >
        <YoutubeIcon width="20px" />
      </v-btn>

    </template>
  </BlockRight>
  </Section>
</template>

<style scoped lang="scss">
.dxlliv-section--about-fpv {
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.065;
  }

  .v-btn {
    background: #ffffff0a !important;

    svg {
      fill: white;
    }
  }
}
</style>