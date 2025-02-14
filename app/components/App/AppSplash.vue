<script setup lang="ts">
const showSplash = ref(true)
const showLogo = ref(false)

onBeforeMount(() => {
  setTimeout(() => {
    showLogo.value = true

    setTimeout(() => {
      showSplash.value = false
    }, 2500)
  }, 500)
})
</script>

<template>
  <v-fade-transition>
    <div class="dx-splash" v-show="showSplash">
      <v-fade-transition>
        <AppLogo v-if="showLogo" name="splash"/>
      </v-fade-transition>
    </div>
  </v-fade-transition>
</template>

<style scoped lang="scss">
.dx-splash {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  cursor: wait;
  z-index: 9999999;

  &__preload-font {
    opacity: 0;
  }

  .dx-logo {
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
            rgba(#000, 0.25) 20%,
            rgba(#000, 0.25) 30%,
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