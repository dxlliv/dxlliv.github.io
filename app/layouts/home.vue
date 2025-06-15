<template>
  <v-layout>
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.v-layout {
  text-align: center;
  background: linear-gradient(to bottom, black, #080808);

  .v-main {
    display: grid;
    grid-template-rows: 38% 10% 52%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 32px;
    width: 100%;
    height: 100dvh;
    max-height: 800px;

    @media(min-height: 920px) {
      width: auto;
      aspect-ratio: 9 / 16;
      border: 1px solid #181818;
    }

    > :deep(div) {
      display: grid;
      align-content: center;
    }
  }
}
</style>