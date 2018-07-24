<template>

    <section>
        <div class="screen-half"></div>
        <div class="work-wrap" id="work">
            <div v-for="project in projects" :key="project.index" class="section work-item" @click="toCaseStudy(project.id, project.slug)" :style="{ backgroundImage: 'url(' + project.acf.feature_image.url + ')' }">
                <div class="section_wrap">
                    <div class="title_wrap">
                        <h1 id="titleText" class="titleH1">{{ project.acf.project_title }}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav_indicator">
            <span id="nav_score">1</span> / <span>{{ projects.length }}</span> 
        </div>
    </section>

</template>

<script>

import TweenMax from 'gsap'

import arrowright from '~/components/icons/arrows/arrowright.vue'
import arrowleft from '~/components/icons/arrows/arrowleft.vue'

export default {
    components: {
        arrowright,
        arrowleft
    },
    data() {
        return {
            activeSlide: 1
        }
    },
    transition: {
        duration: 750,
        css: false,
        beforeEnter(el) {
            TweenMax.set('.screen-half', {x: '0%', autoAlpha: 1, width: '100%'})
        },
        enter(el, done) {
            TweenMax.to('.screen-half', 0.75, { x: '-100%', onComplete:done, ease: Power1.easeInOut }).delay(0.05); 
        },
        afterEnter(el) {
            TweenMax.set('.screen-half', {x: '100%', autoAlpha: 0, width: '0%'})
        },
        enterCancelled(el) {},
        beforeLeave(el) {
            TweenMax.set('.screen-half', {x: '100%', autoAlpha: 1, width: '100%'})
        },
        leave(el, done) {
            TweenMax.to('.screen-half', 0.75, { x: '0%', onComplete:done, ease: Power1.easeInOut }); 
        },
        afterLeave(el){
            TweenMax.set('.screen-half', {x: '0%', autoAlpha: 0, width: '0%'})
        },
        leaveCancelled(el) {}
    },
    mounted(context) {
        
        if (process.browser) {
            
            // const windowWidth = window.innerWidth;
            // console.log(this.$store.state.projects);
            // console.log(this.projects.length);

            require('~/assets/js/fittext.js')
            require('~/assets/js/SplitText')
            var fullpage = require('fullpage.js')

            window.fitText( document.querySelectorAll(".titleH1") );

            var titles = document.querySelectorAll(".titleH1")
            var titleArr = []
            for (let i = 0; i < titles.length; i++) {
                var splitTitle = new SplitText(titles[i], {type:"words,chars"}); 
                titleArr.push(splitTitle);
            }
            
            var navScore = document.getElementById('nav_score')
            // console.log(titleArr);
            

            // var splitTitle = new SplitText(".titleH1", {type:"chars"}); 

            // console.log(splitTitle);
            
    
            new fullpage('#work', {
                autoScrolling:true,
                scrollingSpeed: 700,
                // navigation: true,
                // navigationPosition: 'right',
                easingcss3: 'cubic-bezier(1.000, -0.040, 0.540, 1.005)',
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                afterRender: function(){
                    // console.log(this.index);
                    var tl = new TimelineLite
                    tl.staggerFrom(titleArr[this.index].chars, 0.8, {opacity:0, scale:0.5, y:80, rotationX:90, transformOrigin:"0% 0 0",  ease:Back.easeOut}, 0.015, "+=0.5");
                    tl.delay(0.75); 
                    navScore.innerHTML = this.index + 1
                },
                onLeave: function(origin, destination, direction){
                    // var leavingSection = this;
                    // console.log(destination);

                    var tl = new TimelineLite
                    tl.staggerFrom(titleArr[destination.index].chars, 0.8, {opacity:0, scale:0.5, y:80, rotationX:90, transformOrigin:"0% 0 0",  ease:Back.easeOut}, 0.015, "+=0.5");

                    navScore.innerHTML = destination.index + 1
                    
                    // //after leaving section 2
                    // if(origin.index == 1 && direction =='down'){
                    //     alert("Going to section 3!");
                    // }

                    // else if(origin.index == 1 && direction == 'up'){
                    //     alert("Going to section 1!");
                    // }
                }
            });
            if (this.$store.state.workState == false ) {
                this.$store.commit('toggleFullPage', true)
            }

        }
    },  
    computed: {
        projects: function() {
            return this.$store.state.projects
        },
        spanHeight: function() {
            var val = 100 / this.projects.length + '%'
            return val
        }
    },
    methods: {
        toCaseStudy(id, slug) {
            // console.log(slug + ' ' + id);
            this.$router.push('/work/' + id + '/' + slug)
        },
        goToTarget(val) {
            console.log(val);
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    .work-item {
        background-position: 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .section_wrap {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .title_wrap {
        display: block;
        position: absolute;
        // max-width: 80%;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    h1 {
        font-size: 8vh;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-align: center;
        word-break: keep-all;
        // @include breakpoint(tablet) { 
        //     font-size: 7vh;
        // }
        // @include breakpoint(mobile) { 
        //     font-size: 4.5vh;
        // }
    }
    .nav_indicator {
        display: block;
        position: fixed;
        z-index: 2;
        bottom: 15px;
        font-size: 30px;
        padding: 20px;
        box-sizing: border-box;
        left: 50%;
        transform: translateX(-50%)
    }

</style>

