<script setup lang="ts">
import {useDisplay} from "vuetify";
import {routeRawMedia} from "~/utils/utilRaw";

const props = defineProps<{
  article: any
}>()

const dialog = ref(false)

const display = useDisplay()

function onArticleClick() {
  if (!props.article.storycase && display.smAndDown.value) {
    return navigateTo(props.article.path)
  }

  /*
  if (props.article.storycase) {
    return navigateTo(href.value)
  }
  */

  dialog.value = true
}

const href = computed(() => {
  if (props.article.storycase) {
    return '/storycase/' + props.article.storycase
  }

  return props.article.path
})

async function loadStorycase() {
  return await queryCollection('storycase')
      .path('/storycase/' + props.article.storycase)
      .first()
}

const storycase = await loadStorycase() 
const storycaseVideos = extractMediaFromStorycase(storycase)
</script>

<template>
  <BlockHeroCard
      :image="article.cover.startsWith('http') ? routeRawMedia(article.cover) : '/clips/storycase/' + article.cover + '/cover.webp'"
      :href="href"
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
        v-if="!article.storycase"
        v-model="dialog"
        :width="!article.storycase ? 800 : 1200"
        :height="600"
        :fullscreen="$vuetify.display.xs"
    >
      <v-card
          rounded="xl"
          :class="['scrollbar-invisible', {'bg-grey-darken-4': !article.storycase, 'bg-black': article.storycase}]"
      >
        <v-card-text v-if="!article.storycase">
          <ArchiveArticle
              :article="article"
          />
        </v-card-text>
        <ArchiveStorycase
            v-else
            :storycase="article.storycase"
        />
      </v-card>
    </v-dialog>

    <v-bottom-sheet
        v-if="article.storycase"
        v-model="dialog"
    >
      <div class="text-center">
        <swiper-container
          class="mx-auto"
        >
          <swiper-slide v-for="video of storycaseVideos">
            <StorycaseVideo
              :src="video.src"
              show-button-play
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </v-bottom-sheet>

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