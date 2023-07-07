module.exports = {
  title: 'toolkituse',
  description: 'a npm toolkit use docs',

  themeConfig: {
    nav: [
      { text: 'guide', link: '/guide/' },
      {
        text: 'more',
        items: [
          { text: 'github', link: 'https://github.com/KenNaNa/toolkit-use', target: '_blank' },
          { text: 'twitter', link: 'https://twitter.com/jkl12345781138', target: '_blank' },
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
          ]
        }
      ],
    },
  }
}