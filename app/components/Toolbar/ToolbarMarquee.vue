<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";

const {t} = useI18n()

const separator = '<span class="mx-4">—</span>'
const messages = [
  t('toolbar.marquee.perfectionist'),
  t('toolbar.marquee.noLabel'),
  t('toolbar.marquee.dronePilot'),
  t('toolbar.marquee.webDeveloper'),
  t('toolbar.marquee.wip'),
]
</script>

<template>
  <Vue3Marquee
      :duration="messages.join(' ').length / 2.5"
      class="text-grey overflow-hidden"
      pause-on-hover pause-on-click
  >
    <div v-html="messages.join(separator) + separator"/>
  </Vue3Marquee>
</template>

<style scoped lang="scss">
.vue3-marquee {
  position: relative;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 32px;
    height: 100%;
    z-index: 2;
    content: '';
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, transparent, rgb(var(--v-theme-background)));
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, transparent, rgb(var(--v-theme-background)));
  }
}
</style>