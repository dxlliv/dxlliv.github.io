<script lang="ts" setup>
import {useDisplay} from "vuetify";

const route = useRoute()
const appConfig = useAppConfig()
const display = useDisplay()

const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('archive').path(route.path).first()
})

definePageMeta({
  layout: 'archive',
})

useSeoMeta({
  title: article.value?.title,
})

const btnProps = computed(() => {
  let buttonSize = 72

  if (display.xs.value) {
    buttonSize = 64
  }

  return {
    icon: true,
    color: 'grey-darken-4',
    class: 'mr-4',
    size: 'x-large',
    width: buttonSize,
    height: buttonSize,
  }
})
</script>

<template>
  <div>

    <h1 class="text-h3 text-white" v-text="article.title" />

    <div class="text-overline text-white">
      <v-breadcrumbs class="pa-0 mt-n5 mb-8 text-grey-darken-1">
        <v-breadcrumbs-item>
          <ArchiveArticleEpisode label :article="article" />
        </v-breadcrumbs-item>
        <v-breadcrumbs-item class="ml-5">
          <ArchiveArticleDate :article="article" format="DD MMM YYYY" />
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </div>

    <ContentRenderer v-if="article" :value="article" />

    <br />

    <div v-if="$vuetify.display.smAndDown" class="mt-12">

      <v-btn
          :href="appConfig.links.instagram" target="_blank"
          v-bind="btnProps"
      >
        <Icon name="simple-icons:instagram" :size="24" />
      </v-btn>
      <v-btn
          :href="appConfig.links.threads" target="_blank"
          v-bind="btnProps"
      >
        <Icon name="simple-icons:threads" :size="24" />
      </v-btn>
      <v-btn
          :href="appConfig.links.bluesky" target="_blank"
          v-bind="btnProps"
      >
        <Icon name="simple-icons:bluesky" :size="25" />
      </v-btn>
      <v-btn
          :href="appConfig.links.gridsky" target="_blank"
          v-bind="btnProps"
      >
        <Icon name="mdi:grid" :size="27" />
      </v-btn>

    </div>

  </div>
</template>

<style scoped lang="scss">
:deep(h1) {
  margin-top: 24px;
  margin-bottom: 36px;

  @media(max-width: 599px) {
    font-size: 28px;
  }
}

:deep(p) {
  margin-top: 20px;
  font-size: 24px;
  font-weight: 300;

  @media(max-width: 599px) {
    font-size: 20px;
  }

  a {
    opacity: 0.6;
  }
}

:deep(blockquote) {
  font-family: 'Georgia', serif;
  text-align: center;
  padding: 24px 0;
  opacity: 0.45;

  p {
    font-size: 26px;

    @media(max-width: 599px) {
      font-size: 22px;
    }
  }
}
</style>