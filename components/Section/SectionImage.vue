<script setup lang="ts">
withDefaults(defineProps<{
  intersectScroll?: boolean
  height?: string
  src: string
}>(), {
  intersectScroll: true
})

const emit = defineEmits(['intersect'])

function onImageInnerIntersect(isIntersecting: boolean) {
  emit('intersect', isIntersecting)
}
</script>

<template>
  <div class="dxlliv-section-image">
    <v-img
        height="100vh" :height="height" cover
        :src="src" alt=""
    >
      <Block
          v-intersect="onImageInnerIntersect"
          :intersect-scroll="intersectScroll" class="section-image__block"
      >
        <div />
      </Block>
    </v-img>
  </div>
</template>

<style scoped lang="scss">
.dxlliv-section-image {
  height: v-bind('height');
  background: #202020;

  &__block {
    position: absolute !important;
    width: 500px;
    min-height: 30vh !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    div {
      width: 100%;
      height: 30vh;
    }
  }
}
</style>