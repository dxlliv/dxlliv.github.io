<script setup lang="ts">
const dialog = ref(false)
</script>

<template>
  <v-dialog
      activator="parent"
      v-model="dialog"
      :width="800"
      :height="600"
      :fullscreen="$vuetify.display.xs"
  >

    <v-card color="white" :rounded="$vuetify.display.smAndUp">
      <ShootingSlider page-name="index">

        <swiper-slide>
          <ShootingSectionIntro
            @close="dialog = false"
          />
        </swiper-slide>

        <swiper-slide>
          <ShootingSectionHomeIndoorShots/>
        </swiper-slide>

        <!--
        <swiper-slide>
          <ShootingSectionHomeRegularShots/>
        </swiper-slide>
        -->

        <swiper-slide>
          <ShootingSectionHomeActionShots/>
        </swiper-slide>

        <swiper-slide>
          <ShootingSectionForm/>
        </swiper-slide>

        <swiper-slide>
          <ShootingSectionFooter/>
        </swiper-slide>

      </ShootingSlider>
    </v-card>

  </v-dialog>
</template>

<style scoped lang="scss">
swiper-container {
  --swiper-pagination-color: #333;
  --swiper-pagination-bullet-border-radius: 4px;
  --swiper-pagination-bullet-width: 10px;
  --swiper-pagination-bullet-height: 10px;
  --swiper-pagination-bullet-inactive-color: #ddd;
  --swiper-pagination-right: 20px;

  @media(max-width: 640px) {
    --swiper-pagination-right: 13px;
    --swiper-pagination-bullet-border-radius: 3px;
    --swiper-pagination-bullet-width: 8px;
    --swiper-pagination-bullet-height: 8px;
  }
}
</style>