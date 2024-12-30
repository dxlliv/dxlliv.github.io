export default function ({ route, redirect, app }) {
    const sliderHorizontalStore = useSliderHorizontalStore()

    sliderHorizontalStore.slideTo(1)
}