<template>
                <picture>
                    <source media="(min-width: 1024px)" :srcset="project.acf.feature_image.sizes.desktop_img_cropped">
                    <source media="(min-width: 769px)" :srcset="project.acf.feature_image.sizes.tablet_img_large_x2_cropped + ' 2x'">
                    <source media="(min-width: 769px)" :srcset="project.acf.feature_image.sizes.tablet_img_large_cropped">
                    <source media="(min-width: 481px)" :srcset="project.acf.feature_image.sizes.tablet_img_x2_square + ' 2x'">
                    <source media="(min-width: 481px)" :srcset="project.acf.feature_image.sizes.tablet_img_square">
                    <source media="(min-width: 321px)" :srcset="project.acf.feature_image.sizes.mobile_img_large_x2_square + ' 2x'">
                    <source media="(min-width: 321px)" :srcset="project.acf.feature_image.sizes.mobile_img_large_square">
                    <source media="(min-width: 200px)" :srcset="project.acf.feature_image.sizes.mobile_img_x2_square + ' 2x'">
                    <source media="(min-width: 200px)" :srcset="project.acf.feature_image.sizes.mobile_img_square">
                    <img :src="project.acf.feature_image.sizes.fallback_img" :alt="project.acf.feature_image.alt">
                </picture>

</template>

<script>

import axios from 'axios'

export default {

}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";


</style>

