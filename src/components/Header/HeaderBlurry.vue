<script setup lang="ts">
defineProps<{
  absolute?: boolean
}>()
</script>

<template>
  <header :class="['dx-header flex align-content-center text-md-left', {'dx-header--absolute': absolute}]">
    <nuxt-link class="text-center" to="/">
      <h6 class="text-overline d-inline-block">
        dxlliv - Your No Label Developer
      </h6>
    </nuxt-link>
  </header>
</template>

<style scoped lang="scss">
.dx-header {
  max-width: 360px;
  margin: 0 auto;
  height: 90px;

  &--absolute {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    color: white;

    a {
      background: rgba(0, 0, 0, 0.1);
      padding: 4px 15px;
      border-radius: 32px;
      backdrop-filter: blur(15px);
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
  }

  @media(max-height: 800px) {
    padding: 28px 0;
  }

  a {
    display: block;
    margin: 0 auto;
  }

  h6 {
    @media(max-width: 370px) {
      font-size: 3.2vw !important;
    }
  }
}
</style>