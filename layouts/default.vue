<template>
  <div class="default-container">
    <navigation />
    <div class="content-container">
      <nuxt/>
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


<style lang="scss">
    .default-container {
      width: 100%;
      min-height: 100vh;
      position: relative;
      overflow-x: hidden;
    }
    .content-container {
      transition: all .5s ease-out;
      transition-delay: 0.1s;
      width: 100%;
      // height: 100vh;
      position: relative;
      top: 0;
      left: 0;
    }
  // .navOpen {
  //   .content-container {
  //     transform: translateX(7.5%);
  //   }
  // }
</style>

