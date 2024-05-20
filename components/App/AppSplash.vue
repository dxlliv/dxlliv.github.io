<script setup lang="ts">
const ready = ref(false)
const readyFake = ref(false)

onMounted(() => {
  ready.value = true
})

setTimeout(() => {
  readyFake.value = true
}, 1500)
</script>

<template>
  <v-fade-transition>
    <div class="dxlliv-splash" v-if="!ready || !readyFake">
      <AppLogo splash size="86px"/>
    </div>
  </v-fade-transition>
</template>

<style scoped lang="scss">
.dxlliv-splash {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  cursor: wait;
  z-index: 9999999;

  .dxlliv-logo {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#000, 0) 0,
      rgba(#000, 0.15) 20%,
      rgba(#000, 0.15) 60%,
      rgba(#000, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
    z-index: 99;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>