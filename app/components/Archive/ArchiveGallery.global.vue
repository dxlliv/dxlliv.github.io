<script setup lang="ts">
defineProps<{
  gallery: string[]
}>()

const dialog = ref(false)
const galleryIndex = ref(0)

function openGallery(index: 0) {
  dialog.value = true
  galleryIndex.value = index
}
</script>

<template>
  <div class="my-10">
    <swiper-container
        :slides-per-view="2.5"
        :space-between="16"
    >
      <swiper-slide
          v-for="(image, index) of gallery"
          @click="openGallery(index)"
      >
        <BlockTemplateImage
            :image="image"
        />
      </swiper-slide>
    </swiper-container>

    <v-dialog v-model="dialog">
      <v-card
          rounded flat color="grey-darken-4"
          :key="galleryIndex"
      >
        <swiper-container
            :initial-slide="galleryIndex"
            :slides-per-view="1"
            allow-touch-move mousewheel
            pagination
        >
          <swiper-slide
              v-for="image of gallery"
          >
            <v-img
                :src="image" cover
            />
          </swiper-slide>
        </swiper-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">
.v-dialog {
  max-width: 80vw;
  max-height: 80vh;
  aspect-ratio: 1;

  @media(max-width: 599px) {
    max-width: 100vw;
  }
}
</style>