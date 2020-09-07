import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

// let newTime = new Date().toLocaleTimeString();
// let str = '当前时间是'
// let element = (
//     <div>
//         <h1>hello world</h1>
//         <h2>{str+newTime}</h2>
//     </div>
// );

// let man ="吃了";
// let element2= (
//     <div>
//         <h1>今天是否吃饭</h1>
//         <h2>{man ==="吃了" ? "没吃" : "吃饺子"}</h2>
//     </div>
// );

// let man ="吃了";
// let element3= (
//     <div>
//         <h1>今天是否吃饭</h1>
//         <h2>{man ==="吃了" ? <button>没吃</button> : "吃饺子"}</h2>
//     </div>
// );

// let man ="吃了日";
// let newobi = (
//     <div>
//          <span>22</span>
//          <span>33</span>
//          <span>11</span>
//     </div>
// )
// let element4= (
//     <div>
//         <h1>今天是否吃饭</h1>
//         <h2>{man ==="吃了" ? <button>没吃</button> : newobi}</h2>
//     </div>
// );
// console.log(element4);

let color = 'bgRed';
let logo = 'https://www.baidu.com/img/pc_cc75653cd975aea6d4ba1f59b3697455.png';
//HTML的样式类名要写className，因为class在js中是关键词
let element5 = (
    <div className={color}>
      <span>我是颜色啊</span>
      <img src={logo} />
    </div>
)

ReactDOM.render(element5,document.getElementById('root'));

