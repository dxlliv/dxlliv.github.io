<script setup lang="ts">
import {InstagramIcon, YoutubeIcon} from "vue3-simple-icons";
</script>

<template>
  <Section height="100%" class="dxlliv-section--home-fpv">

    <v-lazy class="no-pointer-events" transition="fade-transition">
      <video src="/media/dxvfpv.mp4" loop muted autoplay />
    </v-lazy>

    <BlockHeroRight
        :title="$t('pages.home.fpv.title')"
        icon="mdi-quadcopter" dark
    >
      <template v-slot:description>

        <p v-html="$t('pages.home.fpv.description.p1')" />
        <p v-html="$t('pages.home.fpv.description.p2')" />

      </template>
      <template v-slot:actions>

        <v-btn
            href="https://instagram.com/dxlliv.mov" target="_blank"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <InstagramIcon width="16px" />
        </v-btn>

        <v-btn
            href="https://youtube.com/@dxvfpv" target="_blank"
            size="large" rounded flat color="primary" min-width="44px" class="px-0 ml-3"
        >
          <YoutubeIcon width="18px" />
        </v-btn>

        <v-btn
            rounded flat color="white" size="large" class="text-white ml-3"
        >
          {{$t('pages.home.fpv.action')}}
          <ContactDialog />
        </v-btn>

      </template>
    </BlockHeroRight>
  </Section>
</template>

<style scoped lang="scss">
.dxlliv-section--home-fpv {
  position: relative;
  background: black;

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
    opacity: 0.334;
  }

  .v-btn {
    background: #ffffff0f !important;

    svg {
      fill: white;
    }
  }
}
</style>