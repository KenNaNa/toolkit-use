import babel from "@rollup/plugin-babel"; // 引入 babel
import commonjs from "@rollup/plugin-commonjs"; // 引入 cjs 插件
import { nodeResolve  } from "@rollup/plugin-node-resolve"; // 引入 resolve
import typescript from "rollup-plugin-typescript2"; // 引入 ts
import { terser } from "rollup-plugin-terser"; // 压缩打包文件

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

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'toolkitUse',
      banner,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      name: 'toolkitUse',
      banner,
    }
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