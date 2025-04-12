<script setup lang="ts">
import {useDisplay} from "vuetify";

const props = defineProps<{
  article: any
}>()

const dialog = ref(false)

const display = useDisplay()

function onArticleClick() {
  if (display.smAndDown.value) {
    return navigateTo(props.article.path)
  }

  dialog.value = true
}
</script>

<template>
  <BlockHeroCard
      :image="article.cover"
      :href="article.path"
      @click.prevent="onArticleClick"
  >

    <div class="dx-block-archive__nav">
      <v-chip
          :text="article.title"
      />

      <div class="text-white text-overline font-weight-bold">
        <ArchiveArticleEpisode :article="article"/>
        &middot;
        <ArchiveArticleDate :article="article"/>
      </div>
    </div>

    <v-dialog
        v-model="dialog"
        :width="800"
        :height="600"
        :fullscreen="$vuetify.display.xs"
    >
      <v-card rounded="xl" class="scrollbar-invisible bg-grey-darken-4">
        <v-card-text>
          <ArchiveArticle
              :article="article"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

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

.dx-block-hero__card {
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