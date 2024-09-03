<template>
  <SliderHorizontal>
    <swiper-slide>

      <v-card rounded flat class="fill-height">

        <SliderVertical page-name="index">

          <slot/>

        </SliderVertical>

      </v-card>

    </swiper-slide>

    <!--
    <swiper-slide>

      <v-row no-gutters class="fill-height">
        <v-col class="fill-height">

          <v-row no-gutters class="fill-height">
            <v-col align-self="center" class="text-center">

              <AppCopyright />

            </v-col>
          </v-row>

        </v-col>
        <v-col class="hidden-sm-and-down">

        </v-col>
      </v-row>

    </swiper-slide>
    -->

  </SliderHorizontal>
</template>
<script setup lang="ts">
</script>