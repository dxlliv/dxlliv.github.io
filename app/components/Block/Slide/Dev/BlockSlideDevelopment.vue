<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";
</script>

<template>
  <BlockHeroCard>

    <BlockHeroTitle
        title="Your No-Label Dev"
    />

    <BlockHeroDescription>
      An independent developer<br/>
      for websites and mobile apps.<br/>
      <div class="mx-auto">
        <Vue3Marquee :duration="28">
          HTML – CSS – JavaScript – TypeScript –
          Vue.js – Nuxt.js – Vuetify – Vite – SSG –
          Electron – Capacitor – Ionic –
          UI/UX – Pixel Perfect Design –&nbsp;
        </Vue3Marquee>
      </div>
    </BlockHeroDescription>

    <BlockHeroActions @click.stop>

      <BlockHeroButton
          href="https://github.com/sponsors/dxlliv"
      >
        Say hello
      </BlockHeroButton>

      <BlockHeroButton
          href="mailto:hello@dxlliv.dev"
          class="px-0 ml-3"
      >
        <v-icon icon="mdi-at" :size="20"/>
        <ContactDialog/>
      </BlockHeroButton>

    </BlockHeroActions>

  </BlockHeroCard>
</template>

<style scoped lang="scss">
.mx-auto {
  position: relative;
  max-width: 220px;

  &:before, &:after {
    position: absolute;
    top: 0;
    height: 100%;
    width: 30px;
    content: '';
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
  }
}
</style>