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
    DX
    <div v-if="name === 'shooting'">shooting</div>
  </div>
</template>

<style scoped lang="scss">
.dx-logo {
  font-family: 'minimal';
  font-display: block;
  font-size: 100px;
  height: 100px;
  line-height: 120px;
  z-index: 99;

  &--splash {
    font-size: 128px;

    @media(max-width: 599px) {
      font-size: 96px;
    }
  }

  &--default {
    color: black;
  }

  &--invert {
    filter: invert(1);
  }

  &--toolbar {
    height: 30px;
    line-height: 36px;
    font-size: 24px;
  }

  &--shooting {
    height: 145px;
    color: black;

    div {
      font-family: "Bebas Neue", serif;
      font-size: 54px;
      margin-top: -64px;
      animation: shine 4s infinite;
      mask-image: linear-gradient(-75deg, #fff 25%, hsla(0, 0%, 100%, .5) 50%, #fff 70%);
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