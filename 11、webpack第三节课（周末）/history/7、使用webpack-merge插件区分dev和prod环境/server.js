// express 是node 提供的一个 高效的http服务

// webpack-dev-server 内置了express库

let express = require('express');


const webpack = require('webpack'); // 引入webpack
let config = require('./webpack.config');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(config);

// 通过express来生成一个监听函数
// 服务的 监听端口号 等待前端来请求
let app = express();
// 前端接口

app.use(middleware(compiler));

app.get('/api/user',function (req,res) {
  //res.setHeader('Access-Control-Allow-Origin','http://localhost:8080')
  res.json({name:'wudandan'});
});
app.listen(3000);
// 8080 -> 后端端口 3000  