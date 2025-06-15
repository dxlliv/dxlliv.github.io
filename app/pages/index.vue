<script setup lang="ts">
const appStore = useAppStore()

const snackbarDesktop = ref(false)

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <v-main
    @mouseenter="snackbarDesktop = true"
    @mouseleave="snackbarDesktop = false"
  >
    <div>
      <div>
        <nuxt-link to="/desktop">
          <v-snackbar
              :model-value="snackbarDesktop && $vuetify.display.width > 960"
              timeout="-1"
              location="bottom" color="#0f0f0f"
              contained rounded="xl"
          >
            Switch to Desktop
          </v-snackbar>
        </nuxt-link>
        <client-only>
          <HomeTime/>
        </client-only>
        <AppLogo name="home" text="DXLLIV" class="mt-1"/>
      </div>
    </div>
    <div/>
    <div>
      <client-only>
        <HomeButtons/>
      </client-only>
      <HomeLinks v-show="!appStore.splash"/>
    </div>
  </v-main>
</template>

<style scoped lang="scss">
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