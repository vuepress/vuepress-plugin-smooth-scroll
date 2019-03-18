module.exports = {
  base: '/vuepress-plugin-smooth-scroll/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'vuepress-plugin-smooth-scroll',
      description: 'Vuepress plugin for smooth scrolling',
    },
  },

  themeConfig: {
    repo: 'vuepress/vuepress-plugin-smooth-scroll',

    editLinks: true,

    docsDir: 'docs',

    search: false,

    locales: {
      '/': {
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
      },
    },
  },

  plugins: [
    require.resolve('../../lib'),
  ],
}
