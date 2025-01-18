<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";

const separator = '<span class="mx-4">—</span>'
const messages = [
  "digital pixel perfectionist",
  "welcome to dxlliv dot dev",
  "accepting drone video commissions for 2025",
  "drone pilot",
  "web designer",
  "website redesign in progress",
  "accepting ui/ux, web design and website commissions for 2025",
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