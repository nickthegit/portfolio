<template>
    <div>
        <header>
            <a href="/" class="brand-logo"><Logo/></a>
            <button class="hamburger hamburger--collapse" :class="{isActive: isActive}" @click="toggleNav" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </header>
        <nav :class="{show: isActive}">
            <ul>
                <li @click.prevent="toggleNav"><nuxt-link to="/about">About</nuxt-link></li>
                <li @click.prevent="toggleNav"><nuxt-link to="/work">Work</nuxt-link></li>
                <li class="contact" @click.prevent="toggleNav">Contact</li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
    components: {
        Logo
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleNav: function(){
            this.isActive = !this.isActive;
          // some code to filter users
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/sass/base/_variables.scss";
    $headerheight: 70px;
    header {
        width: 100%;
        height: $headerheight;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 80;
    }
    .brand-logo {
        position: absolute;
        // background: rebeccapurple;
        height: $headerheight / 2;
        width: auto;
        left: $headerheight / 4;
        top: $headerheight / 4;
        svg {
            width: auto;
            height: 100%;
            fill: white;
        }
    }
    $hamburger-padding-x                       : 0;
    $hamburger-padding-y                       : 0;
    $hamburger-layer-width                     : $headerheight / 1.5;
    $hamburger-layer-height                    : 3px;
    $hamburger-layer-spacing                   : 8px;
    $hamburger-layer-color                     : #fff;
    $hamburger-layer-border-radius             : 0;
    $hamburger-hover-opacity                   : 0.7;
    $hamburger-hover-transition-duration       : 0.15s;
    $hamburger-hover-transition-timing-function: linear;
    @import "~/assets/sass/components/hamburgers/hamburgers.scss";
    .hamburger {
        position: absolute;
        right: $headerheight / 4;
        top: $headerheight / 4;
        height: $headerheight / 2;
        // background: teal;
    }
    nav {
        width: 60%;
        height: 100%;
        position: fixed;
        background: gold;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        ul, li, a {
            text-decoration: none;
            color: $white;
            &:hover, &:active, &:visited {
                text-decoration: none;
            }
        }
        .contact {
            margin-top: 40px;
        }
        transform: translateX(-100%);
        transition: all .3s ease-out;
        opacity: 0.75;
        &.show {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .body-light {
        .hamburger-inner{
            background-color: $black;
            &::before, &::after {
                background-color: $black;
            } 
        }
        .brand-logo {
            svg {
                fill: $black;
            }
        }
    }
    .body-dark {
        .hamburger-inner{
            background-color: $white;
            &::before, &::after {
                background-color: $white;
            } 
        }   
        .brand-logo {
            svg {
                fill: $white;
            }
        }     
    }
</style>

