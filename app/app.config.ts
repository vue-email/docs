export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Vue Email - Build and send emails using Vue 3'
  },
  header: {
    logo: {
      alt: 'Vue Email Logo',
      light: '/logo-light.png',
      dark: '/logo-dark.png'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/vue-email/vue-email',
      'target': '_blank',
      'aria-label': 'Star us on GitHub'
    }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/imflowko',
        'target': '_blank',
        'aria-label': 'Flowko on X'
      },
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/davejs4',
        'target': '_blank',
        'aria-label': 'Dave on X'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/vue-email',
        'target': '_blank',
        'aria-label': 'Vue Email on GitHub'
      }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/vue-email/docs/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/vue-email/vue-email',
        target: '_blank'
      }]
    }
  }
})
