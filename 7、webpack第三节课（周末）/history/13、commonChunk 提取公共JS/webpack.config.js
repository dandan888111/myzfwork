
let { resolve } = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  optimization: {
    // 缓存，分离公共模块
    splitChunks: {  // 分割代码块
      cacheGroups: {  // 缓存组
        common: { // 提取公共的部分
          name: 'common',     // 定义公共文件的名字。 如果不写该参数，默认就会是：common-home-login.js
          chunks: 'initial',  // 入口处开始提取  all所有   async异步的模块
          minChunks: 2,      // 至少这个模块被使用2次
          minSize:1        // 只要有一个字节被公用了，就抽离出来
        },
        // 第三方模块
        vendeor: {
          name: 'vendor',
          priority:1, // 权重，先处理完第三方库，在处理上面的
          test: /node_modules/, // 只要匹配这个文件下面的
          chunks: 'initial',
          minChunks: 2,
          minSize:1
        }
      }
    }
  },
  mode: 'development',
  entry: {
    home: './src/Home.js',
    login: './src/Login.js',
    // main: './src/index.js'
  },
  output: {
    filename: '[name].js',
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
            ],
            plugins: [
              // 支持动态载入
              '@babel/plugin-syntax-dynamic-import'
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
    new HtmlWebpackPlugin({
      filename: 'home.html',
      chunks: ['common','vendor','home']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      chunks: ['common','vendor','login']
    }),
    // 忽略moment加载的locale文件
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new MiniCssExtractPlugin({
      filename:'style.css'
    }),
    new HtmlWebpackPlugin({
      template:'./public/index.html'
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
// 抽离第三方模块  目的是为了实现缓存
// 懒加载
// 热更新