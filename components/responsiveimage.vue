<template>
    <picture>
        <source media="(min-width: 1024px)" :srcset="imageObj.sizes.desktop_img_cropped">
        <source media="(min-width: 769px)" :srcset="imageObj.sizes.tablet_img_large_cropped + ', ' + imageObj.sizes.tablet_img_large_x2_cropped + ' 2x'">
        <source media="(min-width: 481px)" :srcset="imageObj.sizes.tablet_img_square + ', ' + imageObj.sizes.tablet_img_x2_square + ' 2x'">
        <source media="(min-width: 321px)" :srcset="imageObj.sizes.mobile_img_large_square + ', ' + imageObj.sizes.mobile_img_large_x2_square + ' 2x'">
        <source media="(min-width: 200px)" :srcset="imageObj.sizes.mobile_img_square + ', ' + imageObj.sizes.mobile_img_x2_square + ' 2x'">
        <img :src="imageObj.sizes.fallback_img" :alt="imageObj.alt">
    </picture>  
</template>

<script>

export default {
    props: {
        imageObj: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    img {
        width: 100%;
    }
</style>

