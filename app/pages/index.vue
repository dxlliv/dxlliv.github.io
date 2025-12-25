<script setup lang="ts">
const appStore = useAppStore()

definePageMeta({
  layout: 'phone',
})
</script>

<template>
  <main>
    <!--
    @mouseenter="snackbarDesktop = true"
    @mouseleave="snackbarDesktop = false"
    -->

    <template v-if="$vuetify.display.height < 480">
      <v-container class="pa-0 fill-height" min-height="100dvh">
        <v-row no-gutters>

          <v-col :md="12" :cols="12" align-self="center">
            
            <HomeFooter />

          </v-col>
        </v-row>
      </v-container>
    </template>

    <template v-else>
      <HomeHeader />
      <div/>
      <HomeFooter />
    </template>

  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  grid-template-rows: 34% 10% 56%;
  height: 100%;

  > :deep(*) {
    display: grid;
  }

  > header {
    align-content: start;
    margin-top: 9vh;

    :deep(.dx-logo div) {
      height: 96px !important;
      line-height: 105px !important;
      font-size: 110px !important;
    }
  }

  > footer {
    align-content: end;
    margin-bottom: 11vh;
  }

  .v-snackbar {
    width: inherit;
    margin-bottom: 16px;

    :deep(.v-snackbar__wrapper) {
      min-width: calc(100% - 8px);
      min-height: 48px;
      line-height: 48px;
    }

    :deep(.v-snackbar__content) {
      text-align: center;
      margin: 0 32px;
      padding: 0 16px;
      font-size: 15px;
      color: #aaa;
    }
  }
}
</style>