module.exports = {
  presets: [
      [
          '@babel/preset-env',
          {
              targets: '> 0.25%, not dead',
              useBuiltIns: 'usage',
              corejs: '3.6.5'
          },
          '@babel/preset-typescript'
      ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
};
