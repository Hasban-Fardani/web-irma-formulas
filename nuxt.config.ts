// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/main.css',
    'animate.css/animate.min.css'
  ],
  plugins: [
    {src: '~/plugins/plugins.js', mode: 'client'}
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
