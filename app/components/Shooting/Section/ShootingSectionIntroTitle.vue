<script setup lang="ts">
const appStore = useAppStore()
const sliderShootingStore = useSliderShootingStore()

const emit = defineEmits(['close'])
</script>

<template>
  <div class="dx-section-intro-title">

    <h1 class="font-weight text-uppercase cursor-pointer">
      <div
          :class="['dx-section-intro-title-1 dx-section-intro-title--animation', {'dx-section-intro-title--animated': appStore.isReady}]">
        {{ $vuetify.display.width >= 699 ? $t('shooting.intro.title1') : $t('shooting.intro.title1Mobile') }}
      </div>
      <div
          :class="['dx-section-intro-title-2 dx-section-intro-title--animation', {'dx-section-intro-title--animated': appStore.isReady}]">
        {{ $vuetify.display.width >= 699 ? $t('shooting.intro.title2') : $t('shooting.intro.title2Mobile') }}
      </div>
      <div
          :class="['dx-section-intro-title-3 dx-section-intro-title--animation', {'dx-section-intro-title--animated': appStore.isReady}]">
        {{ $t("shooting.intro.titleServiceVideo") }}
      </div>
    </h1>

    <div class="dx-links mt-6">

      <v-btn
          flat rounded size="large" color="black"
          @click="sliderShootingStore.slideTo(4)"
      >
        {{ $t($vuetify.display.mdAndUp ? 'shooting.form.open.desktop' : 'shooting.form.open.mobile') }}
      </v-btn>

    </div>

  </div>
</template>

<style scoped lang="scss">
.dx-section-intro-title {
  position: absolute;
  bottom: 72px;
  display: table;
  letter-spacing: -0.6px;
  background: white;
  box-shadow: 0 0 0 65px white;


  &-3 {
    @media(max-height: 499px) {
      display: none;
    }
  }

  @media(max-width: 479px) {
    display: inline-block;

    .dx-links__contacts {
      text-align: center;
    }
  }

  &--animation {
    position: relative;
    overflow: hidden;

    div {
      transform: translateY(150px);
      transition: transform 1s ease-in-out;
      transition-delay: 0.3s;
    }
  }

  &--animated {
    div {
      transform: translateY(0px);
    }
  }

  .v-btn {
    margin-top: -4px;
  }

  h1 {
    font-family: "Bebas Neue", serif;
    font-weight: 900;
    font-size: 64px;
    line-height: 56px;
    word-spacing: 4px;
    margin-left: -2px;

    @media(max-width: 959px) {
      font-size: 58px;
      line-height: 50px;
    }

    @media(max-width: 769px) {
      max-width: 400px;
    }

    @media(max-width: 479px) {
      font-size: 42px;
      line-height: 39px;
    }

    @media(max-width: 340px) {
      font-size: 32px;
      line-height: 31px;
    }

    @media(max-width: 285px), (max-height: 459px) {
      line-height: 44px;
    }
  }

  a {
    display: inline-block;
    margin-top: 3px;
  }
}

.dx-links {
  margin-bottom: -7px;

  &__contacts {
    margin-top: 4px;
  }
}
</style>