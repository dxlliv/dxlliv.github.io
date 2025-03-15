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
  grid-template-rows: 33vh 14vh 53vh;
  text-align: center;
  background: linear-gradient(to bottom, black, #080808);

  > :deep(div) {
    display: grid;
    align-content: center;
  }
}
</style>