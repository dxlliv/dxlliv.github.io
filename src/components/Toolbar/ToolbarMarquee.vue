<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";

const separator = '<span class="mx-6">—</span>'
const messages = [
  "welcome on dxlliv dot dev",
  "digital pixel perfectionist",
  "website redesign in progress",
  "accepting drone video commissions for 2025",
  "stay tuned for new drone clips",
  "accepting ui/ux, web design and development commissions for 2025",
]
</script>

<template>
  <Vue3Marquee
      :duration="messages.join(' ').length / 2.5"
      class="text-grey py-4 overflow-hidden"
      pause-on-hover pause-on-click
  >
    <div v-html="messages.join(separator) + separator"/>
  </Vue3Marquee>
</template>