<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<template>
  <div class="bg-grey-darken-4">
    <v-img
        :src="image" cover
    />
  </div>
</template>

<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
}
</style>