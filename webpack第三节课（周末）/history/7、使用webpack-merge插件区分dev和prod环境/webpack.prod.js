let merge = require('webpack-merge');
let webpack = require('webpack');
let base = require('./webpack.base.js');


module.exports = merge(base,{
    mode: 'production',
    plugins: [
        // 会在dist/bundle.js的顶部显示版权号make by wudandan in 2019噢
        new webpack.BannerPlugin(`make by wudandan in 2019`),
    ]
})