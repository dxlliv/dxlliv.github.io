<script setup lang="ts">
const localeRoute = useLocaleRoute();
</script>

<template>
  <swiper-container
      class="dx-home__buttons"
      :slides-per-view="3.5"
      :breakpoints="{
        480: {
          slidesPerView: 4,
        },
      }"
  >

    <swiper-slide>

      <HomeButton
          :title="$t('home.button.design')" marquee
          image="/media/home/design.webp"
          :to="localeRoute('/design')"
      />

    </swiper-slide>
    <swiper-slide>

      <HomeButton
          :title="$t('home.button.drones')" marquee
          :video="routeRawVideoClip('2024/AQOqptEzQllSwV7sB2S0X_5uozJt5R2GPoJPXvboy28eo9UJ_s5opiIaIcrntY6lZ2L7LtcmPqpvfwryndfSDE-e')"
          poster="/media/home/drones.webp"
          :to="localeRoute('/drones')"
      />

    </swiper-slide>
    <swiper-slide>

      <HomeButton
          :title="$t('home.button.archive')"
          image="/media/home/archive.webp"
          :to="localeRoute('/archive')"
      />

    </swiper-slide>
    <swiper-slide>

      <HomeButton
          :title="$t('home.button.projects')"
          image="/media/home/projects.webp"
          :to="localeRoute('/projects')"
      />

    </swiper-slide>
  </swiper-container>
</template>

<style scoped lang="scss">
.dx-home__buttons {
  width: 440px;
  max-width: 100vw;
  margin: 0 auto;

  .v-btn {
    display: inline-block;
    margin: 0 16px;

    @media(max-width: 599px) {
      margin: 0 12px;
    }
  }
}
</style>