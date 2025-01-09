<script lang="ts" setup>
import {BlueskyIcon, InstagramIcon, ThreadsIcon} from "vue3-simple-icons";

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

definePageMeta({
  layout: 'archive',
})

useSeoMeta({
  title: page.value?.title,
})
</script>

<template>
  <div>

    <ContentRenderer v-if="page" :value="page" />

    <v-btn
        href="https://instagram.com/dxlliv" target="_blank"
        icon color="grey-darken-4" class="my-12 mr-4" size="x-large" :width="72" :height="72"
    >
      <InstagramIcon />
    </v-btn>
    <v-btn
        href="https://threads.com/dxvfpv" target="_blank"
        icon color="grey-darken-4" class="my-12 mr-4" size="x-large" :width="72" :height="72"
    >
      <ThreadsIcon />
    </v-btn>
    <v-btn
        href="https://bsky.app/profile/did:plc:2pkidgvfnbxx7sq3shporxij" target="_blank"
        icon color="grey-darken-4" class="my-12 mr-4" size="x-large" :width="72" :height="72"
    >
      <BlueskyIcon :size="27" />
    </v-btn>
    <v-btn
        href="https://gridsky.app/did:plc:2pkidgvfnbxx7sq3shporxij" target="_blank"
        icon color="grey-darken-4" class="my-12" size="x-large" :width="72" :height="72"
    >
      <v-icon icon="mdi-grid" :size="28" />
    </v-btn>

  </div>
</template>

<style scoped lang="scss">
:deep(h1) {
  margin-top: 24px;
  margin-bottom: 24px;
}

:deep(p) {
  margin-top: 20px;
  font-size: 24px;
  font-weight: 300;

  a {
    opacity: 0.6;
  }
}

:deep(blockquote) {
  font-family: 'Georgia', serif;
  text-align: center;
  padding: 24px 0;
  opacity: 0.35;

  p {
    font-size: 28px
  }
}
</style>