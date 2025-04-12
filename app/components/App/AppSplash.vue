<script setup lang="ts">
const appStore = useAppStore()
const showLogo = ref(false)

onBeforeMount(() => {
  setTimeout(() => {
    showLogo.value = true

    setTimeout(() => {
      appStore.splash = false
    }, 2300)
  }, 500)
})
</script>

<template>
  <v-fade-transition>
    <div class="dx-splash" v-show="appStore.splash">
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
}
</style>