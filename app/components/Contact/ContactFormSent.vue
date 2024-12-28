<script setup lang="ts">

</script>

<template>
  <v-snackbar
    position="fixed"
    rounded="pill"
    :timeout="8000"
  >
    <div class="text-center">
      {{$t('form.action.sent')}}
    </div>
  </v-snackbar>
</template>

<style scoped lang="scss">

</style>