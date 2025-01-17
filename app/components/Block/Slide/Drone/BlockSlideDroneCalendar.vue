<script setup lang="ts">
import {Icon} from '#components'
import { useDateFormat } from '@vueuse/core'
const agentStore = useAgentStore()

const dateSelected = ref()

const IconArrowLeft = h(Icon, {name: 'lucide:arrow-left', size: 14})
const IconArrowRight = h(Icon, {name: 'lucide:arrow-right', size: 14})

const formattedDate = computed(() => {
  if (!dateSelected.value) {
    return ''
  }

  return useDateFormat(dateSelected.value, 'D/MM/YYYY').value
})

function onBookDate() {
  agentStore.text = `What about ${formattedDate.value}?`
}
</script>

<template>
  <BlockHeroCard :slide-next="false">
    <v-date-picker
        v-model="dateSelected"
        hide-header
        hide-weekdays
        class="mx-auto"
        :min="new Date().toISOString()"
        :prev-icon="IconArrowLeft"
        :next-icon="IconArrowRight"
    />

    <BlockHeroBottomSheet v-if="dateSelected">
      <BlockHeroBottomText>

        <div @click="onBookDate">
          Book for {{formattedDate}}
        </div>

        <AgentDialog v-if="dateSelected" />

      </BlockHeroBottomText>
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