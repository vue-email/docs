export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@vueuse/nuxt',
    'nuxt-seo-experiments',
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons', 'solar', 'ph'],
  },
  // Fonts
  fontMetrics: {
    fonts: ['DM Sans'],
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    },
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/getting-started', '/api/search.json', '/api/stats', '/api/releases.json', '/api/pulls.json'],
    },
  },
  site: {
    name: 'Vue Email',
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false },
  app: {
    head: {
      titleTemplate: `%s %separator %site.name`,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      ],
    },
  },
})
