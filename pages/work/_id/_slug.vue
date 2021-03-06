<template>
    <div class="work-item-page">
        <div class="screen-half"></div>
        <section class="hero-wrap">
            <div v-if="project.acf.feature_image" class="hero-img full_width">
                <responsiveimage :imageObj="project.acf.feature_image"/>
            </div>
            <div class="hero-text-wrap contained_narrow">
                <h1 v-if="project.acf.project_title">{{ project.acf.project_title }}</h1>
                <h3><a v-if="project.acf.employer">{{ project.acf.employer }} </a><a v-if="project.acf.link" :href="project.acf.link" target="_blank">| <span id="link-svg"><svg viewBox="0 0 800 800"><path d="M321.2 736.73782c-71.1 71.1-186.8 71.1-257.9 0-71.1-71.1-71.1-186.8 0-257.9l143.3-143.3c71.1-71.1 186.8-71.1 257.9 0 10.5 10.5 30.3 26.2 30.2 42.9-.1 16.8-13.7 30.3-30.5 30.3-16.7-.1-30.2-13.6-42.7-30.2-48-48-123.9-48-171.9 0l-143.3 143.3c-48 48-48 123.9 0 171.9s123.9 48 171.9 0l136.1-136.1c11.7-12 31-12.3 43-.6 12 11.7 12.3 31 .6 43l-.6.6-136.1 136.1zm272.2-272.3c-71.1 71.1-186.8 71.1-257.9 0-11.9-11.9-11.9-31.1 0-43 11.9-11.9 31.1-11.9 43 0 48 48 123.9 48 171.9 0l143.3-143.3c48-48 48-123.9 0-171.9s-123.9-48-171.9 0l-136.1 136.1c-11.7 12-30.9 12.3-43 .6-12-11.7-12.3-30.9-.6-43l.6-.6 136.1-136.1c71.1-71.1 186.8-71.1 257.9 0 71.1 71.1 71.1 186.8 0 257.9l-143.3 143.3z"/></svg></span> Link</a></h3>
                <ul v-if="project.categories" class="tags">
                    <li v-for="tag in project.categories" :key="tag.index">
                        {{ tag }}
                    </li>
                </ul>
                <article v-if="project.acf.summary" v-html="project.acf.summary"></article>
            </div>
        </section>

        <main>
            <section class="wp_section" v-for="section in project.acf.content" :key="section.index" v-bind:class="{ work_img: section.acf_fc_layout == 'image', work_vid: section.acf_fc_layout == 'video', full_width: section.media_size == 'full_width', contained: section.media_size == 'contained', contained_narrow: section.media_size == 'narrow' }">
                <responsiveimage v-if="section.acf_fc_layout == 'image'" :imageObj="section.image_content"/>
                <video v-if="section.acf_fc_layout == 'video'" controls muted  :poster="project.acf.feature_image.sizes.tablet_img_large_cropped">
                    <source :src="section.video_content.url" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </section>
        </main>

        <section class="next-prev-container">
            <nuxt-link v-if="project.prev" :to="'/work/' + project.prev.id + '/' + project.prev.slug" class="prev">
                <section><div class="arrow"><arrowleft/></div><h2>Previous project</h2></section>
            </nuxt-link>
            <h2 v-else class="prev"></h2>

            <nuxt-link v-if="project.next" :to="'/work/' + project.next.id + '/' + project.next.slug" class="next">
                <section><div class="arrow"><arrowright/></div><h2>Next project</h2></section>
            </nuxt-link>
            <h2 v-else class="next"></h2>
        </section>

    </div>
</template>

