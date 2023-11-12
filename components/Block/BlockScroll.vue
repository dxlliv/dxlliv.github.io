<script setup lang="ts">
const {scroll} = defineProps<{
  scroll: boolean
}>()

const blockElement: Ref<HTMLElement|null> = ref(null)

function onWindowScrollEnd() {
  if (blockElement.value) {
    const sectionElement: HTMLElement|null = blockElement.value.closest('.dxlliv-section')

    if (sectionElement) {
      // scroll to the beginning of the block
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      })
    }
  }

  window.removeEventListener("scrollend", onWindowScrollEnd)
}

function onBlockIntersect(isIntersecting: boolean) {
  if (!scroll) return

  if (isIntersecting) {
    // on window scroll end, scroll to the beginning of the block
    window.addEventListener("scrollend", onWindowScrollEnd)
  }
}
</script>

<template>
  <div
      ref="blockElement"
      v-intersect="onBlockIntersect"
  >
    <slot />
  </div>
</template>