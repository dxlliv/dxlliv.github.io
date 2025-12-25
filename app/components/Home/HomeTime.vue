<script setup lang="ts">
const date: Ref<Date> = ref(new Date())
const {locale} = useI18n()

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
  let period = 'AM'

  if (locale.value !== 'it') {
    if (hours >= 12) {
      period = 'PM'
      if (hours > 12) hours -= 12
    } else if (hours === 0) {
      hours = 12
    }
  }

  if (minutes.toString().length === 1) minutes = `0${minutes}`

  return locale.value === 'it' ? `${hours}:${minutes}` : `${hours}:${minutes} ${period}`
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
  height: 17px;
  line-height: 14px;
}
</style>
