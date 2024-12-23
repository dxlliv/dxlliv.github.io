<script setup lang="ts">
defineProps<{
  video: string
}>()
</script>

<template>
  <BlockHeroCard class="dx-block--drone" color="grey-darken-3">
    <template #default="{ isIntersected }">

      <v-lazy class="no-pointer-events" transition="fade-transition">
        <video
            v-if="isIntersected"
            :src="video" loop playsinline muted autoplay
        />
      </v-lazy>

    </template>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
.dx-block--drone {
  position: relative;

  .v-lazy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>