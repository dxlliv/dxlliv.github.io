<script setup lang="ts">
useHead({
  title: 'Immersive Drone Visuals'
})
</script>

<template>
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneFlyingSince/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQPuHRHpSYdHWJKzjUoc9NaFsf61MW7asc9OEYvwvgqq13E-XiQ2UYlDD_gODTG7A9XxxDk3MCx1LDtnSpnTjXez')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneImmersiveVisuals/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneEquipment/>

  </swiper-slide>
  <swiper-slide>

    <BlockDXS>
      <ShootingDialog />
    </BlockDXS>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQOqptEzQllSwV7sB2S0X_5uozJt5R2GPoJPXvboy28eo9UJ_s5opiIaIcrntY6lZ2L7LtcmPqpvfwryndfSDE-e')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneBusinessOutdoor/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneBusinessBNB/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawVideoClip('2024/AQMTvapUk5NgBCRcbB1N6wTKjTlAHZpKWb_PV0_arWUHk8S_X-5NLKI5fGkSlYgJWOqNGRld2meuhrpyIBROJFPc-Tq4se4QONV0ICk')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneCalendar/>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneBookNow />

  </swiper-slide>
</template>