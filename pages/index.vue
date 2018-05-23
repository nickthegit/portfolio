<template>
  <div class="main-container">
    <div id="trigger"></div>
    <section id="section1" class="home-landing">
      <div class="profile-image">
        <img src="~/assets/img/nj-profile.png">
      </div>
      <div class="hero-title">
          <h1>Nick John</h1>
          <h2>Frontend Developer<br>
          at Rosie Lee</h2>
      </div>
    </section>
    <section id="section2">
      <div class="statement1">
        <h2>I have experienced knowledge of ecommerce, pwa’s, modern frameworks, libraries and a varied range of content management systems. View my work.</h2>
      </div>
    </section>
    <section class="about-2"></section>
  </div>
</template>

<script>

export default {
  mounted() {
    if (process.browser) {

      // TweenMax.set('.statement1', {autoAlpha: 0 });

        // var rellax = new Rellax('.rellax');
      // var scene = document.getElementById('scene');
      // var parallaxInstance = new Parallax(scene);
     
      var controller = new ScrollMagic.Controller();

      var moveHeroUp = new ScrollMagic.Scene({ triggerElement: "#section2", offset: "80vh"})
                .setClassToggle("body", "body-light") // add class toggle
								.setTween("#section1", 0.5, { y: "-10%", autoAlpha: 0 }) // trigger a TweenMax.to tween
								// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
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

<style lang="scss">

  #trigger {
    position: absolute;
    top: 100vh;

  }

  @import "~/assets/sass/base/_variables.scss";
  @import "~/assets/sass/base/_mediaquery.scss";

  .main-container {
    /* padding: 80px; */
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    // background: olive;
    overflow: scroll;
    section {
      width: 100%;
      height: 100vh;
      position: relative;
      top: 0;
      left: 0;
    }
  }
  .home-landing {
    // background: honeydew;
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
    // background: blueviolet; 
    // background: $white;
    .statement1 {
      // position: fixed;
      // top: 0;
      // left: 0;
      position: absolute;
      bottom: 10%;
      width: 100%;
      max-width: 1280px;
      display: block;
      margin: 0 auto;
      padding: 10% 10% 10% 40px;
      // color: $black;
      box-sizing: border-box;
      h2 {
        font-size: 4.5vh;
      }
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
  }
</style>
