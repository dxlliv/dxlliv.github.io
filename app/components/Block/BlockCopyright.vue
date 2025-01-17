<template>
  <BlockHeroCard
      color="rgba(255, 255, 255, 0.08)"
      class="text-center cursor-pointer"
      slide-reset
  >

    <v-img cover src="/media/studio.webp" />

    <BlockHeroDescription>
      <p class="text-grey">
        A programmer's work
        is never done.
        <!--
        <a
            @click.stop target="_blank" class="mr-n8 hidden-sm-and-down"
            href="https://medium.com/swlh/a-programmers-work-is-never-done-7e77e0e3c82a"
        >
          <v-icon icon="mdi-information-outline" color="grey-darken-4" class="mt-n1 ml-1" :size="20" />
        </a>
        -->
      </p>

      <p class="text-grey">
        Please come back later for updates.
      </p>

      <br/>

      <p class="text-grey-darken-1">
        Copyright &copy; 2025 – dxlliv
      </p>
    </BlockHeroDescription>

  </BlockHeroCard>
</template>

<style scoped lang="scss">
.v-img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  opacity: 0.15;
}
</style>