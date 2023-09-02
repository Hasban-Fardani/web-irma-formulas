// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/main.css',
    'animate.css/animate.min.css'
  ],
  plugins: [
    {src: '~/plugins/bootstrap.js', mode: 'client'}
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
