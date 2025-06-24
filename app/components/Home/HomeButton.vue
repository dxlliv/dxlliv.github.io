<script setup lang="ts">
defineProps<{
  title: string
  marquee?: boolean
  image?: string
  video?: string
  poster?: string
  to?: RouteRecord
}>()
</script>

<template>
  <nuxt-link :to="to">

    <v-btn
        rounded
        :width="88"
        :height="88"
        class="mb-3 pa-0"
        :title="title"
    >
      <img
          v-if="image"
          width="100%" height="100%"
          :src="image"
          :alt="title"
      />
      <video
          v-if="video"
          width="100%" height="100%"
          :src="video"
          :poster="poster"
          loop playsinline muted autoplay
          preload="metadata"
      />
    </v-btn>

    <div
        v-if="!marquee"
        class="text-caption"
        v-text="title"
    />

    <AppMarquee
        v-else
        color="#000000"
        class="text-caption"
        :text="title + ' -'"
    />

  </nuxt-link>
</template>

<style scoped lang="scss">
img, video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  width: 88px;
  height: 88px;
  object-fit: cover;
}

:deep(.dx-marquee) {
  max-width: 80px;
}
</style>