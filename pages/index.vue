<template>
  <div class="main-container">
    <section class="home-landing">
      <div class="profile-image">
        <img src="~/assets/img/nj-profile.png">
      </div>
      <div class="hero-title">
          <h1>Nick John</h1>
          <h2>Frontend Developer<br>
          at Rosie Lee</h2>
      </div>
    </section>
    <section class="about-1">

    </section>
  </div>
</template>

<script>

</script>

<style lang="scss">

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
      overflow: hidden;
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
  .about-1 {
    background: blueviolet; 
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
