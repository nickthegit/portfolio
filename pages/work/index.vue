<template>

    <div class="work-wrap">

        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->

                <div class="swiper-slide portfolio-slide"  v-for="project in projects" :key="project.index" :data-theme="project.lightTheme" :style="{ backgroundImage: 'url(' + project.featureImg + ')' }"  >
                    <h1>{{ project.title }}</h1>
                    <div class="fullscreen-bg" v-if="project.video">
                        <video autoplay loop muted>
                            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
                            <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.ogg" type="video/ogg">
                            <!-- Your browser does not support HTML5 video. -->
                        </video>
                    </div>
                </div>
            </div>

            <!-- If we need scrollbar -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>

        <div class="swiper-pagination-nav-wrap">
            <div class="button-prev select-none"><ArrowLeft/></div>
            <div class="pagination select-none"></div>
            <div class="button-next select-none"><ArrowRight/></div>
        </div>

    </div>

</template>

<script>
import VanillaTilt from 'vanilla-tilt'
import Swiper from 'swiper'

import ArrowRight from '~/components/icons/arrows/ArrowRight.vue'
import ArrowLeft from '~/components/icons/arrows/ArrowLeft.vue'

export default {
    components: {
        ArrowRight,
        ArrowLeft
    },
    mounted() {
        if (process.browser) {
            
            const windowWidth = window.innerWidth;
            let portfolioSlides = document.getElementsByClassName('portfolio-slide')
            var myArr = Array.from(portfolioSlides);

            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                // direction: 'vertical',
                effect: 'fade',
                spaceBetween: 40,
                // mousewheel: {
                //     invert: false,
                // },
                // loop: true,
                on: {
                    init: function () {
                        if (myArr[0].dataset.theme == 'true') {
                            document.body.classList.add("body-light");
                        } else {
                            document.body.classList.remove("body-light");
                        }
                    },
                },
                // If we need pagination
                pagination: {
                    el: '.pagination',
                    type: 'fraction',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                el: '.swiper-scrollbar',
                },
            })

            // mySwiper.on('slideChange', function () {
            //     console.log(this);
            // });


            mySwiper.on('slideChange', function () {
                if (myArr[mySwiper.activeIndex].dataset.theme == 'true') {
                    document.body.classList.add("body-light");
                } else {
                    document.body.classList.remove("body-light");
                }
            });


            // let slideTilt = document.querySelector(".swiper-wrapper");
            // VanillaTilt.init(slideTilt, {max: 25, speed: 200});

            // mySwiper.on('slideChangeTransitionStart', function () {
            //     // console.log('start');
            //     // slideTilt.vanillaTilt.destroy();
            // });

            // mySwiper.on('slideChangeTransitionEnd', function () {
            //     // console.log('end');
            //     // VanillaTilt.init(slideTilt, {max: 25, speed: 200});
            // });

        }
    },  
    data() {
        return { 
            projects: [
                {   
                    slug: 'project1',
                    title: 'Title here',
                    featureImg: 'http://via.placeholder.com/1920x1080/fbaf5d',
                    video: '',
                    lightTheme: true
                },
                {   
                    slug: 'project2',
                    title: 'Title here2',
                    featureImg: 'http://via.placeholder.com/1920x1080/f49ac1',
                    video: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
                    lightTheme: true
                },
                {   
                    slug: 'project3',
                    title: 'Title here3',
                    featureImg: 'http://via.placeholder.com/1920x1080/c4df9b',
                    video: '',
                    lightTheme: false
                },
                {   
                    slug: 'project4',
                    title: 'Title here4',
                    featureImg: 'http://via.placeholder.com/1920x1080/d7d7d7',
                    video: '',
                    lightTheme: true
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    @import "~/assets/sass/components/_swiper.scss";

    .work-wrap {
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: hidden;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
        margin: 0;
        background: darkgoldenrod;
    }
    .swiper-pagination-nav-wrap {
        // width: 100%;
        height: $headerheight;
        position: absolute;
        background: $white;
        bottom: 0;
        right: 0;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .pagination {
        font-family: "Bludhaven", Times, serif;
        width: auto;
        min-width: 80px;
        text-align: center;
        font-size: 18px;
        color: $black;
        // background: darkmagenta;
        padding: 10px;
        box-sizing: border-box;
    }
    .button-prev, .button-next {
        padding: 20px;
        display: flex;
        box-sizing: border-box;
        cursor: pointer;
        width: $headerheight;
        height: $headerheight;
        svg {
            display: block;
            width: 100%;
            fill: $black;
        }
    }
    // .button-prev {
    //     // background: darkgray;
    // }
    // .button-next {
    //     width: $headerheight;
    //     height: $headerheight;
    //     // background: darkkhaki;
    // }
    .portfolio-slide {
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        img, h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            // transform: translate(-50%, -50%);
            transform: translate(-50%, 100%);
            transition: all 0.5s ease-out;
            opacity: 0;
            transition-delay: 0.5s;
        }
        h1 {
            font-size: 12vh;
            text-transform: uppercase;
            width: 100%;
            text-align: center;
            z-index: 1;

        }
        .fullscreen-bg {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
            z-index: -100;
            video {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        @media (min-aspect-ratio: 16/9) {
            .fullscreen-bg {
                video {
                    height: 300%;
                    top: -100%;
                }
            }
        }

        @media (max-aspect-ratio: 16/9) {
            .fullscreen-bg {
                video {
                    width: 300%;
                    left: -100%;                    
                }
            }
        }

        @media (max-width: 767px) {
            .fullscreen-bg {
                display: none;
                video {
                    display: none;
                }
            }
        }

        img {
            width: auto;
            // max-width: 40%;
            height: 100%;
            max-height: 50%;
            z-index: 2;
            transition-delay: 0.7s;
        }
        &.swiper-slide-active {
            h1 {
                transform: translate(-50%, -50%);
                opacity: 1;
            }
            img {
                transform: translate(-50%, -50%);
                opacity: 1;
            }
        }
        &.swiper-slide-prev {
            h1 {
                transform: translate(-50%, -100%);
                opacity: 0;
                transition-delay: 0s;
            }   
            img {
                transform: translate(-50%, -100%);
                opacity: 0;
                transition-delay: 0s;
                // transition-delay: 0.1s;
            }         
        }
    }
</style>

