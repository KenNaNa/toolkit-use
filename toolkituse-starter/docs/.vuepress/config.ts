module.exports = {
  title: 'toolkituse | a npm package for work',
  description: 'a npm toolkit use docs',
  base: '/toolkit-use/',
  theme: '@vuepress/blog',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'guide', link: '/guide/' },
      {
        text: 'more',
        items: [
          { text: 'github', link: 'https://github.com/KenNaNa/toolkit-use', target: '_blank' },
          { text: 'twitter', link: 'https://twitter.com/jkl12345781138', target: '_blank' },
          { text: 'preview', link: 'https://kennana.github.io/toolkit-use/', target: '_blank' },
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        ['', '介绍'],
        {
          title: '工具',
          collapsable: false,
          children: [
            ['./clipboard/clipboard.md', '复制'],
            ['./array/array.md', '数组'],
            ['./date/date.md', '日期'],
            ['./decimal/decimal.md', '小数'],
            ['./download/download.md', '下载'],
            ['./string/string.md', '字符串'],
          ]
        }
      ],
    },
  }
}