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

    <v-card :rounded="$vuetify.display.smAndUp">
      <ShootingSlider page-name="index">

        <swiper-slide>
          <ShootingSectionIntro
            @close="dialog = false"
          />
        </swiper-slide>

        <swiper-slide>
          <ShootingSectionHomeIndoorShots/>
        </swiper-slide>

        <swiper-slide>
          <ShootingSectionHomeActionShots/>
        </swiper-slide>

        <swiper-slide>
          <ShootingSectionHomeRegularShots/>
        </swiper-slide>

        <swiper-slide v-if="$vuetify.display.smAndUp">
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
}
</style>