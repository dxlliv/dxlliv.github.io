<script setup lang="ts">
useHead({
  title: 'Immersive Captures'
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
        :video="routeRawVideoClip('2024/AQOqptEzQllSwV7sB2S0X_5uozJt5R2GPoJPXvboy28eo9UJ_s5opiIaIcrntY6lZ2L7LtcmPqpvfwryndfSDE-e')"
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
            routeRawVideoClip('2024/AQPuHRHpSYdHWJKzjUoc9NaFsf61MW7asc9OEYvwvgqq13E-XiQ2UYlDD_gODTG7A9XxxDk3MCx1LDtnSpnTjXez'),
            routeRawVideoClip('2024/AQMTvapUk5NgBCRcbB1N6wTKjTlAHZpKWb_PV0_arWUHk8S_X-5NLKI5fGkSlYgJWOqNGRld2meuhrpyIBROJFPc-Tq4se4QONV0ICk'),
            routeRawVideoClip('2024/AQNX4rH46fm3qX3Ec1XhQQ8RBHEuInKGuRccVzkHALDlzWKoiK6YQ0ZfK3fAT8bkOUevRxFOd3WmBXRwQiJCzpm5'),
            routeRawVideoClip('2024/AQPvg5ClEWLL9efbgAkokCXSzspsWJYRsiP7S_ojM-pG4GeABI2WAM1Dp-qhO5SHs5sBOK19c-li9h7-f0rleT_k'),
        ]"
    />

  </swiper-slide>
  <swiper-slide>

    <BlockDX>
      <BlockDXMenu />
    </BlockDX>

  </swiper-slide>
</template>