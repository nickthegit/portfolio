<template>
    <div :class="{navOpen: isActive}" class="menu">
        <header>
            <nuxt-link to="/" class="brand-logo"><logo/></nuxt-link>
            <button class="hamburger hamburger--collapse" :class="{isActive: isActive}" @click="toggleNav" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </header>
        <div id="nav-close" :class="{show: isActive}" @click="toggleNav"></div>
        <nav :class="{show: isActive}">
            <ul>
                <li @click="toggleNav"><nuxt-link to="/"><h2>About</h2><span></span></nuxt-link></li>
                <li @click="toggleNav"><nuxt-link to="/work"><h2>Work</h2><span></span></nuxt-link></li>
                <!-- <li @click="toggleNav"><nuxt-link to="/blog"><h2>Blog</h2><span></span></nuxt-link></li> -->
                <li class="contact">
                <h2>Contact</h2>
                <a class="contact-email" href="mailto:hello@nickjohn.co.uk?subject=Hello%20NJ%2C%20I'm%20diggin'%20ya%20portfolio!&body=">hello@nickjohn.co.uk</a>
                <div class="contact-socials">
                    <a href="https://github.com/nickthegit" target="_blank"><github/></a>
                    <a href="https://codepen.io/jonserness/" target="_blank"><codepen/></a>
                    <a href="https://www.linkedin.com/in/nick-john-a310a753/" target="_blank"><linkedin/></a>
                </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import logo from "~/components/logo.vue";
import github from "~/components/icons/github.vue";
import codepen from "~/components/icons/codepen.vue";
import linkedin from "~/components/icons/linkedin.vue";

export default {
    components: {
        logo,
        github,
        codepen,
        linkedin
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        toggleNav: function(){
            this.isActive = !this.isActive;
            this.$emit('navState', this.isActive);
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "~/assets/sass/base/_variables.scss";
    @import "~/assets/sass/base/_mediaquery.scss";
    
    header {
        width: 100%;
        height: $headerheight;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 80;
        // background: rgba(darkcyan, 0.5);
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
            fill: $white;
        }
    }
    $hamburger-padding-x                       : 0;
    $hamburger-padding-y                       : 0;
    $hamburger-layer-width                     : $headerheight / 2;
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
        top: $headerheight / 3;
        height: $headerheight / 3;
        // background: teal;
    }
    #nav-close {
        width: 50%;
        height: 100%;
        position: fixed;
        background: transparent;  
        top: 0;
        right: 0; 
        z-index: 70;   
        transform: translateX(100%);
        opacity: 0;
        &.show {
            transform: translateX(0);
            opacity: 1;
        }        
        
    }
    nav {
        width: 50%;
        height: 100%;
        position: fixed;
        background: $white;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: right;
        z-index: 75;
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        li {
            opacity: 0;
            transform:  translateX(-10%);
            transition: all .3s ease-out;
            h2 {
                font-family: "Bludhaven", Times, serif;
                font-size: 5vh;
                // background: goldenrod;
                margin: 8px 0;
                padding: 10px;
            }
            span {
                display: block;
                height: 2px;
                background: $grey;
                width: 100%;
                opacity: 0;
                transition: opacity 0.1s ease-out;
            }
            &:hover {
                span {
                    opacity: 1;
                }                
            }
        }
        ul, li, a {
            text-decoration: none;
            // color: $white;
            color: $black;
            &:hover, &:active, &:visited {
                text-decoration: none;
            }
        }
        a {
            &.nuxt-link-exact-active {
                span {
                    opacity: 1;
                    background: $gold;
                } 
                // text-decoration: underline;
                &:hover {
                    color: $black;
                }
            }
            &:hover {
                color: $grey;
            }
        }
        .contact {
            margin-top: 10vh;
        }
        .contact-email, .contact-socials {
            font-family: 'NexaLight', Arial, Helvetica, sans-serif;
            font-size: 2.5vh;    
            color: $darkgrey;     
            // margin: 0 10px;
            padding: 0 10px;   
        }
        .contact-socials {
            a {
                width: 22px;
                height: 22px;
                display: inline-block;
                // background: fuchsia;
                margin: 5px 0 0px 10px;
                padding: 5px 0 5px 5px;
                svg {
                    height: 100%;
                    stroke: $darkgrey;
                }
                &:hover {
                    svg {
                        stroke: $grey;
                    }                    
                }
            }
        }
        transform: translateX(-100%);
        transition: all .3s ease-out;
        opacity: 0;
        &.show {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .navOpen {
        .brand-logo {
            svg {
                fill: $black;
            }
        }
        nav {
            li {
                opacity: 1;
                transform:  translateX(0);
                transition-delay: .3s;
                &:nth-child(2) {
                    transition-delay: .5s;
                }
                &:nth-child(3) {
                    transition-delay: .7s;
                }
                &:nth-child(4) {
                    transition-delay: .9s;
                }
            }
        }        
    }  
    //
    // IF BODY STYLE CHANGES TO LIGHT
    //
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
        .navOpen {
            .brand-logo {
                svg {
                    fill: $white;
                }
            }
        }
        nav {
            background: $black;
            ul, li, a {
                color: $white;
            }
            span {
                background: $darkgrey;
            }
            a {
                &.nuxt-link-exact-active {
                    &:hover {
                        color: $white;
                    }
                }
                &:hover {
                    color: $darkgrey;
                }
            }
            .contact-socials {
                a {
                    svg {
                        stroke: $grey;
                        }
                    &:hover {
                        svg {
                        stroke: $darkgrey;
                        }                    
                    }
                }
            }
        }
    }
    .body-light {
        .navOpen {
            .brand-logo {
                svg {
                    fill: $white;
                }
            }
        }
    }
    //
    // RESPONSIVE
    //
    @include breakpoint(tablet) { 
        nav {
            width: 75%;
        }
        #nav-close {
            width: 25%;
        }
    }
    @include breakpoint(mobile) { 
        .navOpen {
            .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
                background-color: $black;
            }
        }
        nav {
            width: 100%;
        }
        #nav-close {
            width: 0%;
        }
    }
</style>

