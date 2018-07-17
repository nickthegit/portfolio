<template>

    <div class="work-wrap" id="work">
        <div v-for="project in projects" :key="project.index" class="section work-item" @click="toCaseStudy(project.id, project.slug)" :style="{ backgroundImage: 'url(' + project.acf.feature_image.url + ')' }">
            <h1>{{ project.acf.project_title }}</h1>
        </div>
    </div>

</template>

<script>

import arrowright from '~/components/icons/arrows/arrowright.vue'
import arrowleft from '~/components/icons/arrows/arrowleft.vue'

export default {
    components: {
        arrowright,
        arrowleft
    },
    mounted(context) {
        
        if (process.browser) {
            
            // const windowWidth = window.innerWidth;
            console.log(this.$store.state.projects);
            console.log(this.$store.state.workState);
            
            var fullpage = require('fullpage.js')
    
            new fullpage('#work', {
                autoScrolling:true,
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
            });
            if (this.$store.state.workState == false ) {
                this.$store.commit('toggleFullPage', true)
            }

        }
    },  
    computed: {
        projects: function() {
            return this.$store.state.projects
        }
    },
    methods: {
        toCaseStudy(id, slug) {
            // console.log(slug + ' ' + id);
            this.$router.push('/work/' + id + '/' + slug)
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    // @import "~/assets/sass/components/_swiper.scss";

    .work-item {
        .fp-tableCell {
            display: flex;
            align-items: center;
            justify-content: center;
            h1 {
                display: inline;
            }
        }
    }

    // .work-wrap {
    //     width: 100%;
    //     height: 100%;
    //     position: fixed;
    //     overflow: hidden;
    // }
    // .swiper-container {
    //     width: 100%;
    //     height: 100%;
    //     margin: 0;
    // }
    // .swiper-pagination-nav-wrap {
    //     // width: 100%;
    //     height: $headerheight;
    //     position: absolute;
    //     background: $white;
    //     bottom: 0;
    //     right: 0;
    //     z-index: 99;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    // }
    // .pagination {
    //     font-family: "Bludhaven", Times, serif;
    //     width: auto;
    //     min-width: 80px;
    //     text-align: center;
    //     font-size: 18px;
    //     color: $black;
    //     // background: darkmagenta;
    //     padding: 10px;
    //     box-sizing: border-box;
    // }
    // .button-prev, .button-next {
    //     padding: 20px;
    //     display: flex;
    //     box-sizing: border-box;
    //     cursor: pointer;
    //     width: $headerheight;
    //     height: $headerheight;
    //     svg {
    //         display: block;
    //         width: 100%;
    //         fill: $black;
    //     }
    // }
    // // .button-prev {
    // //     // background: darkgray;
    // // }
    // // .button-next {
    // //     width: $headerheight;
    // //     height: $headerheight;
    // //     // background: darkkhaki;
    // // }
    // .portfolio-slide {
    //     background-position: 50%;
    //     background-repeat: no-repeat;
    //     background-size: cover;
    //     cursor: pointer;
    //     img, h1 {
    //         position: absolute;
    //         top: 50%;
    //         left: 50%;
    //         // transform: translate(-50%, -50%);
    //         transform: translate(-50%, 100%);
    //         transition: all 0.5s ease-out;
    //         opacity: 0;
    //         transition-delay: 0.5s;
    //     }
    //     h1 {
    //         font-size: 12vh;
    //         text-transform: uppercase;
    //         width: 100%;
    //         text-align: center;
    //         z-index: 1;

    //     }
    //     .fullscreen-bg {
    //         position: fixed;
    //         top: 0;
    //         right: 0;
    //         bottom: 0;
    //         left: 0;
    //         overflow: hidden;
    //         z-index: -100;
    //         video {
    //             position: absolute;
    //             top: 0;
    //             left: 0;
    //             width: 100%;
    //             height: 100%;
    //         }
    //     }
    //     @media (min-aspect-ratio: 16/9) {
    //         .fullscreen-bg {
    //             video {
    //                 height: 300%;
    //                 top: -100%;
    //             }
    //         }
    //     }

    //     @media (max-aspect-ratio: 16/9) {
    //         .fullscreen-bg {
    //             video {
    //                 width: 300%;
    //                 left: -100%;                    
    //             }
    //         }
    //     }

    //     @media (max-width: 767px) {
    //         .fullscreen-bg {
    //             display: none;
    //             video {
    //                 display: none;
    //             }
    //         }
    //     }

    //     img {
    //         width: auto;
    //         // max-width: 40%;
    //         height: 100%;
    //         max-height: 50%;
    //         z-index: 2;
    //         transition-delay: 0.7s;
    //     }
    //     &.swiper-slide-active {
    //         h1 {
    //             transform: translate(-50%, -50%);
    //             opacity: 1;
    //         }
    //         img {
    //             transform: translate(-50%, -50%);
    //             opacity: 1;
    //         }
    //     }
    //     &.swiper-slide-prev {
    //         h1 {
    //             transform: translate(-50%, -100%);
    //             opacity: 0;
    //             transition-delay: 0s;
    //         }   
    //         img {
    //             transform: translate(-50%, -100%);
    //             opacity: 0;
    //             transition-delay: 0s;
    //             // transition-delay: 0.1s;
    //         }         
    //     }
    // }
</style>

