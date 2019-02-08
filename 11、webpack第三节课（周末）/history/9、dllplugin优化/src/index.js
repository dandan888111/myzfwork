


import React from 'react';
import ReactDOM from 'react-dom';

// 每次打包时，都需要重新打包react和react-dom
// 1）先把react和react-dm打包好，先存起来
// 2）引用打包好的文件
// 3) 相当于把react和reactDom打好包放在那里，用即可
// 

// html + js 的混合写法

let ele = <h1>jsx111 语法</h1>
ReactDOM.render(ele,window.root);


