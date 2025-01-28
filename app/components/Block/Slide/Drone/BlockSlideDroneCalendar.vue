<script setup lang="ts">
import {Icon} from '#components'
import {useDateFormat} from '@vueuse/core'

const appConfig = useAppConfig()
const dateSelected = ref()
const bookBottomSheet = ref(false)
const bookNow = ref(false)

const IconArrowLeft = h(Icon, {name: 'lucide:arrow-left', size: 14})
const IconArrowRight = h(Icon, {name: 'lucide:arrow-right', size: 14})

const formattedDate = computed(() => {
  if (!dateSelected.value) {
    return ''
  }

  return useDateFormat(dateSelected.value, 'D/MM/YYYY').value
})

watch(() => dateSelected.value, () => {
  bookBottomSheet.value = true
})
</script>

<template>
  <BlockHeroCard
      :slide-next="false"
  >
    <v-date-picker
        v-model="dateSelected"
        hide-header
        hide-weekdays
        class="mx-auto"
        :min="new Date().toISOString()"
        :prev-icon="IconArrowLeft"
        :next-icon="IconArrowRight"
        @update:month="dateSelected = undefined"
        @update:year="dateSelected = undefined"
    />

    <BlockHeroBottomSheet
        v-if="formattedDate && !bookNow"
        activator="parent"
    >
      <BlockHeroBottomText @click="bookNow = true">
        Book for {{ formattedDate }}
      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

    <BlockHeroBottomSheet
        v-if="formattedDate && bookNow"
        fullscreen
        activator="parent"
    >
      <BlockHero>
        <BlockHeroList>
          <v-list-item :href="appConfig.links.instagram" target="_blank">
            Instagram
          </v-list-item>
          <v-list-item :href="appConfig.links.email">
            Drop an e-mail
          </v-list-item>
          <v-list-item :href="appConfig.links.whatsapp" target="_blank">
            WhatsApp
          </v-list-item>
        </BlockHeroList>
      </BlockHero>
    </BlockHeroBottomSheet>
  </BlockHeroCard>
</template>

<style scoped lang="scss">
:deep(.v-date-picker-controls__month-btn),
:deep(.v-date-picker-controls__mode-btn) {
  pointer-events: none;
}

:deep(.v-date-picker-month__day--hide-adjacent) {
  display: none;
}
</style>