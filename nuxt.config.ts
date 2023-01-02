// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'Nuxt3 Tutorial',
      meta: [
        {name: 'description', content: 'sample meta description'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'}
      ]
    }
  }
})
