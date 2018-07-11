<template>
    <div class="work-item-page">
        <section class="hero-wrap">
            <div class="hero-img full_width">
                <responsiveimage :imageObj="project.acf.feature_image"/>
            </div>
            <div class="hero-text-wrap contained_narrow">
                <h1>{{ project.acf.project_title }}</h1>
                <h3><a>{{ project.acf.employer }} </a><a v-if="project.acf.link" :href="project.acf.link" target="_blank">| <span id="link-svg"><svg viewBox="0 0 800 800"><path d="M321.2 736.73782c-71.1 71.1-186.8 71.1-257.9 0-71.1-71.1-71.1-186.8 0-257.9l143.3-143.3c71.1-71.1 186.8-71.1 257.9 0 10.5 10.5 30.3 26.2 30.2 42.9-.1 16.8-13.7 30.3-30.5 30.3-16.7-.1-30.2-13.6-42.7-30.2-48-48-123.9-48-171.9 0l-143.3 143.3c-48 48-48 123.9 0 171.9s123.9 48 171.9 0l136.1-136.1c11.7-12 31-12.3 43-.6 12 11.7 12.3 31 .6 43l-.6.6-136.1 136.1zm272.2-272.3c-71.1 71.1-186.8 71.1-257.9 0-11.9-11.9-11.9-31.1 0-43 11.9-11.9 31.1-11.9 43 0 48 48 123.9 48 171.9 0l143.3-143.3c48-48 48-123.9 0-171.9s-123.9-48-171.9 0l-136.1 136.1c-11.7 12-30.9 12.3-43 .6-12-11.7-12.3-30.9-.6-43l.6-.6 136.1-136.1c71.1-71.1 186.8-71.1 257.9 0 71.1 71.1 71.1 186.8 0 257.9l-143.3 143.3z"/></svg></span> Link</a></h3>
                <ul class="tags">
                    <li v-for="tag in categories" :key="tag.index">
                        {{ tag }}
                    </li>
                </ul>
                <article v-html="project.acf.summary"></article>
            </div>
        </section>

        <main>
            <section v-for="section in project.acf.content" :key="section.index" v-bind:class="{ work_img: section.acf_fc_layout == 'image', work_vid: section.acf_fc_layout == 'video', full_width: section.media_size == 'full_width', contained: section.media_size == 'contained', contained_narrow: section.media_size == 'narrow' }">
                <responsiveimage v-if="section.acf_fc_layout == 'image'" :imageObj="section.image_content"/>
                <video v-if="section.acf_fc_layout == 'video'" controls muted>
                    <source :src="section.video_content.url" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </section>
        </main>

        <section class="next-prev-container">
            <a v-if="projectPrev" :href="'/work/' + projectPrev.id + '/' + projectPrev.slug" class="prev">
                <section><div class="arrow"><arrowleft/></div><h2>Previous project</h2></section>
            </a>
            <h2 v-else class="prev"></h2>


            <a v-if="projectNext" :href="'/work/' + projectNext.id + '/' + projectNext.slug" class="next">
                <section><div class="arrow"><arrowright/></div><h2>Next project</h2></section>
            </a>
            <h2 v-else class="next"></h2>
        </section>

    </div>
</template>

<script>

import arrowright from '~/components/icons/arrows/arrowright.vue'
import arrowleft from '~/components/icons/arrows/arrowleft.vue'
import responsiveimage from '~/components/responsiveimage.vue'

export default {
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },
    components: {
        arrowright,
        arrowleft,
        responsiveimage
    },
    mounted() {
        // console.log(this.project.acf.feature_image.alt);
        // console.log(this.projectNext);
    },
    computed: {
        project: function () {
            for (let p = 0; p < this.$store.state.projects.length; p++) {
                if (this.$store.state.projects[p].id == this.$route.params.id) {
                    return this.$store.state.projects[p]
                }
            }    
        },
        projectNext: function() {
            for (let p = 0; p < this.$store.state.projects.length; p++) {
                if (this.$store.state.projects[p].id == this.$route.params.id) {
                    return this.$store.state.projects[p + 1]
                }
            } 
        },
        projectPrev: function() {
            for (let p = 0; p < this.$store.state.projects.length; p++) {
                if (this.$store.state.projects[p].id == this.$route.params.id) {
                    return this.$store.state.projects[p - 1]
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

    .full_width, .contained, .contained_narrow {
        height: auto;
        display: block;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        img, video {
            width: 100%;
        }
    }
    .contained {
        max-width: 1200px;
    }
    .contained_narrow {
        max-width: 800px;
    }
    .hero-wrap {
        .hero-img {
            width: 100%;
            height: 0;
            padding-bottom: 50%;
            position: relative;
            @include breakpoint(tablet) {
                padding-bottom: 83.33333333%;
            }
            @include breakpoint(mobile) {
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
                font-family: "Bludhaven", Times, serif;
                font-size: 18px;
                letter-spacing: 1px;
                padding-top: 5px;
            }
            #link-svg {
                display: inline-block;
                width: 17px;
                height: 17px;
                padding-top: -2px;
                svg {
                    fill: $grey;
                    width: 100%;
                    height: auto;
                }
            }
        }
        .tags {
            margin: 20px auto;
            padding: 0;
            li {
                background: $gold;
                display: inline-block;
                padding: 5px 10px;
                border-radius: 5px;
                margin: 0 5px;
                color: $black;
            }
        }
    }
    .work_img {
        margin-bottom: 40px;
        img {
            width: 100%;
        }
    }
    .work_vid {
        margin-bottom: 40px;
        iframe {
            width: 100%;
        }
    }
    .next-prev-container {
        position: relative;
        width: 100%;
        h2 {
            font-family: 'NexaLight', Arial, Helvetica, sans-serif;
        }
        .next, .prev {
            position: absolute;
            width: 50%;
            padding: 40px;
            box-sizing: border-box;
            border-top: solid 2px $grey;
            @include breakpoint(mobile) {
                width: 100%;
                position: relative;
            }
            .arrow {
                width: 60px;
                display: inline-block;
                padding-bottom: 10px;
                svg {
                    width: 100%;
                    height: auto;
                    fill: $white;
                }
            }
        }
        .next {
            right: 0;
            text-align: right;
            border-left: solid 1px $grey;
        }
        .prev {
            border-right: solid 1px $grey;
            left: 0;
        }
    }
</style>

