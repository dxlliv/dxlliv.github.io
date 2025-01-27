<script setup lang="ts">
const date: Ref<Date> = ref(new Date())

let minuteTimeout: number = 0

onMounted(() => {
  function scheduleNextMinute() {
    const now = new Date()
    const millisecondsToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()
    minuteTimeout = setTimeout(() => {
      date.value = new Date()
      scheduleNextMinute()
    }, millisecondsToNextMinute)
  }
  scheduleNextMinute()
})

onUnmounted(() => {
  clearTimeout(minuteTimeout)
})

const time = computed(() => {
  if (!date.value) {
    return ''
  }

  let hours = date.value.getHours()
  let minutes = date.value.getMinutes()

  if (minutes.toString().length === 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
})
</script>

<template>
  <time class="dx-home__time text-subtitle-1" v-text="time" />
</template>

<style scoped lang="scss">
time {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 800;
  font-size: 24px !important;
}
</style>
