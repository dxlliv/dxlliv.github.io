<script setup lang="ts">
const {year} = defineProps<{
  year: number
}>()

/*
const {data: articles} = await useAsyncData('archive', () => {
  return queryCollection('archive')
      .where('year', '=', year)
      .all()
})
 */
</script>

<template>
  <BlockHeroCard>
    <div class="text-h4" v-text="year"/>
  </BlockHeroCard>
  <!--
  <BlockTemplateSlider slide-next-then class="disable-swipe">
    <template #default="{ onSlideClick }">
      <swiper-slide @click="onSlideClick">
        <BlockHeroCard :slide-next="false">
          <div class="text-h4" v-text="year"/>
          <Icon name="lucide:grip-horizontal" />
        </BlockHeroCard>
      </swiper-slide>
      <swiper-slide
          v-for="article of articles"
          @click="onSlideClick"
      >
        <BlockArchiveArticle
          :article="article"
          :slide-next="false"
        />
      </swiper-slide>
    </template>
  </BlockTemplateSlider>
  -->
</template>

<style scoped lang="scss">
.text-h4 {
  font-size: 72px !important;
}

.iconify {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  opacity: 0.25;
}
</style>