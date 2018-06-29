<template>
    <div class="work-item-page">
        <section class="hero-wrap">
            <div class="hero-img full-width">
                <!-- <img src="http://via.placeholder.com/2000x1000" alt=""> -->

                <picture>
                    <source 
                        media="(min-width: 1024px)"
                        srcset="http://res.cloudinary.com/jonserness/image/upload/Work/Test%20case%20study/img-test.jpg">
                    <source 
                        media="(min-width: 769px)"
                        srcset="http://via.placeholder.com/1024x512,
                                http://via.placeholder.com/2048x1024 2x">
                    <source 
                        media="(min-width: 481px)"
                        srcset="http://via.placeholder.com/768x768,
                                http://via.placeholder.com/1536x1536 2x">
                    <source 
                        media="(min-width: 321px)"
                        srcset="http://via.placeholder.com/480x480,
                                http://via.placeholder.com/960x960 2x">
                    <source 
                        media="(min-width: 200px)"
                        srcset="http://via.placeholder.com/320x320,
                                http://via.placeholder.com/640x640 2x">
                    <img 
                                               alt="">
                </picture>

            </div>
            <div class="hero-text-wrap contained-narrow">
                <h1>Title of CS</h1>
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

        <div>
            SLUG HERE {{ $route.params }}
        </div>
        <br/><br/><br/><br/>
        <!-- <h3>{{ project.acf }}</h3> -->
        <br/><br/>
        <h3>{{ project.acf.project_title }}</h3>
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
        // return params.slug !== undefined // You can also use redirect if you don't want to display a 404 page
        return /^\d+$/.test(params.id)
    },
    async asyncData({ params, error }) {
        let [projectRes, categoryRes] = await Promise.all([
            axios.get('http://nj-admin.co.uk/wp-json/wp/v2/projects/'+ params.id),
            axios.get('http://nj-admin.co.uk/wp-json/wp/v2/categories')
        ])
        return {
            project: projectRes.data,
            allCategories: categoryRes.data
        }
    },
    mounted() {
        console.log(this.project);
    },
    computed: {
        categories: function () {
            let cats = []          
            for (let i = 0; i < this.project.categories.length; i++) {
                for (let c = 0; c < this.allCategories.length; c++) {
                    if (this.allCategories[c].id == this.project.categories[i]) {
                        cats.push(this.allCategories[c].name);
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

