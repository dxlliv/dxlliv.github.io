<template>
  <div class="dx-availability">

    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          fill="transparent"
          id="circlePath"
          d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0 "
      />
      <text>
        <textPath
            data-nosnippet href="#circlePath"
            :style="{fontSize: $vuetify.display.platform.firefox ? '10.01px' : '10.4px', fontWeight: 'bold', animation: 'shine 2.5s infinite' }"
        >
          DXLLIV &middot; DXLLIV &middot; DXLLIV &middot; DXLLIV &middot; DXLLIV &middot; DXLLIV &middot;
        </textPath>
      </text>
    </svg>

    <v-btn icon color="black" :width="86" :height="86" flat>

      <Icon name="mdi:arrange-bring-forward" :size="30" />

      <v-tooltip
          :height="36" activator="parent"
          location="left" :offset="[24, 0]"
          :open-delay="600"
          scroll-strategy="close"
      >
        {{$t('availability.available')}} <v-badge
          dot class="ml-4" color="green"
          style="vertical-align: 8px;"
      />
      </v-tooltip>

      <ContactLauncher />

    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.dx-availability {
  position: absolute;
  top: 74px;
  right: 64px;
  display: none;

  @media (max-height: 799px) {
    display: none;
  }

  @media(max-width: 840px) {
    .v-btn {
      .v-icon {
        font-size: 24px !important;
      }
    }
  }

  svg {
    position: absolute;
    top: 0;
    transition: opacity 0.35s ease-in-out;
    animation: spin 24s linear infinite;
    opacity: 0.25;
  }

  .v-btn {
    z-index: 3;

    @media(max-width: 844px) {
      width: 78px !important;
      height: 78px !important;
    }
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  @media(max-width: 1279px) {
    top: 64px;
  }

  @media(max-width: 844px) {
    right: 48px;
  }

  @media(max-width: 479px) {
    top: 40px;
    right: 32px;
  }

  @media(max-width: 479px), (max-height: 479px) {
    top: 40px;
  }

  @media(max-width: 529px), (max-height: 589px) {
    display: none;
  }
}

@keyframes spin {
  from {
    transform: scale(1.4) rotate(0deg);
  }
  to {
    transform: scale(1.4) rotate(360deg);
  }
}
</style>