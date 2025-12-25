<script setup lang="ts">
import {computed} from "vue";
import {routeRawMedia} from "~/utils/utilRaw";

const props = withDefaults(defineProps<{
  thread: any
  forceAspectRatio?: number
  scrollable?: boolean
  showType?: boolean
  album?: {
    navigation?: boolean
    mousewheel?: boolean
    direction?: 'horizontal'|'vertical'
  }
  video?: {
    playable?: boolean
    autoplay?: boolean
    showVolume?: boolean
    loop?: boolean
    reel?: boolean
  }
  performance?: MediaPropsPerformance
}>(), {
  album: {
    direction: 'horizontal'
  },
  video: {},
  performance: {},
})

const emit = defineEmits(['ready', 'albumSwiperReady'])

const aspectRatio = computed(() => {
  if (props.forceAspectRatio) {
    return props.forceAspectRatio
  }

  return props.thread.post.embed.aspectRatio
})

const mediaClasses = computed(() => {
  const classes = []

  if (props.scrollable) {
    classes.push('overflow-y-auto scrollbar-invisible')
  }

  return classes
})

const mediaStyles = computed(() => {
  const styles: any = {}

  if (props.scrollable) {
    // styles.maxHeight = '90vh'
    styles.width = '100%'
  }

  // test
  if (props.performance.hideMediaContent) {
    styles.aspectRatio = aspectRatio.value
  }

  return styles
})

function onMediaReady() {
  if (props.thread.ready) {
    // already loaded
    // todo if you remove this you'll face a reactivity error
    // and incrementChunkMediaLoaded will start from 15 or more
    return
  }

  props.thread.ready = true

  if (props.thread.chunk?.incrementChunkMediaLoaded) {
    props.thread.chunk.incrementChunkMediaLoaded()
  }

  emit('ready')
}
</script>

<template>
  <SocialPostMediaContainer
      :class="mediaClasses"
      :style="mediaStyles"
      :type="thread.post.embed.type"
      :hide-media-content="performance.hideMediaContent"
  >
    
    <template v-if="thread.post.embed.type === 'image'">
      <SocialPostMediaImage
        v-if="thread.post.embed.images.length > 0"
        :image="routeRawMedia(thread.post.embed.images[0])"
        :aspect-ratio="aspectRatio"
        @ready="onMediaReady"
      />
    </template>

    <template v-else-if="thread.post.embed.type === 'album'">
      <SocialPostMediaAlbum
          v-if="!performance.showOnlyMediaImage"
          :thread="thread"
          :aspect-ratio="aspectRatio"
          :navigation="album.navigation"
          :direction="album.direction"
          :mousewheel="album.mousewheel"
          ref="swiper"
          @ready="onMediaReady"
          @albumSwiperReady="swiper => $emit('albumSwiperReady', swiper)"
      />
      <SocialPostMediaImage
          v-else
          :image="thread.post.embed.images[0]"
          :aspect-ratio="aspectRatio"
          @ready="onMediaReady"
      />
    </template>

    <template v-else-if="thread.post.embed.type === 'video'">
      <SocialPostMediaVideo
          v-if="!performance.showOnlyMediaImage"
          :thread="thread"
          :aspect-ratio="aspectRatio"
          :playable="video.playable"
          :autoplay="video.autoplay"
          :album-navigation="album.navigation"
          :show-volume="video.showVolume"
          :reel="video.reel"
          :loop="video.loop"
          @ready="onMediaReady"
      />
      <SocialPostMediaImage
          v-else
          :image="thread.post.embed.video"
          :aspect-ratio="aspectRatio"
          @ready="onMediaReady"
      />
    </template>

    <slot/>
  </SocialPostMediaContainer>
</template>

<style scoped lang="scss">
.dx-social-post-media {
  position: relative;

  :deep(img, video) {
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    height: 100%;
  }
}
</style>
