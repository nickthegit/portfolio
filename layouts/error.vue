<template>
  <div class="default-container">
    <navigation />
    <div class="content-container">
        <h1>4(0H!)4</h1>
        <h2>What you are looking for is not here 😢</h2>
        <nuxt-link to="/">Take me home</nuxt-link>  
    </div>
  </div>
</template>

<script>
import navigation from "~/components/navigation.vue"
export default {
  components: { 
    navigation 
  }
}
</script>


<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    .default-container {
      width: 100%;
      min-height: 100vh;
      position: relative;
      // overflow-x: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .content-container {
        padding: 40px;
        h1 {
            font-size: 12vh;
            display: block;
        }
        h2 {
            font-family: "NexaLight", Arial, Helvetica, sans-serif;
            display: block;
        }
        a {
            display: block;
            padding: 10px;
            margin-top: 20px;
            font-size: 2.4vh;
            text-decoration: underline;
        }
        @include breakpoint(mobile) { 
            h1 {
                font-size: 8vh;
            }            
        }
    }
    // .navOpen {
    //   .content-container {
    //     transform: translateX(7.5%);
    //   }
    // }
</style>

