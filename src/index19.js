import React from 'react';
import ReactDOM from 'react-dom';
import Redux,{createStore} from 'redux'


//Redux 先安装 cnpm install redux --save
//Redux的关键词
//Store:数据仓库，保存数据的地方。
//State:是一个对象，数据仓库里的所有数据都放在一个state里。
//Action:一个动作，用来触发数据改变的方法。
//Dispatch:将动作触发成方法
//Reducer:是一个函数，通过获取动作，改变数据，生成一个新的state,从而改变页面
//subscribe :监听数据变化，重新进行页面的渲染


//用于通过动作创建新的state
const reducer = function(state={num:0},action){
    console.log(action);
    switch(action.type){
        case "add":
          state.num++;
          break;
        case "decrement":
          state.num--;
          break;
        default:
          break;
    }
    console.log(state);
    return {...state}; //相当于对象的copy
};

//创建仓库
const store = createStore(reducer);
console.log(store);



function add(){
    //通过仓库的方法dispatch进行数据的修改
    store.dispatch({type:"add",contnet:{msg:"helloworld"}});
}

function decrement(){
    //通过仓库的方法dispatch进行数据的修改
    store.dispatch({type:"decrement"})
}

//函数式组件
const Counter = function(props) {
    let state = store.getState(); //获取仓库的数据
    console.log(state);
    return (
        <div>
            <h1>计数数量:{state.num}</h1>
            <button onClick={add}>计数+1</button>
            <button onClick={decrement}>计数-1</button>
        </div>
    )
}

ReactDOM.render(  
    <Counter></Counter>,
    document.getElementById('root')
);

store.subscribe(()=>{//从新渲染页面
    ReactDOM.render(  
        <Counter></Counter>,
        document.getElementById('root')
    );
})

