<template>
  <div class="main-container">
    <main>
      <section class="contained">
        <h1>Hello.</h1>
        <h2>I'm Nick, I live in the UK and I code frontend experiences at Rosie Lee. </h2>
        <div class="social_home">
          <a href="https://github.com/nickthegit" target="_blank"><github/></a>
          <a href="https://codepen.io/jonserness/" target="_blank"><codepen/></a>
          <a href="https://www.linkedin.com/in/nick-john-a310a753/" target="_blank"><linkedin/></a>
        </div>
        <nuxt-link class="my_work" to="/work">View my work <span><arrowright/></span></nuxt-link>
      </section>
    </main>
  </div>
</template>

<script>

import TweenMax from 'gsap'

// import textblock from "~/components/textblock.vue"
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
      tagline: 'UX/UI & Frontend developer<br> at Rosie Lee',
      aboutSections: {
        section1: {
          title: 'Intro',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>Content goes here',
          class: 'statement1'
        },
        section2: {
          title: 'Experience',
          content: 'Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>Content goes here',
          class: 'statement2'
        },
        skills: [
          {
            name: 'name1',
            slug: 'slug1',
            imgUrl: 'http://via.placeholder.com/350x350/fbaf5d'
          },
          {
            name: 'name2',
            slug: 'slug2',
            imgUrl: 'http://via.placeholder.com/350x350/b4dc9b'
          },
          {
            name: 'name3',
            slug: 'slug3',
            imgUrl: 'http://via.placeholder.com/350x350/f49ac1'
          },
          {
            name: 'name4',
            slug: 'slug4',
            imgUrl: 'http://via.placeholder.com/350x350/d7d7d7'
          },
          {
            name: 'name1',
            slug: 'slug1',
            imgUrl: 'http://via.placeholder.com/350x350/c4df9b'
          },
          {
            name: 'name2',
            slug: 'slug2',
            imgUrl: 'http://via.placeholder.com/350x350/0076a3'
          },
          {
            name: 'name3',
            slug: 'slug3',
            imgUrl: 'http://via.placeholder.com/350x350/ed1c24'
          },
          {
            name: 'name4',
            slug: 'slug4',
            imgUrl: 'http://via.placeholder.com/350x350/ec008c'
          },
          {
            name: 'name1',
            slug: 'slug1',
            imgUrl: 'http://via.placeholder.com/350x350/fbaf5d'
          },
          {
            name: 'name2',
            slug: 'slug2',
            imgUrl: 'http://via.placeholder.com/350x350/b4dc9b'
          },
          {
            name: 'name3',
            slug: 'slug3',
            imgUrl: 'http://via.placeholder.com/350x350/f49ac1'
          },
          {
            name: 'name4',
            slug: 'slug4',
            imgUrl: 'http://via.placeholder.com/350x350/d7d7d7'
          }
        ]

      },
      contact: {
        title: 'Say hello',
        email: '<a href="mailto:hello@nickjohn.co.uk?subject=Hello">hello@nickjohn.co.uk</a>'
      }
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
    }
    .social_home {
      background: green;
      display: inline-block;
      a {
          width: 22px;
          height: 22px;
          display: inline-block;
          // background: fuchsia;
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
      background: violet;
      display: flex;
      // flex-wrap: wrap;
      align-content: flex-start;
      max-width: 500px;
      span {
        display: inline-block;
        width: auto;
        height: 15px;
        svg {
          width: auto;
          height: 100%;
          fill: $grey;
        }
      }
    }

 
</style>
