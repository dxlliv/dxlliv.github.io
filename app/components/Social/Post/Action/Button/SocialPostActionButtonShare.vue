<script setup lang="ts">
defineProps<{
  thread: any
}>()

function onShareClick() {
  //postModalShareStore.openDialog(props.thread)
}
</script>

<template>
  <a @click.prevent="onShareClick">
    <SocialPostActionButton>
      <Icon
        name="lucide:send" :size="24"
        class="cursor-pointer"
      />
    </SocialPostActionButton>
  </a>
</template>

<style scoped lang="scss">
a {
  position: relative;
  margin-top: 8px;
}
</style>
