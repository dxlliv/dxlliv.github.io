<script setup lang="ts">
const props = defineProps<{
  count: number
  showCount?: boolean
}>()

const liked = ref<boolean>(false)
const count = ref<number>(props.count)

function onPostLiked() {
  liked.value = !Boolean(liked.value)

  if (liked.value) {
    count.value++
  } else {
    count.value--
  }
}
</script>

<template>
  <SocialPostActionButton
    class="cursor-pointer"
    @click="onPostLiked"
  >
    <template v-slot:icon>
      <a class="cursor-pointer">
        <Icon
            name="lucide:heart" :size="27"
            class="cursor-pointer"
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

</style>
