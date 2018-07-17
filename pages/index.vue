<template>
  <div class="main-container">
    <main>
      <section class="contained">
        <h1>Hello.</h1>
        <h2>I'm Nick, I live in the UK and I code frontend experiences at Rosie Lee. </h2>
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
  data() {
    return {
      dav: this.$store.state.siteData,
      name: 'Nick John',
      intro: "I'm Nick, I live in the UK and I code frontend<br> experiences at Rosie Lee."
    }
  },
  mounted() {
    if (process.browser) {

        if (this.$store.state.workState == true ) {
            fullpage_api.destroy('all')
        } 

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
          font-size: 2.8vh;
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
      font-size: 2.4vh;
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
    }

 
</style>
