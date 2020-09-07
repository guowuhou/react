import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

//子元素控制父元素

class Parentdom extends React.Component{
    constructor(props) {
        super(props);
        // this.faterFun = this.faterFun.bind(this);
    };
    render(){
        return (
            <div>
                <form action="http://www.baidu.com">
                    <h1>helloworld</h1>
                    <button onClick={this.submitFun}>提交</button>
                </form>
                <button onClick={(e) => this.submitFun1('helloworld',e)}>提交1</button>
                 {/*如果要传入数据则要写成() => {}这样的格式*/}
            </div>
        )
    }
    submitFun = (e)=> {
        e.preventDefault();
    }
    submitFun1 = (msg,e)=> {
        console.log(msg);
    } 
}


ReactDOM.render(<Parentdom />,document.getElementById('root'));

