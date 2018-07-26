<template>
  <div class="main-container">
    <main>
      <section class="contained" id="home_wrap">
        <h1>{{ pageData.acf.jumbotron }}</h1>
        <h2>{{ pageData.acf.intro_text }}</h2>
        <nuxt-link class="my_work" to="/work">View my work <span><arrowright/></span></nuxt-link>
      </section>
    </main>
  </div>
</template>

<script>

import TweenMax from 'gsap'

import github from "~/components/icons/github.vue"
import codepen from "~/components/icons/codepen.vue"
import linkedin from "~/components/icons/linkedin.vue"
import arrowright from '~/components/icons/arrows/arrowright.vue'

export default {
  components: { 
    github,
    codepen,
    linkedin,
    arrowright
  },
  transition: {
    duration: 5000,
    css: false,
    beforeEnter(el) {
      TweenMax.set('#home_wrap h1, #home_wrap h2, #home_wrap a', {x: -100, autoAlpha: 0})
    },
    enter(el, done) {
      var tl = new TimelineLite({onComplete:done, ease: Back.easeInOut.config(1.7)});
      tl.to('#home_wrap h1', 0.5, { x: 0, autoAlpha: 1 })
        .to('#home_wrap h2', 0.5, { x: 0, autoAlpha: 1 }, "-=0.25")
        .to('#home_wrap a', 0.5, { x: 0, autoAlpha: 1 }, "-=0.35")
    },
    afterEnter(el) {},
    enterCancelled(el) {},
    beforeLeave(el) {},
    leave(el, done) {
      var tl = new TimelineLite({onComplete:done, ease: Back.easeInOut.config(1.7)});
      tl
        .to('#home_wrap a', 0.5, { x: -100, autoAlpha: 0 })
        .to('#home_wrap h2', 0.5, { x: -100, autoAlpha: 0 }, "-=0.25")
        .to('#home_wrap h1', 0.5, { x: -100, autoAlpha: 0 }, "-=0.35")
    },
    // appear() {
    //   console.log('whhaatt');
      
    // },
    afterLeave(el){},
    leaveCancelled(el) {}
  },
  computed: {
    pageData: function() {
      return this.$store.state.pages[0]
    }
  },
  mounted() {
    if (process.browser) {

      // console.log(this.$store.state.categories);
      // console.log(this.$store.state.projects);
      
      document.querySelector('body').classList.remove('body-light');
      
      var w = window.innerWidth;
      var h = window.innerHeight;
    }
  },
  head() {
    return {
      htmlAttrs: {
          class: 'home-page'
      }
    }
  }
}

</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    main {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      align-items: center;
    }
    section {
      padding: 40px;
      h1 {
        font-size: 12vh;
      }
      h2 {
        font-family: "Bludhaven", Times, serif;
        font-weight: 400;
        font-size: 3.5vh;
        max-width: 720px;
      }
      @include breakpoint(tablet-mobile) { 
        h2 {
          font-size: 3vh;
        }
      }
    }
    .social_home {
      display: inline-block;
      a {
        width: 22px;
        height: 22px;
        display: inline-block;
        margin: 5px 10px 0 0 ;
        padding: 5px 5px 5px 0;
        svg {
          height: 100%;
          stroke: $grey;
        }
        &:hover {
          svg {
              stroke: $darkgrey;
          }                    
        }
      }
    }
    .my_work {
      display: flex;
      align-items: center;
      max-width: 500px;
      margin-top: 20px;
      font-size: 2.6vh;
      color: $grey;
      font-family: "NexaLight", Arial, Helvetica, sans-serif;
      text-decoration: underline;
      span {
        text-decoration: underline;
        display: inline-block;
        width: auto;
        height: 15px;
        padding-left: 15px;
        svg {
          width: auto;
          height: 100%;
          fill: $grey;
        }
      }
      @include breakpoint(tablet) { 
        span {
          height: 22px;
        }
        font-size: 2.9vh;
      }
      @include breakpoint(mobile) { 
        span {
          height: 16px;
        }
        font-size: 3vh;
      }
    }

 
</style>
