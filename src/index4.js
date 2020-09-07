import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'


// function Childcom(props) {
//     let title = "我是副标题";
//     // let weather = "下雨";
//     console.log(props);
//     let weather = props.weather;
//     let isGo = weather === "下雨" ? "不出门" : "出门";
//     return (
//         <div>
//             <h1>函数式组件</h1>
//             {title}
//             <div>
//                 是否出门? <span>{isGo}</span>
//             </div>
//         </div>
//     )
// }
// ReactDOM.render(<Childcom weather="不下雨" />,document.getElementById('root'));

// 类组件继承

function Childcom(props) {
    let title = "我是副标题";
    // console.log(props);
    let weather = props.weather;
    let isGo = weather === "下雨" ? "不出门" : "出门";
    return (
        <div>
            <h1>函数式组件</h1>
            {title}
            <div>
                是否出门? <span>{isGo}</span>
            </div>
        </div>
    )
}
class HelloWorld extends React.Component{
    //注意：类组件使用的是render方法
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>类组件helloworld</h1>
                <Childcom weather={this.props.weather}/>
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld weather="下雨" />,document.getElementById('root'));

