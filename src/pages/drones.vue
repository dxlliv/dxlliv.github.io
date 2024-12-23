<script setup lang="ts">
import {routeRawVideoClip} from "~/utils/utilRaw";

useHead({
  title: 'Your No Label Developer'
})
</script>

<template>
  <swiper-slide v-if="$vuetify.display.mdAndUp">

    <BlockDX/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQOqptEzQllSwV7sB2S0X_5uozJt5R2GPoJPXvboy28eo9UJ_s5opiIaIcrntY6lZ2L7LtcmPqpvfwryndfSDE-e')"
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockDroneIntro
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQPuHRHpSYdHWJKzjUoc9NaFsf61MW7asc9OEYvwvgqq13E-XiQ2UYlDD_gODTG7A9XxxDk3MCx1LDtnSpnTjXez')"
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockDroneForBusiness
        slide-next
    />

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateAlbum
        slide-next-then
        :album="[
          '/media/fpv-controller.jpg',
          '/media/fpv-equipment.jpg',
          '/media/fpv-drone.jpg',
        ]"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQN4U0Q58BWHE5EB6XYs7h7XDWHySg77WbwavaBg-I4dsl01uwaeh6faFw9bqlL4s6TVA-IW4ncvOR2RnlZo5Iki')"
        slide-next
    />

  </swiper-slide>
</template>