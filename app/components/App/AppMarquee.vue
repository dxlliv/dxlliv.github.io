<script setup lang="ts">
import {Vue3Marquee} from "vue3-marquee";

defineProps<{
  text: string
  color: string
}>()
</script>

<template>
  <div class="dx-marquee mx-auto">
    <div class="d-none" v-text="text" />
    <Vue3Marquee :duration="text.length / 2.5">
      {{text}}&nbsp;
    </Vue3Marquee>
  </div>
</template>

<style scoped lang="scss">
.dx-marquee {
  position: relative;

  &:before, &:after {
    position: absolute;
    top: 0;
    height: 100%;
    width: 30px;
    content: '';
    z-index: 3;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, v-bind(color), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, v-bind(color), transparent);
  }
}
</style>