<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  badge?: string
  dark?: boolean
  color?: string
}>(), {
  color: 'blue'
})
</script>

<template>
  <v-chip
      v-if="badge"
      class="text-overline mx-auto mb-3"
      size="small" :color="color"
      :text="badge"
  />

  <h6
      :class="[
          'dx-block-hero__title text-h6 mb-n2',
          {'text-grey-lighten-2': dark},
          {'text-grey-darken-3': !dark},
      ]"
  >

    {{title}}

  </h6>
</template>

<style scoped lang="scss">
h6 {
  position: relative;
}

.v-chip {
  display: inline-block;
  width: min-content;
  line-height: 28px;
  opacity: 0.5;
}
</style>