

// 模块的分类  
// 1) 文件模块 require('./a.js') 自定义模块
// 2) 原生模块  核心模块  fs http path vm ... 不需要安装的
// 3) 第三方模块 mz bulebird。需要先去安装，安装在当前目录下的node_modules文件夹下

// 默认第三方模块回去当前的node_modules的目录下查找，会找名字相同的文件。
// 默认找的是index.js
// 如果没有index.js,就要这样引用，如：require('mz/a.js');
// 如果当前node_modules没有这个模块，他会向上查找这个目录！
// MZ目录下执行：npm init -y，会生成一个package.json的文件夹。可以在这个json文件里，修改默认的js入口文件！

console.log(module.paths);
let file = require('mz');

// 如果自定义的模块
// 新版本下 会先查找a.js文件，如果没有文件，就查找目录！
require('./a');


// npm 可以帮我们安装模块 安装node的时候，会自动安装npm
// npm install yarn -g  可以在任何目录下安装，安装后会有全局命令
// 模块的安装分为两类  全局安装（在命令行中使用）   本地安装（在代码里使用）


// yarn add jquery
// yarn remove jquery 删除模块之后，package.json里就自动删除了该模块的代码
// --save-dev 开发时使用
// --save 项目依赖，上线开发都需要

// 发布 发布全局的包
// 在本地 把我的项目变成一个全局的命令
// 配置package.json里的bin


// 默认我需要将我写的包发布到npm上
// 默认可能用的是淘宝源，切到国外源！
// npm install nrm -g
// nrm ls 列出所有源
// nrm use npm 使用官方
// nvm 切换node版本 nrm 切换源的
// nvm-win

// 写了个vue 把这个vue 直接发布了到npm 我在项目中使用了这个组件 babel
// 需要在本地 先把他打包出es5 在发布到npm上


// 进入到包目录里，如：7、node
// 输入命令：npm adduser，输入npm 的账号密码
// 输入命令：npm publish
// 上传完成后会出现 wdd-pack@1.0.0
//  npm root -g，打印出node的根目录
// 之后到 https://registry.npmjs.org/ 可以查到我刚刚上传的包！可能会有延时！

// npm install wdd-pack -g 输入这个命令，别人就可以安装了！！哈哈哈！！

