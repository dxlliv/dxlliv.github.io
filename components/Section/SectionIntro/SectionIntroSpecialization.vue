<template>
  <div class="dxlliv-specialization">

    <SectionIntroCanvas class="dxlliv-specialization__canvas" />

    <div class="dxlliv-specialization__inner">
      <div v-text="$t('specialization')" />
    </div>

  </div>
</template>

<style scoped lang="scss">
.dxlliv-specialization {
  position: absolute;
  top: 98px;
  right: 16px;
  width: 32px;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: -1px;
  word-spacing: 2px;
  font-family: "Bebas Neue", serif !important;
  text-transform: uppercase;
  //display: none;

  @media(max-width: 1279px) {
    top: 94px;
  }

  &__inner {
    text-align: center;

    div {
      margin-top: -4px;
      margin-left: -3px;
      opacity: 0.1;
    }
  }

  @media(max-width: 1279px) and (max-height: 799px) {
    display: block;
  }

  @media(max-width: 529px) {
    display: block;
  }

  @media(max-height: 799px) {
    top: 69px;
  }
}

body.ios .dxlliv-specialization {
  @media(max-height: 799px) {
    top: 74px;
  }

  &__inner div {
    letter-spacing: -3px;
  }
}
</style>