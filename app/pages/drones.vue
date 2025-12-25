<script setup lang="ts">
const {t} = useI18n()

useHead({
  title: t('pages.drones.title')
})

defineI18nRoute({
  locales: ['en', 'it']
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

    <BlockSlideDroneImmersiveVisuals/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateVideo
        :video="routeRawMedia('clips/2024/AQOqptEzQllSwV7sB2S0X_5uozJt5R2GPoJPXvboy28eo9UJ_s5opiIaIcrntY6lZ2L7LtcmPqpvfwryndfSDE-e.mp4')"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockDXS>
      <client-only>
        <ShootingDialog />
      </client-only>
    </BlockDXS>

  </swiper-slide>
  <swiper-slide>

    <BlockSlideDroneBusinessOutdoor/>

  </swiper-slide>
  <swiper-slide>

    <BlockTemplateAlbum
        slide-next-then
        :album="[
            routeRawMedia('clips/2024/AQNX4rH46fm3qX3Ec1XhQQ8RBHEuInKGuRccVzkHALDlzWKoiK6YQ0ZfK3fAT8bkOUevRxFOd3WmBXRwQiJCzpm5.mp4'),
            routeRawMedia('clips/2024/AQPuHRHpSYdHWJKzjUoc9NaFsf61MW7asc9OEYvwvgqq13E-XiQ2UYlDD_gODTG7A9XxxDk3MCx1LDtnSpnTjXez.mp4'),
            routeRawMedia('clips/2024/AQMTvapUk5NgBCRcbB1N6wTKjTlAHZpKWb_PV0_arWUHk8S_X-5NLKI5fGkSlYgJWOqNGRld2meuhrpyIBROJFPc-Tq4se4QONV0ICk.mp4'),
            routeRawMedia('clips/2024/AQPvg5ClEWLL9efbgAkokCXSzspsWJYRsiP7S_ojM-pG4GeABI2WAM1Dp-qhO5SHs5sBOK19c-li9h7-f0rleT_k.mp4'),
        ]"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
</template>