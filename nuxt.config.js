module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nick John Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio for Frontend Developer Nick John' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js' }
    ]
  },
  css: [
    '@/assets/sass/style.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  // plugins: [
  //   { src: '~/node_modules/waypoints/lib/noframework.waypoints.js', ssr: false }
  // ],
  build: {
    vendor: [
      'vanilla-tilt',
      'swiper',
      'gsap'
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