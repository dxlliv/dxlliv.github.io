<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";

const separator = '<span class="mx-4">—</span>'
const messages = [
  "digital pixel perfectionist",
  "welcome to dxlliv dot dev",
  "accepting drone video commissions for 2025",
  "stay tuned for new drone clips",
  "website redesign in progress",
  "accepting ui/ux, web design and development commissions for 2025",
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