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
          { text: '0.0.14', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.14', target: '_blank' },
          { text: '0.0.13', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.13', target: '_blank' },
          { text: '0.0.12', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.12', target: '_blank' },
          { text: '0.0.11', link: 'https://www.npmjs.com/package/toolkit-use/v/0.0.11', target: '_blank' },
        ]
      },
      {
        text: 'more',
        items: [
          { text: 'github', link: 'https://github.com/KenNaNa/toolkit-use', target: '_blank' },
          { text: 'twitter', link: 'https://twitter.com/Toolkituse', target: '_blank' },
          { text: 'preview', link: 'https://kennana.github.io/toolkit-use', target: '_blank' },
        ]
      },
      {
        text: '宁可一年不将军，不可一日不拱卒'
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
            ['./event-hub/eventhub.md', '事件总线'],
            ['./regex/regex.md', '常用正则'],
            ['./shared/shared.md', '常用共享方法'],
          ]
        }
      ],
    },
  },
}