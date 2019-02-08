import React from 'react'
import ReactDOM from 'react-dom'

import Home from './Home'
import About from './About'


ReactDOM.render(<>
    <Home></Home>
    <About></About>
</>,window.root);


// 如果当面模块以及有热更新模块了
// if(module.hot) {
//     module.hot.accept();
// }

//使用websocket 实现模块的更新后实时通知浏览器新增模块
if(module.hot) {
    module.hot.accept(['./About'], function() { 
        // 如果About组件更新了，我就做热更新，把页面的内容重新渲染一遍，不刷新页面
        let Home = require('./Home').default;
        let About = require('./About').default;
        ReactDOM.render(<>
            <Home></Home>
            <About></About>
        </>,window.root);
    });
}

// plugin loader 优化 
// tapable 库



// 代码流程 会有同步 会有异步 异步串行和 异步并行
// callback


// async库 async+await 处理异步流程的
