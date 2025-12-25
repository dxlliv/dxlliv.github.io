<script setup lang="ts">
const { data: portfolio } = await useAsyncData('portfolio', async () => {
 return queryCollection('archive')
      .where('portfolio', '!=', undefined)
      .order('year', 'DESC')
      .order('created_at', 'DESC')
      .all()
})

definePageMeta({
  layout: 'storycase',
})
</script>

<template>
  <div>
    <v-divider/>

    <StorycaseLayoutFull style="height: 48px;"/>
    <v-divider/>

    <StorycaseLayoutFull>
      <div class="my-n7">
        <nuxt-link
            v-for="(work, index) of portfolio"
            class="d-block my-4"
            :to="'/storycase/' + work.storycase"
        >
          <v-row>
            <v-col :cols="12" :lg="7">
              <BlockHeroCard
                  variant="text"
                  :image="'/clips/storycase/' + work.cover + '/cover.webp'"
                  :aspect-ratio="2"
              >
              </BlockHeroCard>
            </v-col>
            <v-col
                class="text-center"
                align-self="center"
                :cols="12" :lg="5"
            >
              <div class="mt-n2 mt-md-0">
                <div
                    class="text-overline text-grey"
                    v-text="work.title.split(' - ')[0]"
                />
                <div
                    class="text-h5 text-white mb-8 mb-md-0"
                    v-text="work.title.split(' - ')[1]"
                />
              </div>
            </v-col>
          </v-row>
        </nuxt-link>
      </div>
    </StorycaseLayoutFull>

    <v-divider/>

    <StorycaseLayoutFull style="height: 48px;"/>

    <a href="/storycase/2025-natur-air-suite-glamping">&nbsp;</a>
  </div>
</template>

<style scoped lang="scss">

</style>