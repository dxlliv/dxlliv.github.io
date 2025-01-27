<template>
  <div class="dx-toolbar">

    <v-divider/>

    <ToolbarDesktop v-if="$vuetify.display.smAndUp" />
    <ToolbarMobile v-else />

  </div>
</template>

<style scoped lang="scss">
.dx-toolbar {
  height: var(--dx-toolbar-height);
  line-height: calc(var(--dx-toolbar-height) - 2px) !important;
  overflow: hidden;
}
</style>