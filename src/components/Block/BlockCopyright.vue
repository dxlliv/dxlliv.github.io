<script setup lang="ts">
import {useDisplay} from "vuetify";

const sliderHorizontalStore = useSliderHorizontalStore()
const display = useDisplay()

const preventOnFirstClickFromDesktop = ref(true)

function onSlideCopyrightClick() {
  if (display.smAndUp.value && preventOnFirstClickFromDesktop.value) {
    preventOnFirstClickFromDesktop.value = false
    return
  } else {
    preventOnFirstClickFromDesktop.value = false
  }

  if (!preventOnFirstClickFromDesktop.value) {
    sliderHorizontalStore.slideTo(0)
    preventOnFirstClickFromDesktop.value = true
  }
}
</script>

<template>
  <BlockHero
      class="text-center cursor-pointer"
      @click="onSlideCopyrightClick"
  >

    <p>
      A programmer's work is never done.

      <a
          @click.stop target="_blank" class="mr-n8"
          href="https://medium.com/swlh/a-programmers-work-is-never-done-7e77e0e3c82a"
      >
        <v-icon icon="mdi-information-outline" color="grey-darken-4" class="mt-n1 ml-1" :size="20" />
      </a>
    </p>

    <p>
      Please come back later for updates.
    </p>

    <br/>

    <p class="text-grey">
      Copyright &copy; 2024 – dxlliv
    </p>

  </BlockHero>
</template>