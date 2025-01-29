<script setup lang="ts">

</script>

<template>
  <v-layout>
    <slot />
  </v-layout>
</template>

<style scoped lang="scss">
.v-layout {
  display: grid;
  grid-template-rows: 40vh 60vh;
  text-align: center;
  background: linear-gradient(to bottom, black, #111);

  > :deep(div) {
    display: grid;
    align-content: center;
  }
}
</style>