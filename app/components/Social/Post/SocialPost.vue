<script setup lang="ts">
defineProps<{
  thread: any
}>()
</script>

<template>
  <SocialPostMedia
    :thread="thread"
    :video="{ autoplay: true, loop: true, }"
  />
  <SocialPostActionList
      :thread="thread"
      show-likes
      show-likes-count
      show-comments-count
  />
</template>

<style scoped lang="scss">

</style>