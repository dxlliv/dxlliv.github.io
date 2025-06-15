<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
  text?: string
  invert?: boolean
}>(), {
  name: 'default',
  text: 'DX'
})
</script>

<template>
  <div :class="['dx-logo', `dx-logo--${name}`, {'dx-logo--invert': invert}]">
    <div v-text="text" />
    <div v-if="name === 'archive'">Archive</div>
    <div v-if="name === 'shooting'">Shooting</div>
  </div>
</template>

<style scoped lang="scss">
.dx-logo {
  > div:nth-child(1) {
    position: relative;
    display: inline-block;
    font-family: 'minimal';
    font-display: block;
    font-size: 7rem;
    height: 6rem;
    line-height: 7.8rem;
    z-index: 99;

    @media(max-width: 479px) {
      font-size: 6rem;
      height: 6rem;
      line-height: 7.2rem;
    }
  }

  &--splash {
    div:first-child {
      font-size: 8rem;
      vertical-align: top;

      @media(max-width: 599px) {
        font-size: 6rem;
      }
    }
  }

  &--home {
    div:first-child {
      font-size: 56px;
      height: 46px;
      line-height: 56px;
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
      line-height: 47px;
      font-size: 24px;
    }
  }

  &--archive {
    color: black;

    div:nth-child(1) {
      height: 6rem;
      line-height: 6.8rem;
    }

    div:nth-child(2) {
      font-family: "Bebas Neue", serif;
      font-size: 4.3rem;
      height: 3.2rem;
      line-height: 3.5rem;
      margin-top: -4px;
      animation: shine 3s infinite;
      mask-image: linear-gradient(-75deg, #fff 25%, hsla(0, 0%, 100%, .8) 50%, #fff 70%);
      mask-size: 200%;
      transition: all .1s ease-in-out;

      @media(max-width: 479px) {
        font-size: 3.7rem;
        height: 2.6rem;
        line-height: 2.9rem;
        margin-top: -4px;
      }

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

  &--shooting {
    color: black;

    div:nth-child(1) {
      height: 6rem;
      line-height: 6.8rem;
    }

    div:nth-child(2) {
      font-family: "Bebas Neue", serif;
      font-size: 3.75rem;
      height: 2.7rem;
      line-height: 3.1rem;
      margin-top: -6px;
      animation: shine 3s infinite;
      mask-image: linear-gradient(-75deg, #fff 25%, hsla(0, 0%, 100%, .4) 50%, #fff 70%);
      mask-size: 200%;
      transition: all .1s ease-in-out;

      @media(max-width: 479px) {
        font-size: 3.2rem;
        height: 2.3rem;
        line-height: 2.6rem;
      }

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