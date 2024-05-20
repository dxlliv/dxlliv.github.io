<script setup lang="ts">
const emit = defineEmits(['intersect'])

function onIntroTitleIntersect(isIntersecting: boolean) {
  if (isIntersecting) {
    emit('intersect')
  }
}
</script>

<template>
  <Section height="100%">
    <AppLogo name="home" size="86px" title="dxlliv" />
    <SectionIntroSpecialization/>
    <SectionIntroTitle v-intersect="onIntroTitleIntersect"/>
  </Section>
</template>

<style scoped lang="scss">

</style>