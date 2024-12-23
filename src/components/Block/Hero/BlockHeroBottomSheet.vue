<script setup lang="ts">
const appStore = useAppStore()

const bottomSheet = ref(false)

onMounted(() => {
  appStore.emitter.on('horizontal-slide-change', () => {
    bottomSheet.value = false
  })
})
</script>

<template>
  <v-bottom-sheet
      activator="parent"
      v-model="bottomSheet"
      eager contained
  >
    <v-card class="text-center">
      <slot />
    </v-card>
  </v-bottom-sheet>
</template>

<style scoped lang="scss">
.v-card {
  display: grid;
  align-content: center;
  overflow: hidden;
}
</style>