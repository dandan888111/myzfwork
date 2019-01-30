let { resolve } = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let HappyPack = require('happypack');
module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    noParse: /jquery|lodash/, // jquery 有require 不解析当前模块中的依赖关系
    rules: [
      {
        include: resolve(__dirname, 'src'), //包含
        exclude: /node_modules/, // 排除
        test: /\.js$/,
        use: 'happypack/loader?id=js'

      },
      {
        test: /\.css$/,
        use: 'happypack/loader?id=css'
      }
    ]
  },
  plugins: [
    // 忽略moment加载的locale文件
    new HappyPack({
      id: 'js',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [ // @babel/preset-stage-0
            '@babel/preset-env', // 把高级语法转化成低级语法
            '@babel/preset-react'
          ]
        }
      }]
    }),
    new HappyPack({
      id:'css',
      use:[
         'style-loader',
          'css-loader'
      ]
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ],
  devServer: {
    contentBase: './dist'
  }
}
// 1) 采用include和 exclude 来进行排除和包含
// 2) 如果使用moment 要忽略掉moment中的locale
// 3) webpack内置的优化 
// tree-shaking 把没有用的代码删除掉 (只支持es6 动态导入require 不支持)
// scope-hosting 
// dllplugin 动态链接库 happypack 多线程打包

// externals 
// resolve
// 抽离第三方模块 目的是为了实现缓存 commonChunkPlugin splitChunks
// 懒加载  lazyload jsonp
// 热更新  配置  websocket
// tapable ast
