<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";

defineProps<{
  text: string
}>()
</script>

<template>
  <Vue3Marquee :duration="96">
    <span v-html="text" />
  </Vue3Marquee>
</template>