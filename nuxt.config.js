// const webpack = require('webpack')

const axios = require('axios')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nick John Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is a working portfolio for Web Developer Nick John. From Yeovil, Somerset he specialises in Frontend experiences at Rosie Lee.' },
      { hid: 'keywords', name: 'keywords', content: 'Nick John, Developer, VueJS, UI, Frontend, Websites, Web, Javascript, Web Developer, front-end, front end, Bristol, Yeovil, Bath, Somerset, Dorset, UK, HTML, CSS, Javascript' },
      { name: 'google-site-verification', content: 'hhP3WImxTO-OaWO4xDoMsH2KLO7lIBvePEFvCwvchLc' },
      {
        hid: `og:title`,
        property: 'og:title',
        content: `Nick John Portfolio`
      },
      {
        hid: `og:url`,
        property: 'og:url',
        content: 'https://nickjohn.co.uk'
      },
      {
        hid: `og:image`,
        property: 'og:image',
        content: `https://nickjohn.co.uk/nj-site.jpg`
      },
      {
        hid: `og:description`,
        property: 'og:description',
        content: 'This is a working portfolio for Web Developer Nick John. From Yeovil, Somerset he specialises in Frontend experiences at Rosie Lee.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/sass/style.scss'
  ],
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://nickjohn.co.uk/',
    routes: function (callback) {
      axios.get('https://nj-admin.co.uk/wp-json/wp/v2/projects')
      .then((res) => {
        var routes = res.data.map((project) => {
          return '/work/' + project.id + '/' + project.slug
        })
        callback(null, routes)
      })
      .catch(callback)
    }
  },
  generate: {
    minify: {
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeTagWhitespace: true
    },
    routes: function (callback) {
      axios.get('https://nj-admin.co.uk/wp-json/wp/v2/projects')
      .then((res) => {
        var routes = res.data.map((project) => {
          return '/work/' + project.id + '/' + project.slug
        })
        callback(null, routes)
      })
      .catch(callback)
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffffff' },
  /*
  ** Build configuration
  */

  build: {
    vendor: [
      'gsap/TweenMax',
      'fullpage.js'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      var path = require('path');
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader'
          // exclude: /(node_modules)/
        })
      }
    }
  }
}

// config.resolve.alias['TweenMax'] = path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js')
// config.resolve.alias['TimelineMax'] = path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js')
// config.resolve.alias['animation.gsap'] = path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')
// config.resolve.alias['debug.addIndicators'] = path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')