<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";
import {GitHubIcon} from "vue3-simple-icons";

const skills = 'HTML – CSS – JavaScript – TypeScript – Vue.js – Nuxt.js – Vuetify – Vite – SSG – Electron – Capacitor – Ionic – UI/UX – Pixel Perfect Design - Web Consultant - Design Consultant - UI/UX Battle Tester –'
</script>

<template>
  <BlockHeroCard>

    <BlockHeroTitle
        title="Your No-Label Dev"
    />

    <BlockHeroDescription>
      An independent developer<br/>
      for websites and mobile apps.<br/>
      <div class="d-none" v-text="skills" />
      <div class="mx-auto">
        <Vue3Marquee :duration="56">
          {{skills}}&nbsp;
        </Vue3Marquee>
      </div>
    </BlockHeroDescription>

    <BlockHeroActions @click.stop>

      <BlockHeroButton>
        Say hello
        <AgentDialog />
      </BlockHeroButton>

      <BlockHeroButton
          href="https://github.com/sponsors/dxlliv" target="_blank"
          class="px-0 ml-3"
      >
        <GitHubIcon :size="20" />
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