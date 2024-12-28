<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
  invert?: boolean
}>(), {
  name: 'default'
})
</script>

<template>
  <div :class="['dx-logo', `dx-logo--${name}`, {'dx-logo--invert': invert}]">
    <div>DX</div>
    <div v-if="name === 'shooting'">shooting</div>
  </div>
</template>

<style scoped lang="scss">
.dx-logo {
  > div:nth-child(1) {
    font-family: 'minimal';
    font-display: block;
    font-size: 100px;
    height: 76px;
    line-height: 96px;
    z-index: 99;
    display: inline-block;
    position: relative;
  }

  &--splash {
    div:first-child {
      font-size: 128px;

      @media(max-width: 599px) {
        font-size: 96px;
      }
    }
  }

  &--default {
    color: black;

    > div:nth-child(1) {
      z-index: 99;
    }
  }

  &--invert {
    filter: invert(1);
  }

  &--toolbar {
    div:first-child {
      height: 30px;
      line-height: 44px;
      font-size: 24px;
    }
  }

  &--shooting {
    color: black;

    div:nth-child(2) {
      font-family: "Bebas Neue", serif;
      font-size: 54px;
      margin-top: -22px;
      animation: shine 4s infinite;
      mask-image: linear-gradient(-75deg, #fff 25%, hsla(0, 0%, 100%, .4) 50%, #fff 70%);
      mask-size: 200%;
      transition: all .1s ease-in-out;

      @keyframes shine {
        0% {
          -webkit-mask-position: 150%
        }

        to {
          -webkit-mask-position: -50%
        }
      }
    }
  }
}
</style>