<script>
import TweenMax from 'gsap'

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
    transition: {
        duration: 750,
        css: false
    },
    transition (to, from) {
        return {
            beforeEnter(el) {
                if(to.path == this.$store.state.slugPage.next) {
                    TweenMax.set(el, {x: '50%', autoAlpha: 0 })
                } else if(to.path == this.$store.state.slugPage.prev) {
                    TweenMax.set(el, {x: '-50%', autoAlpha: 0 })
                } else {            
                    TweenMax.set('.screen-half', {x: '0%', autoAlpha: 1, width: '100%'})
                }
            },
            enter(el, done) {
                if(from.path == this.$store.state.slugPage.prev) {
                    TweenMax.to(el, 0.5, { x: '0%', autoAlpha: 1, onComplete:done, ease: Power1.easeInOut }); 
                } else if(from.path == this.$store.state.slugPage.next) {
                    TweenMax.to(el, 0.5, { x: '0%', autoAlpha: 1, onComplete:done, ease: Power1.easeInOut }); 
                } else {
                    TweenMax.to('.screen-half', 0.75, { x: '-100%', onComplete:done, ease: Power1.easeInOut }).delay(0.05); 
                }
            },
            afterEnter(el) {
                if(from.path == this.$store.state.slugPage.prev || from.path == this.$store.state.slugPage.next) {
                    TweenMax.set(el, {x: '0%', autoAlpha: 1 })
                } else {  
                    TweenMax.set(el, {x: '0%', autoAlpha: 1 })
                    TweenMax.set('.screen-half', {x: '100%', autoAlpha: 0, width: '0%'})
                }
            },
            enterCancelled(el) {},
            beforeLeave(el) {
                if(to.path == this.$store.state.slugPage.next || to.path == this.$store.state.slugPage.prev) {
                    TweenMax.set(el, {x: '0%', autoAlpha: 1 })
                } else {  
                    TweenMax.set(el, {x: '0%', autoAlpha: 1 })
                    TweenMax.set('.screen-half', {x: '100%', autoAlpha: 1, width: '100%'})
                }
            },
            leave(el, done) {
                if(to.path == this.$store.state.slugPage.next) {
                    TweenMax.to(el, 0.5, { x: '-50%', autoAlpha: 0, onComplete:done, ease: Power1.easeInOut }); 
                } else if(to.path == this.$store.state.slugPage.prev) {
                    TweenMax.to(el, 0.5, { x: '50%', autoAlpha: 0, onComplete:done, ease: Power1.easeInOut }); 
                } else {
                    TweenMax.to('.screen-half', 0.75, { x: '0%', onComplete:done, ease: Power1.easeInOut }).delay(0.05); 
                }
            },
            afterLeave(el){
                if(to.path == this.$store.state.slugPage.next || to.path == this.$store.state.slugPage.prev) {
                    TweenMax.set(el, {x: '0%', autoAlpha: 1 })
                } else {  
                    TweenMax.set(el, {x: '0%', autoAlpha: 1 })
                    TweenMax.set('.screen-half', {x: '0%', autoAlpha: 0, width: '0%'})
                }
            },
            leaveCancelled(el) {}
        }
    },
    mounted() {
        if (process.browser) {

            require('waypoints/lib/noframework.waypoints.min');
            var lzyld = document.querySelectorAll('.wp_section');
            for (let i = 0; i < lzyld.length; i++) {
                TweenMax.set(lzyld[i], {autoAlpha: 0, y: 100})
                var waypoint = new Waypoint({
                    element: lzyld[i],
                    handler: function(direction) {
                        if(direction == 'down') {
                            // console.log(this)
                            TweenMax.to(lzyld[i], 0.5, {autoAlpha: 1, y: 0})
                        }
                    },
                    offset: '90%'
                })
                
            }

            // add current/prev/next slug o store to get in transition function
            this.$store.commit('changeSlugState', {
                current: '/work/' + this.project.id + '/' + this.project.slug,
                prev: (!this.project.prev) ? '' : '/work/' + this.project.prev.id + '/' + this.project.prev.slug,
                next: (!this.project.next) ? '' : '/work/' + this.project.next.id + '/' + this.project.next.slug                
            })

            // console.log(this.project);
            // console.log(this.project.acf.project_title);
        }
    },
    computed: {
        project: function() {
            var projObj;
            var cats = [];

            for (let p = 0; p < this.$store.state.projects.length; p++) {
                if (this.$store.state.projects[p].id == this.$route.params.id) {
                    for (let i = 0; i < this.$store.state.projects[p].categories.length; i++) {
                        for (let c = 0; c < this.$store.state.categories.length; c++) {
                            if (this.$store.state.categories[c].id == this.$store.state.projects[p].categories[i]) {
                                cats.push(this.$store.state.categories[c].name);
                            } 
                        }
                    }
                    projObj = { 
                        ...this.$store.state.projects[p], 
                        prev: this.$store.state.projects[p-1],
                        next: this.$store.state.projects[p+1],
                        categories: cats,
                    }
                }
            }  
            return projObj
        }
    },
    head() {
        return {
            title: 'Nick John - ' + this.project.acf.project_title
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    .work-item-page {
        position: absolute;
        top: 0;
        text-align: center;
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
                margin: 5px;
                color: $black;
            }
        }
    }
    .wp_section {
        opacity: 0;
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
            text-align: left;
            left: 0;
        }
        @include breakpoint(mobile) {
            .next, .prev {
                // position: relative;
                position: absolute;
                width: 50%;
                display: inline-block;
                // border-right: none;
                // border-left: none;
                h2 {
                    display: none;
                }
                .arrow {
                    padding-bottom: 0;
                }
            }
        }
    }
</style>

