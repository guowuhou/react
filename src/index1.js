import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// let h1 = <div><h1>hello world</h1><span>这是副标题</span></div>;
// let dom = document.getElementById('root');
// ReactDOM.render(h1,dom);


// let clock = function(){
//     let nowtime = new Date().toLocaleTimeString();
//     let html = <h1>当前时间是:{nowtime}</h1>;
//     let dom = document.getElementById('root');
//     ReactDOM.render(html,dom);
// };
// setInterval(clock,1000);

let Clock = function(props){
    return (
       <div>
          <h1>当前时间:</h1>
          <span>{props.data.toLocaleTimeString()}</span>
       </div>
    )
};

let runTime = function(){
    let times = new Date();
    let dom = document.getElementById('root');
    ReactDOM.render(
      <Clock data={times} />, dom
    )
};

setInterval(runTime, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  //缓存
