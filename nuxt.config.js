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
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.5/TweenMax.min.js' },
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
      '~/plugins/greensock-js-shockingly-green/src/uncompressed/TweenMax.js',
      '~/plugins/scrollmagic/uncompressed/ScrollMagic.js'
      // '~/plugins/scrollmagic/uncompressed/plugins/animation.gsap.js'
      // '~/plugins/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
  
  ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader'
          // exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/global.js', ssr: false },
    { src: '~/plugins/greensock-js-shockingly-green/src/uncompressed/TweenMax.js', ssr: false },
    { src: '~/plugins/scrollmagic/uncompressed/ScrollMagic.js', ssr: false }
  ]
}
