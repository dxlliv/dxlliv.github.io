<script setup lang="ts">
import {GitHubIcon, InstagramIcon, XIcon, YouTubeIcon} from "vue3-simple-icons";
</script>

<template>
  <div class="dx-toolbar">
    <v-row>
      <v-col :md="8">

        Turning visions into reality.<br />
        Powered by the modern web.
        <div class="text-grey-lighten-1 font-weight-thin">dxlliv, formerly Diego Villa</div>

      </v-col>
      <v-col :md="3" class="hidden-sm-and-down" align-self="center">

        <div class="mb-4">
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
        </div>

        <div>

          <FooterButton
              href="https://instagram.com/dxlliv"
          >
            <InstagramIcon :size="18"/>
          </FooterButton>

          <FooterButton
              href="https://youtube.com/dxlliv"
          >
            <YouTubeIcon :size="22"/>
          </FooterButton>
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.dx-toolbar {
  display: grid;
  align-items: center;
  text-align: center;
  height: 30%;
  font-size: 22px;

  i {
    opacity: 0.8;
  }

  @media(max-width: 1279px) {
    font-size: 21px;
  }

  @media(max-width: 599px) {
    font-size: 19px;
  }
}
</style>