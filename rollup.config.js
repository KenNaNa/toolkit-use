const babel = require("@rollup/plugin-babel"); // 引入 babel
const commonjs = require("@rollup/plugin-commonjs"); // 引入 cjs 插件
const { nodeResolve  } = require("@rollup/plugin-node-resolve"); // 引入 resolve
const typescript = require("rollup-plugin-typescript2"); // 引入 ts
const { terser } = require("rollup-plugin-terser"); // 压缩打包文件
const path = require('path')
const fs = require('fs');

console.log('__dirname', __dirname)

const resolvePath = (src) => {
  return path.resolve(__dirname, '.' , src)
}
const filePath = resolvePath('src')
console.log('__dirname', __dirname, filePath)
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
let rollupOptions = []
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
      input: resolvePath(item),
      output: {
        file: item.replace('src', 'dist').replace('index.ts', `index.esm.js`),
        format: 'esm',
        banner,
      },
      plugins,
    })
    rollupOptions.push({
      input: resolvePath(item),
      output: {
        file: item.replace('src', 'dist').replace('index.ts', `index.umd.js`),
        format: 'umd',
        banner,
      },
      plugins,
    })
  })
  return rollupOptions
}
const fileDisplay = (filePath) => {
  return new Promise((resolve) => {
    fs.readdirSync(filePath, (err, files) => {
      if (err) return console.error('Error:(spec)', err)
      files.forEach((filename) => {
        //获取当前文件的绝对路径
        if(filename !== 'index.ts') {
          filenameArr.push(filename)
        } else {
          filenameArr.push(null)
        }
        const filedir = path.join(filePath, filename)
        // fs.stat(path)执行后，会将stats类的实例返回给其回调函数。
        fs.statSync(filedir, (eror, stats) => {
          if (eror) return console.error('Error:(spec)', err)
          // 是否是文件
          const isFile = stats.isFile()
          // 是否是文件夹
          const isDir = stats.isDirectory()
          if (isFile) {
            // 这块我自己处理了多余的绝对路径，第一个 replace 是替换掉那个路径，第二个是所有满足\\的直接替换掉
            filePathArr.push(filedir.replace(__dirname, '').replace(/\\/img, '/'))
            // 最后打印的就是完整的文件路径了
            console.log(filePathArr, 'arr', filenameArr)
            rollupOptions = buildRollupOptions(filePathArr)
            resolve(rollupOptions)
          }
          // 如果是文件夹
          if (isDir) fileDisplay(filedir);
        })
      });
    });
  })
}

fileDisplay(filePath).then((res) => {
  console.log('res====>', res)
  module.exports = res
})



module.exports = [
  {
    input: resolvePath('src/index.ts'),
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      name: 'index',
    },
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
  },
  {
    input: resolvePath('src/index.ts'),
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'index',
    },
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
  },
  {
    input: resolvePath('src/array/index.ts'),
    output: {
      file: 'dist/array/index.esm.js',
      format: 'esm',
      name: 'array',
    },
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
  },
  {
    input: resolvePath('src/array/index.ts'),
    output: {
      file: 'dist/array/index.umd.js',
      format: 'umd',
      name: 'array',
    },
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
  },
  {
    input: resolvePath('src/clip/index.ts'),
    output: {
      file: 'dist/clip/index.esm.js',
      format: 'esm',
      name: 'clip',
    },
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
  },
  {
    input: resolvePath('src/clip/index.ts'),
    output: {
      file: 'dist/clip/index.umd.js',
      format: 'umd',
      name: 'clip',
    },
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
  },
  {
    input: resolvePath('src/decimal/index.ts'),
    output: {
      file: 'dist/decimal/index.esm.js',
      format: 'esm',
      name: 'decimal',
    },
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
  },
  {
    input: resolvePath('src/decimal/index.ts'),
    output: {
      file: 'dist/decimal/index.umd.js',
      format: 'umd',
      name: 'decimal',
    },
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
  },
  {
    input: resolvePath('src/download/index.ts'),
    output: {
      file: 'dist/download/index.esm.js',
      format: 'esm',
      name: 'download',
    },
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
  },
  {
    input: resolvePath('src/download/index.ts'),
    output: {
      file: 'dist/download/index.umd.js',
      format: 'umd',
      name: 'download',
    },
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
  },
  {
    input: resolvePath('src/string/index.ts'),
    output: {
      file: 'dist/string/index.esm.js',
      format: 'esm',
      name: 'string',
    },
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
  },
  {
    input: resolvePath('src/string/index.ts'),
    output: {
      file: 'dist/string/index.umd.js',
      format: 'umd',
      name: 'string',
    },
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
  },
  {
    input: resolvePath('src/date/index.ts'),
    output: {
      file: 'dist/date/index.esm.js',
      format: 'esm',
      name: 'date',
    },
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
  },
  {
    input: resolvePath('src/date/index.ts'),
    output: {
      file: 'dist/date/index.umd.js',
      format: 'umd',
      name: 'date',
    },
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
  },
]