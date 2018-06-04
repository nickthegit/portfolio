<template>
  <div class="main-container">
    <div id="trigger"></div>
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
          <!-- content -->
        </div>
      </div>
    </section>
    <section id="section4" class="contain">
      <TextBlock :title="contact.title" :h2Content="contact.email"/>
    </section>
  </div>
</template>

<script>

import TextBlock from "~/components/TextBlock.vue"

export default {
  components: { 
    TextBlock
  },
  data() {
    return {
      name: 'Nick John',
      tagline: 'Frontend developer<br> at Rosie Lee',
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
        title: 'Contact',
        email: '<a href="mailto:hello@nickjohn.co.uk?subject=Hello">hello@nickjohn.co.uk</a>'
      }
    }
  },
  mounted() {
    if (process.browser) {
    
      var w = window.innerWidth;
      var h = window.innerHeight;

      var tl = new TimelineLite();

      //add a from() tween at the beginning of the timline
      tl.to('.hero-title', 1, { y: "-100vh", autoAlpha:0 } )
        .to('.profile-image', 1, { y: "-50vh", autoAlpha:0}, "-=0.25")
        .set("body", {className:"+=body-light"})
        ;

      var section2TL = new TimelineLite();
        section2TL.from('#section2 .textBlock', 1, { y: "200vh", autoAlpha:0 } )                  
        ;

      var section3TL = new TimelineLite();
        section3TL.to('#section2', 1, { y: "-200vh", autoAlpha:0})
        .staggerFrom(".skill", 0.20, {scale:0.5, autoAlpha:0, ease:Elastic.easeOut, force3D:true}, 0.15, "-=1.25")
        .from('#section3 .textBlock', 1, { y: "200vh", autoAlpha:0 }, "-=0.5" ) 
        ;

      var section4TL = new TimelineLite();
        section4TL.to(".skills-wrap", 1, { scale:0.5, autoAlpha:0, force3D:true} )
        .to('#section3', 1, { y: "-200vh", autoAlpha:0}, "-=0.25")
        .set("body", {className:"-=body-light"})
        ;

      var section5TL = new TimelineLite();
        section5TL.from("#section4 .textBlock", 1, { autoAlpha:0, force3D:true} )
        ;

      tl.add(section2TL)
      .add(section3TL, "+=3")
      .add(section4TL, "+=3")
      .add(section5TL, "+=1")
      ;

     
      var controller = new ScrollMagic.Controller();

      var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", offset: 0, duration: h*12})
                // .setClassToggle("body", "body-light") // add class toggle
                .setTween(tl) // trigger a TweenMax.to tween
								// .setTween("#section1", 0.5, { y: "-10%", autoAlpha: 0 }) // trigger a TweenMax.to tween
								.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);   
      
      //   var changeBkg = new ScrollMagic.Scene({ triggerElement: "#section2", duration: "100vh" })
			// 					.setTween(".statement1", { autoAlpha: 1 }) // trigger a TweenMax.to tween
			// 					.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
			// 					.addTo(controller);     


      // var gsap = require("gsap");
      // ScrollMagic = require('scrollmagic');
      // require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
    }
  },
  head: {
      script: [
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js' }
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/rellax/1.6.2/rellax.min.js' }
      ]
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

  .main-container {
    /* padding: 80px; */
    width: 100%;
    max-width: 1260px;
    position: absolute;
    top: 0;
    left: 0;
    // background: olive;
    overflow: scroll;
    transition: all .3s ease-out;
  }
  section {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    &.contain {
      left: 50%;
      transform: translateX(-50%);
      max-width: 1260px;
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
     .textBlock {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);  
    }    
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
