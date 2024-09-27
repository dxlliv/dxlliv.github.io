<template>
  <div class="dx-section-intro-skills">
    <SectionIntroMarquee :text="$t('skills') + '&nbsp;'" />
  </div>
</template>

<style scoped lang="scss">
.dx-section-intro-skills {
  position: absolute;
  bottom: -1px;
  left: 370px;
  max-width: 280px;
  word-spacing: 4px;
  transition: opacity 0.2s ease-in-out;
  opacity: 0.4;

  @media(max-width: 959px) {
    left: 270px;
    max-width: 250px;
  }

  @media(max-width: 959px) {
    left: 270px;
    max-width: 250px;
  }

  &:hover {
    opacity: 0.75;
  }

  .vue3-marquee.horizontal {
    a {
      color: inherit;
      margin: 0 5px;
    }

    &:before, &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 24px;
      content: "";
      z-index: 5;
    }

    &:before {
      left: 0;
      background: linear-gradient(to right, #ffffff, transparent);
    }

    &:after {
      right: 0;
      background: linear-gradient(to left, #ffffff, transparent);
    }
  }

  @media(max-width: 769px) {
    display: none !important;
  }
}
</style>