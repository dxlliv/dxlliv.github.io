<template>
  <v-bottom-sheet
      activator="parent"
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