<script setup lang="ts">
const localeRoute = useLocaleRoute();
</script>

<template>
  <ul class="dx-home__buttons">
    <li>

      <HomeButton
          :title="$t('home.button.design')"
          image="/media/home/design.webp"
          :to="localeRoute('/design')"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.drones')"
          :video="routeRawMedia('clips/storycase/2025-summer-natur-air-suite/large/fpv-optimized.mp4')"
          poster="/media/home/drones.webp"
          :to="localeRoute('/drones')"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.archive')"
          :image="`/media/home/archive.webp`"
          :to="localeRoute('/archive')"
      />

    </li>
  </ul>
</template>

<style scoped lang="scss">
.dx-home__buttons {
  li {
    display: inline-block;
    margin: 0 16px;

    @media(max-width: 599px) {
      margin: 0 12px;
    }
  }
}
</style>