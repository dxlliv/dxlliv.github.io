import { useMouseInElement } from '@vueuse/core'

function lerp(start, end, factor) {
    return start * (1 - factor) + end * factor
}

// credits: https://github.com/Aleroms/santiagomorales/blob/main/src/composables/nuxtHoverEffect.js

export function useNuxtHoverEffect(target: HTMLElement) {
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

    const nuxtHoverEffect = computed(() => {
        //calculate center
        let centerX = elementWidth.value / 2
        let centerY = elementHeight.value / 2
        //calc vectors from center to mouse pos
        let vectorX = centerX - elementX.value
        let vectorY = elementY.value - centerY
        let vectorLength = Math.sqrt(vectorX ** 2 + vectorY ** 2)
        //calc angle
        let angleRad = Math.atan2(vectorX, vectorY)
        //convert to deg
        let deg = angleRad * (180 / Math.PI)
        // calculate opacity based on vectorLength
        let opacity = lerp(1, 0, vectorLength / 600)

        //colors
        return `linear-gradient(${deg}deg, rgba(0, 205, 109,${opacity}), rgba(0, 205, 109,0) 20%)`
    })

    return {
        target,
        elementX,
        elementY,
        isOutside,
        elementHeight,
        elementWidth,
        nuxtHoverEffect
    }
}