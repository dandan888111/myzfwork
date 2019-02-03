
let { resolve } = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js' // 绝对 
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    noParse: /jquery | lodash/,  // jquery 有require 不解析当前模块中的依赖关系
    rules: [
      { 
        include: resolve(__dirname, 'src'), // 包含.一般只要配include就可以了
        //exclude: /node_modules/, // 排除
        test: /\.js$/, 
        use: {
          loader:'babel-loader',
          options:{
            presets:[ // @babel/preset-stage-0
              '@babel/preset-env', // 把高级语法转化成低级语法
              '@babel/preset-react'
            ]
          }
        } 
      },
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    // 忽略moment加载的locale文件
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new MiniCssExtractPlugin({
      filename:'style.css'
    }),
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dist/manifest.json')
    })
  ],
  devServer: {
    contentBase: './dist'
  }
}
// 脚手架 (去线上拉取模板) webpack配置环境  @vue/cli  vue create template
// webpack的优化 
// 1) 基于内置的配置来优化 tree-shaking  scope-hosting
// 2) 自己配置 第三方


// 1) 采用include和 exclude 来进行排除和包含
// 2) 如果使用moment 要忽略掉moment中的locale
// 3) webpack内置的优化 tree-shaking 把没有用的代码删除掉（只支持es6 动态导入require不支持）
// tree-shaking 把没有用的代码删除掉 (只支持es6 动态导入require 不支持)
// scope-hosting 
// dllplugin happypack
// 抽离第三方模块
// 懒加载
// 热更新