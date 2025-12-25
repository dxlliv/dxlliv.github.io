<script setup lang="ts">
defineProps<{
  count: number
  showCount?: boolean
}>()
</script>

<template>
  <SocialPostActionButton
      class="cursor-pointer"
  >
    <template v-slot:icon>
      <a>
        <Icon
            name="lucide:message-square"
            class="mr-n1"
            :size="26"
        />
      </a>
    </template>
    <template v-slot:count>
      <SocialPostActionButtonCount
          v-if="showCount && count > 0"
          :count="count"
      />
    </template>
  </SocialPostActionButton>
</template>

<style scoped lang="scss">
:deep(.iconify) {
  vertical-align: -6px;
}
</style>
