<script setup lang="ts">
const localeRoute = useLocaleRoute();

const images = [
  //"001",
  "002",
];

const imageOfTheDay = ref()

onMounted(() => {
  imageOfTheDay.value = getDailyImage(images)
})

function getDailyImage(items) {
  const today = new Date().toISOString().split('T')[0]

  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = (hash * 31 + today.charCodeAt(i)) % items.length;
  }

  return items[hash];
}
</script>

<template>
  <ul class="dx-home__buttons">
    <li>

      <HomeButton
          :title="$t('home.button.design')" marquee
          image="/media/home/design.webp"
          :to="localeRoute('/design')"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.drones')" marquee
          :video="routeRawVideoClip('2024/AQNX4rH46fm3qX3Ec1XhQQ8RBHEuInKGuRccVzkHALDlzWKoiK6YQ0ZfK3fAT8bkOUevRxFOd3WmBXRwQiJCzpm5')"
          poster="/media/home/drones.webp"
          :to="localeRoute('/drones')"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.archive')"
          :image="`/media/home/archive/${imageOfTheDay}.jpg`"
          :to="localeRoute('/archive')"
      />

    </li>
  </ul>
</template>

<style scoped lang="scss">
ul.dx-home__buttons {
  li {
    display: inline-block;
    margin: 0 16px;

    @media(max-width: 599px) {
      margin: 0 12px;
    }
  }
}
</style>