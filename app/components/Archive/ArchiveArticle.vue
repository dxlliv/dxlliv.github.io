<script setup lang="ts">
import {useDisplay} from "vuetify";

defineProps<{
  article: any
}>()

const appConfig = useAppConfig()
const display = useDisplay()

const btnProps = computed(() => {
  let buttonSize = 72

  if (display.xs.value) {
    buttonSize = 64
  }

  return {
    icon: true,
    variant: 'text',
    class: 'mx-1',
    size: 'large',
    width: buttonSize,
    height: buttonSize,
  }
})
</script>

<template>
  <h1 class="text-h3 text-white" v-text="article.title"/>

  <div class="text-overline text-white">
    <v-breadcrumbs class="pa-0 mt-n5 mb-8 text-grey-darken-1">
      <v-breadcrumbs-item>
        <ArchiveArticleEpisode label :article="article"/>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item class="ml-5">
        <ArchiveArticleDate :article="article" format="DD MMM YYYY"/>
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>

  <ContentRenderer v-if="article" :value="article"/>

  <div class="text-center mt-9">
    <v-btn
        :href="appConfig.links.instagram" target="_blank"
        v-bind="btnProps"
    >
      <Icon name="simple-icons:instagram" :size="21"/>
    </v-btn>
    <v-btn
        :href="appConfig.links.gridsky" target="_blank"
        v-bind="btnProps"
    >
      <Icon name="mdi:grid" :size="24"/>
    </v-btn>
    <v-btn
        :href="appConfig.links.threads" target="_blank"
        v-bind="btnProps"
    >
      <Icon name="simple-icons:threads" :size="21"/>
    </v-btn>
    <v-btn
        :href="appConfig.links.bluesky" target="_blank"
        v-bind="btnProps"
    >
      <Icon name="simple-icons:bluesky" :size="22"/>
    </v-btn>
  </div>

</template>

<style scoped lang="scss">
h1 {
  margin-top: 8px;
  margin-bottom: 36px;

  @media(max-width: 599px) {
    font-size: 28px;
  }
}

:deep(p) {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.05px;

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
    font-size: 24px;

    @media(max-width: 599px) {
      font-size: 22px;
    }
  }
}
</style>