export default {
    title: 'Cooler',
    description: '致热爱写作的你 / To who like to write',
    lang: 'zh-cn',
    markdown: {
        theme: {
          light: 'github-light',
          dark: 'github-dark',
        }
      },
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/intro' },
            { text: '开发', link: '/dev/backend' },
        ],
        sidebar: [
          {
            text: '入门',
            collapsible: true,
            items: [
              { text: '简介', link: '/guide/intro' },
            ]
          },
          {
            text: '开发',
            collapsible: true,
            items: [
              {
                text: '后端API参考',
                link: '/dev/backend'
              }
            ]
          }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Cooler-dev' }
        ],
      }
}