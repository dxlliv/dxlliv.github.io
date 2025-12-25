<script setup lang="ts">
withDefaults(defineProps<{
  threads: any[]
  orientation?: string
}>(), {
  orientation: 'vertical'
})
</script>

<template>
  <div id="dx-phone" :class="'dx-phone-orientation dx-phone-orientation--' + orientation">
    <div class="mx-auto my-md-16">

      <SocialPhoneToolbar
          to="/"
          title="dxshooting"
      />

      <SocialPhoneSliderVertical
        :threads="threads"
      />

      <SocialPhoneFooter/>

    </div>
  </div>
</template>

<style scoped lang="scss">
#dx-phone {
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  width: 100%;
  height: 100vh;
  max-width: 440px;
  max-height: 800px;
  aspect-ratio: 9 / 16;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  @media(min-height: 920px) and (min-width: 1280px) {
    width: auto;
  }

  @media(max-width: 1279px) {
    margin: 20px 0;
  }
}

.dx-phone-orientation {
  &--horizontal {
    transform: rotate(-90deg);
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  }
}
</style>