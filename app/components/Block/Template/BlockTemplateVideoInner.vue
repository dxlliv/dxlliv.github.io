<script setup lang="ts">
defineProps<{
  video: string
}>()

const isLoaded = ref(false)

function handleVideoLoaded() {
  isLoaded.value = false

  setTimeout(() => {
    isLoaded.value = true
  }, 250)
}
</script>

<template>
  <div class="bg-grey-darken-4">
    <video
        :src="video"
        loop playsinline muted autoplay
        preload="metadata"
        @loadeddata="handleVideoLoaded"
        :class="{
        'video-loaded': isLoaded
      }"
    />
  </div>
</template>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;

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