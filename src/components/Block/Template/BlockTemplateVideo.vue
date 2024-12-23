<script setup lang="ts">
defineProps<{
  video: string
}>()

const isLoaded = ref(false)

function onIntersect(isIntersecting: boolean) {
  if (!isIntersecting) {
    isLoaded.value = isIntersecting
  }
}

function handleVideoLoaded() {
  isLoaded.value = false

  setTimeout(() => {
    isLoaded.value = true
  }, 250)
}
</script>

<template>
  <BlockHeroCard
      class="dx-block--drone" color="grey-darken-4"
      @intersect="onIntersect"
  >
    <template #default="{ isIntersected }">

      <video
          v-if="isIntersected"
          :src="video"
          loop playsinline muted autoplay
          preload="metadata"
          @loadeddata="handleVideoLoaded"
          :class="{
            'video-loaded': isLoaded
          }"
      />

    </template>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
.dx-block--drone {
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: none;
    backface-visibility: hidden;
    perspective: 480px;
    will-change: transform, opacity;
    opacity: 0;
    transition: opacity 0.2s ease-in;

    &.video-loaded {
      opacity: 1;
    }
  }
}
</style>