<script setup lang="ts">
const heroCardEffect = useTemplateRef('heroCardEffect')
const isIntersected = ref(false)

const { nuxtHoverEffect } = useNuxtHoverEffect(heroCardEffect)

function onIntersect(isIntersecting: boolean) {
  isIntersected.value = isIntersecting
}

</script>

<template>
  <div
      ref="heroCardEffect"
      class="dx-block-hero__card__effect"
      :style="{
        transition: 'all 0.25s ease-out',
        background: nuxtHoverEffect
      }"
  />
</template>

<style scoped lang="scss">
.dx-block-hero__card__effect {
  position: absolute;
  top: -4px;
  left: -4px;
  bottom: -4px;
  right: -4px;
  pointer-events: none;
  border-radius: 24px;
  z-index: -1;

  &:after {
    position: absolute;
    top: 4px;
    left: 4px;
    bottom: 4px;
    right: 4px;
    background: white;
    border-radius: 20px;
    content: '';
  }
}
</style>