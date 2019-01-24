// import React from 'react';  使用 TS 后，不能用这种方式了哦


import * as React from 'react';

interface IProps {
    name: string
}
interface IState{
    number: number
}

// 约束组件 必须传个name过来
export default class Counter extends React.Component<IProps, IState>{
    state = {
        number: 0
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={ ()=> this.setState({number: this.state.number + 1})}>+</button>
            </div>
        )
    }
}