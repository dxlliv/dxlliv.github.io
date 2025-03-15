<template>
  <div class="dx-footer">

    <v-row>
      <v-col :md="3" class="hidden-sm-and-down" align-self="center">

        <!--
        <FooterButton
            href="https://x.com/dxlliv"
        >
          <XIcon :size="18"/>
        </FooterButton>

        <FooterButton
            href="https://github.com/dxlliv"
        >
          <GitHubIcon :size="22"/>
        </FooterButton>
        -->

      </v-col>
      <v-col :md="6">

        {{ $t('footer.line1') }}<br/>
        {{ $t('footer.line2') }}
        <div
            class="text-grey-lighten-1 font-weight-thin"
            v-text="$t('footer.line3')"
        />

      </v-col>
      <v-col :md="3" class="hidden-sm-and-down" align-self="center">

        <!--
        <FooterButton
            href="https://instagram.com/dxlliv"
        >
          <InstagramIcon :size="18"/>
        </FooterButton>

        <FooterButton
            href="https://youtube.com/@dxlliv"
        >
          <YouTubeIcon :size="22"/>
        </FooterButton>
        -->

      </v-col>
    </v-row>

  </div>
</template>

<style scoped lang="scss">
.dx-footer {
  display: grid;
  align-items: center;
  text-align: center;
  height: 26dvh;

  .v-btn {
    opacity: 0.25;
  }

  i {
    opacity: 0.8;
  }

  @media(min-width: 600px) {
    font-size: 19px;
  }

  @media(min-width: 1280px) {
    font-size: 20px;
  }
}
</style>