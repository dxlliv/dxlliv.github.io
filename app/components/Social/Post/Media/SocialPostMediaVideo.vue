<script setup lang="ts">
import {routeRawMedia} from "~/utils/utilRaw";

const props = defineProps<{
  thread: any
  aspectRatio?: number
  cover?: boolean
  playable?: boolean
  autoplay?: boolean
  pauseIfNotIntersected?: boolean
  showVolume?: boolean
  isReel?: boolean
  loop?: boolean
}>()

const emit = defineEmits(['ready'])

const videoRef = ref<HTMLVideoElement>(null)

const videoDuration = ref(0)
const videoCurrentTime = ref(0)

const remainingTime = computed(() => Math.max(0, videoDuration.value - videoCurrentTime.value))

function onVideoClick() {
  if (videoRef.value.paused) {
    videoRef.value.play()
  } else {
    videoRef.value.pause()
  }
}

onMounted(() => {
  videoRef.value.addEventListener('loadedmetadata', () => {
    if (videoRef.value) {
      videoDuration.value = videoRef.value.duration
    }
  })

  videoRef.value.addEventListener('timeupdate', () => {
    if (videoRef.value) {
      videoCurrentTime.value = videoRef.value.currentTime
    }
  })

  videoRef.value.addEventListener('ended', () => {
    props.thread.post.embed.video.pauseVideo()
  })

  emit('ready')
})
</script>

<template>
  <div
      class="dx-social-post-media__video"
  >
    <video
        ref="videoRef"
        :src="routeRawMedia(thread.post.embed?.video?.src)"
        :autoplay="autoplay" playsinline muted
        :poster="thread.post.embed?.video?.thumb"
        :loop="isReel || loop || videoDuration <= 4"
        @click="onVideoClick"
    />

    <SocialPostMediaVideoCountdown :remaining="remainingTime"/>
  </div>
</template>

<style scoped lang="scss">
.dx-social-post-media__video {
  position: relative;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
    aspect-ratio: v-bind(aspectRatio);
    cursor: pointer;
    pointer-events: none;
  }

  :deep(.dx-social-post-media__image) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__end-video-actions {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--v-theme-background), 0.5);
    backdrop-filter: blur(24px);
    display: flex;
    align-items: center;
  }

  .v-btn .text-truncate {
    max-width: 200px;
  }
}
</style>
