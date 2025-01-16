<script setup lang="ts">
const sliderShootingStore = useSliderShootingStore()

const video = ref()
</script>

<template>
  <ShootingSection class="text-center">

    <div class="dx-video">
      <video
          src="https://dxlliv.github.io/media/dxvfpv.mp4"
          ref="video" muted playsinline autoplay loop
      />
    </div>

    <AppLogo
        class="cursor-pointer" name="shooting" subtitle
        @click="sliderShootingStore.slideTo(0)"
    />

  </ShootingSection>
</template>

<style scoped lang="scss">
.dx-logo--shooting {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dx-section {
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30vh;
    background: linear-gradient(to bottom, white, transparent);
    content: '';
  }
}

.dx-video {
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    content: '';
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    opacity: 0.05;
    filter: contrast(5) grayscale(1);
  }
}
</style>