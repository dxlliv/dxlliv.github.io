<template>
  <v-app>

    <div class="app-flex">

      <AppSplash/>

      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>

      <Toolbar/>

    </div>

  </v-app>
</template>

<style lang="scss">
@use "~/assets/styles/index.scss";
</style>

<style scoped lang="scss">
.flex {
  background: linear-gradient(to top, #111, #000);
  height: 100dvh;
}
</style>