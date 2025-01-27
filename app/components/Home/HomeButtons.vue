<script setup lang="ts">

</script>

<template>
  <ul class="dx-home__buttons">
    <li>

      <HomeButton
          :title="$t('home.button.design')" marquee
          image="https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          to="/design"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.drones')" marquee
          :video="routeRawVideoClip('2024/AQNX4rH46fm3qX3Ec1XhQQ8RBHEuInKGuRccVzkHALDlzWKoiK6YQ0ZfK3fAT8bkOUevRxFOd3WmBXRwQiJCzpm5')"
          to="drones"
      />

    </li>
    <li>

      <HomeButton
          :title="$t('home.button.archive')"
          image="https://images.unsplash.com/photo-1602659408748-ecdc55ed7a50?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          to="archive"
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