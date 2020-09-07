import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import Example from './example'

//样式className的书写
let eleStyle = {
    background:"skyblue",
    borderBottom: "1px solid red"
}

// let element = (
//     <div>
//         <h1 style={eleStyle}>握手好玩啊</h1>
//     </div>
// )

let redbg = 'bgRed'
let classStr = ['bgRed', 'bgColor'].join(' ');
let element2 = (
    <div>
        {/*这里写注释*/}
        <h1 className={"abc " + redbg}>握手好玩啊</h1>
        <h1 className={redbg}>握手好玩啊</h1>
        <h1 className={classStr}>握手好玩啊</h1>
        <Example />
    </div>
)
ReactDOM.render(element2,document.getElementById('root'));

