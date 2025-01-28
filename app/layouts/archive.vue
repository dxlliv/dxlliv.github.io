<script setup lang="ts">
const appConfig = useAppConfig()

const btnProps = computed(() => {
  let buttonSize = 72

  return {
    icon: true,
    color: 'transparent',
    size: 'x-large',
    width: buttonSize,
    height: buttonSize,
  }
})

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — DX Archive` : 'DX Archive';
  },
})
</script>

<template>
  <v-layout>

    <AppToolbar
        v-if="$vuetify.display.smAndDown"
        to="/archive"
        title="Archive"
    />

    <v-container :width="1100" max-width="100vw">
      <v-row>
        <v-col :cols="12" :md="4" class="text-center hidden-sm-and-down">

          <menu>
            <nuxt-link class="d-inline-block mt-8 mb-12" to="/archive">
              <AppLogo
                  name="archive"
                  invert
              />
            </nuxt-link>

            <div class="mt-8">
              <v-btn
                  :href="appConfig.links.instagram" target="_blank"
                  v-bind="btnProps"
              >
                <Icon name="simple-icons:instagram" :size="24"/>
              </v-btn>
            </div>

            <div>
              <v-btn
                  :href="appConfig.links.threads" target="_blank"
                  v-bind="btnProps"
              >
                <Icon name="simple-icons:threads" :size="24"/>
              </v-btn>
            </div>

            <div>
              <v-btn
                  :href="appConfig.links.bluesky" target="_blank"
                  v-bind="btnProps"
              >
                <Icon name="simple-icons:bluesky" :size="25"/>
              </v-btn>
            </div>

            <div>
              <v-btn
                  :href="appConfig.links.gridsky" target="_blank"
                  v-bind="btnProps"
              >
                <Icon name="mdi:grid" :size="27"/>
              </v-btn>
            </div>
          </menu>

        </v-col>
        <v-col :cols="12" :md="8">

          <slot/>

        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<style scoped lang="scss">
.v-layout {
  display: grid;
  height: calc(100dvh - var(--dx-toolbar-height));
  overflow: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

menu {
  position: sticky;
  top: 16px;
}

ul {
  list-style-type: none;

  li {
    opacity: 0.5;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>