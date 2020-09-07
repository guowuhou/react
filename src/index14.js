// import React from 'react';
import React, {Component}from 'react'; //解构的写法
import ReactDOM from 'react-dom';

//生命周期

// class Comlife extends React.Component{
class Comlife extends Component{ //因为引入Component的时候用了解构的方法，可以这样写
    constructor(props) {
        super(props);//调用继承的构造函数
        this.state = {
            msg:"hellp world"
        };
        console.log('构造函数');
    }

    componentWillMount() {
        console.log('组件将要渲染');
    }

    componentDidMount() {
        console.log('组件渲染完毕');
    }

    componentWillReceiveProps() {
        console.log('组件将要接收新的state和props');
    }

    shouldComponentUpdate() {
        //如果希望更新就返回true,否则则返回false 
         console.log('组件是否要更新的state和props');
         return true;
    }
    componentWillUpdate() {
        console.log('组件将要跟新');
    }

    componentDidUpdate() {
        console.log('组件更新完毕');
    }

    componentWillUnmount() {
        console.log('组件将要移除');
    }

    render (){
        console.log('render构造函数');
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>helloworld</button>
            </div>
        )
    }
    
    changeMsg=()=> {
        this.setState({
            msg:"hello gwh"
        })
    }
}

class Parents extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             isShow: true
         }
     }

     render() {
         if(this.state.isShow){
             return (
                 <div>
                    <button onClick={this.removeClick}>移除comfile</button>
                    <Comlife></Comlife>
                 </div>
             )
         }else{
            return <h1>将comfile已经移除</h1>
         }
     }

     removeClick = ()=> {
         this.setState({
             isShow: false
         })
     }
}

ReactDOM.render(
    <Parents />,
    document.getElementById('root')
)


