<script setup lang="ts">
defineProps<{
  article: any
}>()
</script>

<template>
  <BlockHeroCard
      :rounded="false"
      :image="article.cover"
      :to="article.path"
  >

    <div class="dx-block-archive__nav">
      <v-chip
          :text="article.title"
      />

      <div class="text-white text-overline font-weight-bold">
        <ArchiveArticleEpisode :article="article" />
        &middot;
        <ArchiveArticleDate :article="article" />
      </div>
    </div>

  </BlockHeroCard>
</template>

<style scoped lang="scss">
.dx-block-archive__nav {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.v-chip {
  color: white;
  backdrop-filter: blur(16px);
}

.v-card {
  position: relative;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
    content: '';
  }
}
</style>