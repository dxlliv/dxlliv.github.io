<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
  size?: string
  invert?: boolean
}>(), {
  name: 'default'
})
</script>

<template>
  <div :class="['dx-logo', `dx-logo--${name}`, {'dx-logo--invert': invert}]">
    <v-img>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="105.51 129.82 188.49 140.18">
        <path
            d="M 112 136.500 L 105.538 143.020 125.766 163.266 L 145.994 183.512 125.753 203.753 L 105.512 223.994 112.259 230.741 L 119.006 237.488 139.247 217.247 L 159.488 197.006 179.734 217.234 L 199.980 237.462 206.500 231 L 213.020 224.538 192.767 204.267 L 172.514 183.995 186.257 170.252 L 200 156.509 240.498 196.998 L 280.995 237.486 287.460 230.993 L 293.925 224.500 246.809 177.162 L 199.693 129.825 179.347 150.153 L 159 170.482 138.731 150.231 L 118.462 129.980 112 136.500 M 106 260.500 L 106 270 200 270 L 294 270 294 260.500 L 294 251 200 251 L 106 251 106 260.500"
            stroke="none" fill-rule="evenodd"
        />
      </svg>
    </v-img>
  </div>
</template>

<style scoped lang="scss">
.dx-logo {
  &--home {
    position: absolute;
    top: 74px;
    left: 64px;
    height: 86px;
    text-align: center;
    aspect-ratio: 1.35;
    color: black;

    @media(max-width: 1279px) {
      top: 64px;
    }

    @media(max-width: 844px) {
      left: 48px;
      height: 78px;
    }

    @media(max-width: 479px) {
      top: 48px;
      left: 36px;
      right: 36px;
      height: 62px;
    }

    @media(max-width: 285px) {
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    @media(max-height: 479px) {
      top: 40px;
    }

    @media(max-height: 599px) {
      display: none;
    }

    @media only screen and (width: 430px) and (height: 932px) and (-webkit-device-pixel-ratio: 3),
    only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      zoom: 1.35;
    }
  }

  &--invert {
    svg {
      fill: white;
    }
  }
}
</style>