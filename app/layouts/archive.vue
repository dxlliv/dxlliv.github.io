<script setup lang="ts">
const route = useRoute()
const year = route.params.year

const {data} = await useAsyncData('archive', () => {
  return queryCollectionNavigation('content')
})

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — DX Archive` : 'DX Archive';
  },
})
</script>

<template>
  <v-layout>
    <v-container :width="1100" max-width="100vw">
      <v-row>
        <v-col :cols="12" :md="4">

          <menu>
            <nuxt-link class="d-inline-block mt-8 mb-12" to="/archive">
              <AppLogo
                  name="archive"
                  invert
              />
            </nuxt-link>

            <h3 class="text-h3 mb-4 text-grey" v-text="year"/>

            <ul>
              <template v-for="archive of data">
                <template v-for="yearArchive of archive.children">
                  <li v-for="page of yearArchive.children">
                    <nuxt-link
                        :to="page.path"
                        v-text="page.title"
                    />
                  </li>
                </template>
              </template>
            </ul>
          </menu>

        </v-col>
        <v-col :cols="12" :md="8">

          <slot/>

        </v-col>
      </v-row>
    </v-container>
  </v-layout>

  <Toolbar/>
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