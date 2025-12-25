<script setup lang="ts">
defineProps<{
  showCaption?: boolean
  showLikes?: boolean
  showLikesWithAvatar?: boolean
  showLikesCount?: boolean
  showCommentsCount?: boolean
  showDate?: boolean
}>()

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
</script>

<template>
  <div
      class="dx-social-post__actions"
  >

    <SocialPostActionButtonLike
        :count="getRandomInt(225)"
        :show-count="showLikesCount"
    />

    <SocialPostActionButtonComment
        :count="getRandomInt(12)"
        :show-count="showCommentsCount"
    />

    <SocialPostActionButtonShare/>

  </div>
</template>

<style scoped lang="scss">
.dx-social-post__actions {
  position: absolute;
  bottom: 20px;
  right: 8px;
  text-align: center;

  :deep(.dx-social-post-action-button) {
    margin: 16px auto;
  }

  :deep(a) {
    display: block;
    margin: 0 auto;
    transition: color 0.5s ease-in-out;
    color: initial;

    &:active {
      color: rgb(var(--v-theme-primary));
      transition: none;
    }

    svg {
      pointer-events: none;
    }
  }
}
</style>