<template>
  <div class="main-container">
  {{ dav }}

    <!-- Slider main container -->
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>

    <!-- <div id="trigger"></div>
    <section id="section1" class="home-landing">
      <div class="profile-image">
        <img src="~/assets/img/nj-profile.png">
      </div>
      <div class="hero-title">
          <h1>{{ name }}</h1>
          <h2 v-html="tagline"></h2>
      </div>
    </section>
    <section id="section2" class="contain">
      <TextBlock :title="aboutSections.section1.title" :h2Content="aboutSections.section1.content" :classOf="aboutSections.section1.class" />
    </section>
    <section id="section3" class="contain">
      <TextBlock :title="aboutSections.section2.title" :h2Content="aboutSections.section2.content" :classOf="aboutSections.section2.class" />
      <div class="skills-wrap">
        <div class="skill" v-for="skill in aboutSections.skills" :key="skill.index">
          <img :src="skill.imgUrl" alt="">
         
        </div>
      </div>
    </section>
    <section id="section4" class="contain">
      <TextBlock :title="contact.title" :h2Content="contact.email"/>
    </section> -->

  </div>
</template>

<script>

import TweenMax from 'gsap'
import Swiper from 'swiper'
// import fullpage from 'fullpage.js'

import TextBlock from "~/components/textblock.vue"

export default {
  components: { 
    TextBlock
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

      console.log(this.$store.state.siteData);
      
      document.querySelector('body').classList.remove('body-light');
      
      var w = window.innerWidth;
      var h = window.innerHeight;

      // console.log($('#fullpage'));

      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        speed: 600,
        // grabCursor: true,
        preventInteractionOnTransition: true,
        mousewheel: {
          invert: true,
          forceToAxis: true,
          sensitivity: 0.5
        },

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

     

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

  #trigger {
    position: absolute;
    top: 55vh;
  }

  #section2 .textBlock, .skill, #section3 .textBlock, #section4 .textBlock {
    visibility: hidden;
  }

  @import "~/assets/sass/base/_variables.scss";
  @import "~/assets/sass/base/_mediaquery.scss";

  @import "~/assets/sass/components/_swiper.scss";

  .main-container {
    /* padding: 80px; */
    // height: 1300vh;
    width: 100%;
    max-width: 1260px;
    position: absolute;
    top: 0;
    left: 0;
    // background: olive;
    overflow: scroll;
    transition: all .3s ease-out;
  }

  .swiper-container {
    width: 100%;
    height: 100vh;
    .swiper-slide {
      &:nth-child(odd) {
        background: green;
      }
    }
  }

  .home-landing {
      position: fixed;
      top: 0;
      left: 0;
    .profile-image {
      width: 55%;
      position: absolute;
      height: 100%;
      right: 0;
      bottom: 0;
      opacity: 0.7;
      img {
        height: 100%;
        width: auto;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
    .hero-title {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, 60%);
      h1 {
        font-size: 6vh;
        margin: 0;
        padding: 0;
      }
      h2 {
        font-family: 'Bludhaven';
        color: $grey;
        font-weight: 400;
        font-size: 2.8vh;
        line-height: 3.6vh;
      }
    }

  }
  #section2 {
    .textBlock {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);    
    }
  }
  #section3 {
    .skills-wrap {
      position: absolute;
      width: 50%;
      height: 100%;
      top: 0;
      right: 0;
      padding: ($headerheight * 2) 5%;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: flex-start;
      align-content: center;
    } 
    .skill {
      width: 20%;
      height: auto;
      margin: 5%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .textBlock {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);    
    }   
  }
  #section4 {
      display: flex;
      align-items: center; 
  }

  @include breakpoint(tablet-mobile) {
    .home-landing {
      .profile-image {
        width: 80%;
        img {
          height: 95%;
        }
      }
    }
    #section3 {
      .skills-wrap {
        position: absolute;
        width: 100%;
        height: 50%;
        top: 0;
        padding-top: ($headerheight * 3);
      } 
      .skill {
        width: 13%;
        margin: 2% 4%;
      }
      .textBlock {
        position: absolute;
        top: initial;
        transform: translateY(0);
        bottom: 0;   
        height: 50%; 
        display: flex;
        flex-direction: column;
        justify-content: center;
      }   
    }
  }
</style>
