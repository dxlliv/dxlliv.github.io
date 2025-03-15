<script setup lang="ts">
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div>
      <client-only>
        <HomeTime />
      </client-only>
      <AppLogo name="home" text="DXLLIV" class="mt-1" />
    </div>
  </div>
  <div />
  <div>
    <HomeButtons />
    <HomeLinks />
  </div>
</template>