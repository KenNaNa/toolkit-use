module.exports = {
  title: 'toolkituse | a npm package for work',
  description: 'a npm toolkit use docs',
  base: '/toolkit-use/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'guide', link: '/guide/' },
      {
        text: 'versions',
        items: [
          { text: '0.0.9', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.9', target: '_blank' },
          { text: '0.0.8', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.8', target: '_blank' },
          { text: '0.0.7', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.7', target: '_blank' },
          { text: '0.0.6', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.6', target: '_blank' },
        ]
      },
      {
        text: 'more',
        items: [
          { text: 'github', link: 'https://github.com/KenNaNa/toolkit-use', target: '_blank' },
          { text: 'twitter', link: 'https://twitter.com/Toolkituse', target: '_blank' },
          { text: 'preview', link: 'https://kennana.github.io/toolkit-use', target: '_blank' },
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