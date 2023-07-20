module.exports = {
  title: 'toolkituse | a npm package for work',
  description: 'a npm toolkit use docs',
  base: '/toolkit-use/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '宁可一年不将军，不可一日不拱卒', link: '/guide/' },
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
          { text: 'dev.to', link: 'https://dev.to/toolkituse', target: '_blank' },
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        ['', '工具介绍'],
        {
          title: '如何贡献',
          collapsable: true,
          children: [
            ['./CONTRIBUTING.md', '往下看'],
          ]
        },
        {
          title: '工具方法',
          collapsable: true,
          children: [
            ['./clipboard/clipboard.md', '复制'],
            ['./array/array.md', '数组'],
            ['./date/date.md', '日期'],
            ['./decimal/decimal.md', '小数'],
            ['./download/download.md', '下载'],
            ['./regex/regex.md', '正则'],
            ['./string/string.md', '字符串'],
            ['./event-hub/eventhub.md', '事件总线'],
            ['./shared/shared.md', '共享方法'],
            ['./dom/dom.md', 'dom工具'],
            ['./storage/storage.md', 'storage工具'],
          ]
        },
        {
          title: '问题反馈',
          collapsable: true,
          children: [
            ['./problems/problems.md', '各大问题'],
          ]
        },
        {
          title: '版本更新',
          collapsable: true,
          children: [
            ['./CHANGELOG.md', '往下看'],
          ]
        },
      ],
    },
  },
}