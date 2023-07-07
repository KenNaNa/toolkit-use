const babel = require("@rollup/plugin-babel"); // 引入 babel
const commonjs = require("@rollup/plugin-commonjs"); // 引入 cjs 插件
const { nodeResolve  } = require("@rollup/plugin-node-resolve"); // 引入 resolve
const typescript = require("rollup-plugin-typescript2"); // 引入 ts
const { terser } = require("rollup-plugin-terser"); // 压缩打包文件

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


const buildInputs = () => {
  const arr = [
    'src/index.ts',
    'src/array/index.ts',
    'src/clip/index.ts',
    'src/decimal/index.ts',
    'src/download/index.ts',
    'src/string/index.ts',
  ]
}

const buildOutputs = () => {}

module.exports = {
  input: [
    'src/index.ts',
    'src/array/index.ts',
    'src/clip/index.ts',
    'src/decimal/index.ts',
    'src/download/index.ts',
    'src/string/index.ts',
  ],
  output: [
    {
      dir: 'dist',
      file: 'index.esm.js',
      format: 'esm',
      name: 'index',
    },
    {
      dir: 'dist',
      file: 'index.umd.js',
      format: 'umd',
      name: 'index',
    },
    {
      dir: 'dist',
      file: 'array/index.esm.js',
      format: 'esm',
      name: 'array',
    },
    {
      dir: 'dist',
      file: 'array/index.umd.js',
      format: 'umd',
      name: 'array',
    },
    {
      dir: 'dist',
      file: 'clip/index.esm.js',
      format: 'esm',
      name: 'clip',
    },
    {
      dir: 'dist',
      file: 'clip/index.umd.js',
      format: 'umd',
      name: 'clip',
    },
    {
      dir: 'dist',
      file: 'decimal/index.esm.js',
      format: 'esm',
      name: 'decimal',
    },
    {
      dir: 'dist',
      file: 'decimal/index.umd.js',
      format: 'umd',
      name: 'decimal',
    },
    {
      dir: 'dist',
      file: 'download/index.esm.js',
      format: 'esm',
      name: 'download',
    },
    {
      dir: 'dist',
      file: 'download/index.umd.js',
      format: 'umd',
      name: 'download',
    },
    {
      dir: 'dist',
      file: 'string/index.esm.js',
      format: 'esm',
      name: 'string',
    },
    {
      dir: 'dist',
      file: 'string/index.umd.js',
      format: 'umd',
      name: 'string',
    },
  ],
  plugins: [
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
}