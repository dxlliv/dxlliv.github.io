<script setup lang="ts">
const {title, icon, avatar, dark} = defineProps<{
  title?: string
  icon?: string
  avatar?: string
  image?: string
  dark?: boolean
}>()

const emit = defineEmits(['iconClick'])
</script>

<template>
  <div class="text-center">

    <BlockHeroIcon
        v-if="!$slots.image"
        :avatar="avatar"
        :image="image"
        :icon="icon"
        :dark="dark"
        @click="emit('iconClick')"
    />

    <slot name="image" v-else/>

    <BlockHeroTitle
        v-if="title"
        :title="title"
        :dark="dark"
    />

    <BlockHeroDescription :dark="dark" :margin="$slots.actions">
      <slot name="description"/>
    </BlockHeroDescription>

  </div>
</template>