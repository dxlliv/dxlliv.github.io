<script lang="ts" setup>
const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('archive')
      .order('created_at', 'DESC')
      .path(route.path).first()
})

definePageMeta({
  layout: 'archive',
})

defineI18nRoute({
  locales: ['en']
})

useSeoMeta({
  title: article.value?.title,
})
</script>

<template>
  <div>

    <ArchiveArticle
        :article="article"
    />

  </div>
</template>

<style scoped lang="scss">

</style>