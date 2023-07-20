const babel = require("@rollup/plugin-babel"); // 引入 babel
const commonjs = require("@rollup/plugin-commonjs"); // 引入 cjs 插件
const { nodeResolve  } = require("@rollup/plugin-node-resolve"); // 引入 resolve
const typescript = require("rollup-plugin-typescript2"); // 引入 ts
const { terser } = require("rollup-plugin-terser"); // 压缩打包文件
const path = require('path')
const fs = require('fs');

const resolvePath = (src) => {
  return path.resolve(__dirname, '.' , src)
}
const filePath = resolvePath('src')
const extensions = ['.js', '.ts'];

const pkg = require('./package.json'); // 从package.json引入

const version = pkg.version; // 项目版本
const license = pkg.license; // 协议
const author = pkg.author; // 作者


const banner =
    '/*!\n' +
    ` * ${pkg.name} v${version}\n` +
    ` * (c) ${new Date().getFullYear()} ~ 至今 ${author}\n` +
    ` * Released under the ${license} License.\n` +
    ' */';
const filePathArr = []
const filenameArr = []
// 构建 exports 配置项
const buildRollupOptions =  (filePathArr) => {
  const rollupOptions = []
  const plugins = [
    nodeResolve({
      extensions,
      modulesOnly: true
    }),
    commonjs(),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      include: 'src/**',
      exclude: 'node_modules/**',
      extensions
    }),
    terser()
  ]
  filePathArr.forEach((item) => {
    rollupOptions.push({
      input: resolvePath(`.${item}`),
      output: {
        file: item.replace('/src', 'dist').replace('index.ts', `index.esm.js`),
        format: 'esm',
        banner,
        name: `${item}`,
      },
      plugins,
    })
    rollupOptions.push({
      input: resolvePath(`.${item}`),
      output: {
        file: item.replace('/src', 'dist').replace('index.ts', `index.umd.js`),
        format: 'umd',
        banner,
        name: `${item}`,
      },
      plugins,
    })
  })
  return rollupOptions
}
// 读取文件
const fileDisplay = (filePath) => {
  readdirSync = fs.readdirSync(filePath)
  readdirSync.forEach((filename) => {
    //获取当前文件的绝对路径
    if(filename !== 'index.ts') {
      filenameArr.push(filename)
    }
    const filedir = path.join(filePath, filename)
    const stats = fs.statSync(filedir)
    // 是否是文件
    const isFile = stats.isFile()
    // 是否是文件夹
    const isDir = stats.isDirectory()
    if (isFile) {
      // 这块我自己处理了多余的绝对路径，第一个 replace 是替换掉那个路径，第二个是所有满足\\的直接替换掉
      filePathArr.push(filedir.replace(__dirname, '').replace(/\\/img, '/'))
    }
    // 如果是文件夹
    if (isDir) fileDisplay(filedir);
  });
}

const getOptions =  () => {
  fileDisplay(filePath)
  return buildRollupOptions(filePathArr)
}

module.exports = getOptions()