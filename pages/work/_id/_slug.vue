<template>
    <div class="work-item-page">
        <section class="hero-wrap">
            <!-- <h1>{{ project }}</h1> -->
            <div class="hero-img full-width">
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

            </div>
            <div class="hero-text-wrap contained-narrow">
                <h1>{{ project.acf.project_title }}</h1>
                <h3>For: <a href="https://rosielee.co.uk/" target="_blank">Rosie Lee</a>, <a href=""><span></span> Link</a></h3>
                <div class="tags">
                    <span>tag1</span>
                    <span>tag2</span>
                    <span>tag3</span>
                    <span>tag4</span>
                    <span>tag5</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Quis viverra nibh cras pulvinar mattis nunc sed blandit.</p>
            </div>
        </section>

        <section class="full-width work-img">
            <img src="http://via.placeholder.com/2000x1000" alt="">
        </section>

        <section class="contained work-img">
            <img src="http://via.placeholder.com/2000x1000" alt="">
        </section>

        <section class="contained-narrow work-img">
            <img src="http://via.placeholder.com/2000x1000" alt="">
        </section>


<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>





<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div>
            SLUG HERE {{ $route.params }}
        </div>
        <br/><br/><br/><br/>
        <h3>{{ project.acf }}</h3> 
        <br/><br/>
        <h3></h3>
        <br/><br/>
        <h3>{{ project.acf.feature_image.url }}</h3>
        <br/><br/>
        <h3>{{ project.acf.date }}</h3>
        <br/><br/>
        <h3>{{ project.acf.employer }}</h3>
        <br/><br/>
        <h3 v-if="project.acf.link">{{ project.acf.link }}</h3>
        <br/><br/>
        <h3>{{ project.acf.lightdark_toggle }}</h3>
        <br/><br/>
        <h4>{{ categories }}</h4>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },
    mounted() {
        console.log(this.project.acf.feature_image.alt);
    },
    computed: {
        project: function () {
            for (let p = 0; p < this.$store.state.projects.length; p++) {
                if (this.$store.state.projects[p].id == this.$route.params.id) {
                    return this.$store.state.projects[p]
                }
            }    
        },
        categories: function () {
            let cats = []          
            for (let i = 0; i < this.project.categories.length; i++) {
                for (let c = 0; c < this.$store.state.categories.length; c++) {
                    if (this.$store.state.categories[c].id == this.project.categories[i]) {
                        cats.push(this.$store.state.categories[c].name);
                    }                   
                }
            }
            return cats
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    .full-width, .contained, .contained-narrow {
        height: auto;
        display: block;
        margin: 0 auto;
        width: 100%;
        text-align: center;
    }
    .contained {
        max-width: 1200px;
    }
    .contained-narrow {
        max-width: 800px;
    }
    .hero-wrap {
        .hero-img {
            width: 100%;
            height: 0;
            padding-bottom: 50%;
            position: relative;
            @include breakpoint(tablet-mobile) {
                padding-bottom: 100%;
            }
            img {
                width: 100%;
                height: auto;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .hero-text-wrap {
            // background: yellow;
            box-sizing: border-box;
            padding: 40px;
            h3 {
                color: $grey;
            }
        }
        .tags {
            margin: 20px auto;
            span {
                background: $gold;
                display: inline-block;
                padding: 5px 10px;
                border-radius: 5px;
                margin: 0 5px;
                color: $black;
            }
        }
    }
    .work-img {
        margin-bottom: 40px;
        img {
            width: 100%;
        }
    }
</style>

