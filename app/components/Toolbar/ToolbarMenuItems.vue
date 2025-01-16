<template>
  <v-breadcrumbs class="pa-0 mx-n1 my-3">
    <slot />
  </v-breadcrumbs>
</template>

<style scoped lang="scss">
.v-breadcrumbs {
  :deep(.v-breadcrumbs-item:not(:last-child)) {
    margin-right: 8px;
  }
}

:deep(.v-btn) {
  background: #e8e8e8;
  border-radius: 8px;
}
</style>