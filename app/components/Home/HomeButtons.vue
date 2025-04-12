<script setup lang="ts">
const localeRoute = useLocaleRoute();
</script>

<template>
  <ul class="dx-home__buttons">
    <li>

      <HomeButton
          :title="$t('home.button.design')" marquee
          image="/media/home/design.webp"
          :to="localeRoute('/design')"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.drones')" marquee
          :video="routeRawVideoClip('2024/AQOqptEzQllSwV7sB2S0X_5uozJt5R2GPoJPXvboy28eo9UJ_s5opiIaIcrntY6lZ2L7LtcmPqpvfwryndfSDE-e')"
          poster="/media/home/drones.webp"
          :to="localeRoute('/drones')"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.archive')"
          image="/media/home/archive.webp"
          :to="localeRoute('/archive')"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.projects')"
          image="/media/home/projects.webp"
          :to="localeRoute('/projects')"
      />

    </li>
  </ul>
</template>

<style scoped lang="scss">
ul.dx-home__buttons {
  li {
    display: inline-block;
    margin: 0 16px;

    @media(max-width: 599px) {
      margin: 0 12px;
    }
  }
}
</style>