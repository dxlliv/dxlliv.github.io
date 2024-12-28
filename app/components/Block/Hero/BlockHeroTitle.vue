<script setup lang="ts">
defineProps<{
  title: string
  badge?: string
  dark?: boolean
}>()
</script>

<template>
  <h6
      :class="[
          'dx-block-hero__title text-h6 mt-sm-3 mt-md-n1 mb-n2',
          {'text-grey-lighten-2': dark},
          {'text-grey-darken-3': !dark},
      ]"
  >

    {{title}}

    <v-chip
        v-if="badge"
        class="text-overline mx-auto mb-5"
        size="small" color="blue"
        :text="badge"
    />

  </h6>
</template>

<style scoped lang="scss">
h6 {
  position: relative;
}

.v-chip {
  display: inline-block;
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
  width: min-content;
  line-height: 28px;
  opacity: 0.5;
}
</style>