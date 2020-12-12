import i18n from './i18n'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'chrisprusakiewicz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/toggleLeaveAnimations'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        seo: true,
        locales: [
          {
            code: 'en',
            name: 'English',
            iso: 'en-GB'
          },
          {
            code: 'pl',
            name: 'polski',
            iso: 'pl-PL'
          }
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
  ],

  styleResources: {
    scss: [
      '~/assets/styles/_variables.scss',
      '~/assets/styles/_mixins.scss',
    ]
  },

  fontawesome: {
    component: 'fa',
    imports: [{
      set: '@fortawesome/free-brands-svg-icons',
      icons: ['faGithub', 'faLinkedin', 'faTwitter', 'faBehance'],
    }]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // Server configuration (https://nuxtjs.org/api/configuration-server)
  server: {
    port: process.env.PORT || 5000,
    host: '0.0.0.0',
    timing: false
  },

  // Loading options
  loading: false,
}
