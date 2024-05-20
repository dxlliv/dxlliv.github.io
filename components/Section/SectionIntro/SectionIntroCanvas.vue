<template>
  <div id="dxlliv-pixels" />
</template>

<script setup>
import {onMounted, onBeforeUnmount} from 'vue'
import p5 from 'p5'

defineProps({
  active: {
    type: Boolean
  }
})

const background = {
  p5: null,
  mouse: {
    position: { x: 0, y: 0 },
    offset: { x: 0, y: 0 }
  },
  options: {
    baseColor: 255,
    squareSize: 16,
    noiseSmoothness: 0.025,
    speedMultiplier: 0.0025,
  },
}

function backgroundSetup(p5) {
  p5.setup = () => {
    p5.frameRate(30)
    p5.noStroke()

    p5.createCanvas(
        32,
        176,
    ).parent("dxlliv-pixels")

    background.mouse.position = {
      x: p5.mouseX,
      y: p5.mouseY
    }
  }

  p5.draw = () => {
    background.mouse.position.x = p5.mouseX
    background.mouse.position.y = p5.mouseY

    let mouseOffsetX = background.mouse.position.x - p5.windowWidth / 2
    let mouseOffsetY = background.mouse.position.y - p5.windowHeight / 2

    mouseOffsetX = mouseOffsetX * background.options.speedMultiplier
    mouseOffsetY = mouseOffsetY * background.options.speedMultiplier

    background.mouse.offset.x += mouseOffsetX
    background.mouse.offset.y += mouseOffsetY

    for (let squareX = 0; squareX < p5.width; squareX += background.options.squareSize) {
      for (let squareY = 0; squareY < p5.height; squareY += background.options.squareSize) {
        const color = background.options.baseColor * p5.noise(
            background.options.noiseSmoothness * (background.mouse.offset.x + squareX),
            background.options.noiseSmoothness * (background.mouse.offset.y + squareY)
        )

        p5.fill(color, 250, 150)
        p5.rect(squareX, squareY, background.options.squareSize, background.options.squareSize)
      }
    }
  }
}

onMounted(() => background.p5 = new p5(backgroundSetup))
onBeforeUnmount(() => background.p5.remove())
</script>

<style lang="scss">
#dxlliv-pixels {
  position: relative;
  width: 32px;
  height: 176px;
  background: #222;
  border-top: 4px solid white;
  box-shadow: 0 -8px 0 0 black, 0 -12px 0 0 white, 0 -20px 0 0 black;
  cursor: move;

  @media(max-height: 560px) {
    height: 64px;
    overflow: hidden;
  }

  canvas {
    pointer-events: none;
  }

  &:after {
    position: absolute;
    top: -31px;
    right: -5px;
    width: 10px;
    height: 10px;
    transform: rotateZ(-45deg);
    background: white;
    content: '';
  }
}
</style>