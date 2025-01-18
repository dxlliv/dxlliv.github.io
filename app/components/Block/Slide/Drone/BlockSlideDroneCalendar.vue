<script setup lang="ts">
import {Icon} from '#components'
import {useDateFormat} from '@vueuse/core'
import {InstagramIcon} from "vue3-simple-icons";

const appConfig = useAppConfig()

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

function onBookDate() {
  bookBottomSheet.value = true
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

    <BlockHeroBottomSheet
        v-if="dateSelected"
    >
      <BlockHeroBottomText>
        <div @click="onBookDate">
          Book for {{ formattedDate }}
        </div>
      </BlockHeroBottomText>
    </BlockHeroBottomSheet>

    <v-bottom-sheet close-on-content-click v-model="bookBottomSheet">
      <v-card color="black">
        <v-card-text class="pa-0 mt-1 text-center">
          <v-breadcrumbs class="d-inline-block">
            <v-breadcrumbs-item class="px-2">
              <a :href="appConfig.links.instagram" target="_blank">
                <InstagramIcon/>
              </a>
            </v-breadcrumbs-item>
            <v-breadcrumbs-item class="px-2">
              <a :href="appConfig.links.email" target="_blank">
                <Icon name="lucide:at-sign" :size="26"/>
              </a>
            </v-breadcrumbs-item>
            <v-breadcrumbs-item class="px-2">
              <Icon name="lucide:messages-square" :size="28" style="margin-bottom: 4px;"/>
              <AgentDialog />
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
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