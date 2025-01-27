<script setup lang="ts">
import {Icon} from '#components'
import {useDateFormat} from '@vueuse/core'

const dateSelected = ref()
const bookBottomSheet = ref(false)

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
    <template v-slot="{ slideNext }">
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
          v-if="dateSelected"
          activator="parent"
      >
        <template v-slot="{ close }">
          <BlockHeroBottomText @click="slideNext(); close();">
            Book for {{ formattedDate }}
          </BlockHeroBottomText>
        </template>
      </BlockHeroBottomSheet>
    </template>
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