<script setup lang="ts">
const emit = defineEmits(['intersect'])

function onIntroTitleIntersect(isIntersecting: boolean) {
  if (isIntersecting) {
    emit('intersect')
  }
}
</script>

<template>
  <Section class="dxlliv-section-intro" height="100%">
    <div class="dxlliv-secton-intro__inner">
      <AppLogo name="home" size="86px" title="dxlliv" />
      <SectionIntroSpecialization/>
      <SectionIntroTitle v-intersect="onIntroTitleIntersect"/>
    </div>
  </Section>
</template>

<style scoped lang="scss">
.dxlliv-secton-intro__inner {
  position: absolute;
  top: 76px;
  bottom: 76px;
  left: 66px;
  right: 0;

  @media(max-width: 959px), (max-height: 699px) {
    top: 60px;
    bottom: 60px;
    left: 48px;
  }

  @media(max-width: 399px), (max-height: 599px) {
    top: 48px;
    bottom: 48px;
    left: 32px;
  }

  @media(max-height: 499px) {
    top: 32px;
    bottom: 32px;
    left: 24px;
  }
}
</style>