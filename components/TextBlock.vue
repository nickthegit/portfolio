<template>

    <div class="textBlock" :class="classOf">
        <h3 class="title">{{ title }}</h3>
        <h2 v-html="h2Content"></h2>
    </div>

</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "Title goes here"
            },
            h2Content: {
                type: String,
                default: "content goes here"
            },
            classOf: {
                type: String,
            }
        }
    }

</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";

    .textBlock {
        width: 50%;
        max-width: 1280px;
        display: block;
        margin: 0 auto;
        box-sizing: border-box;
        position: absolute;
        padding: 4%;  
        h3 {
            
            font-family: "NexaBold", Arial, Helvetica, sans-serif;
            padding: 10px 0;
            font-size: 2.5vh;
        }
        h2 {
            font-size: 4vh;
            font-family: "Bludhaven", Times, serif;
        }
        @include breakpoint(tablet-mobile) { 
            width: 100%;
            padding: 10%; 
            h3 {
                font-size: 2.2vh;
            }
            h2 {
                font-size: 3.4vh;
            }
        }
    }
</style>

