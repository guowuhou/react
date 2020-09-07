import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

//子元素控制父元素

class Parent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            childrens: null
        };
        this.faterFun = this.faterFun.bind(this); //绑定this
    };
    render(){
        return (
            <div>
                <h1>我是父组件</h1>
                <div>我是来自子组件的{this.state.childrens}</div>
                <Child data={this.faterFun} />
            </div>
        )
    }
    faterFun(data){
        this.setState({
             childrens: data
        })
    }
}

class Child extends  React.Component{
    constructor(props){
        super(props);
        this.state = {
            childtip: 'hello word'
        };
        // this.clickCb.bind(this);
    };
    render(){
       return (
           <div>
                <button onClick={this.clickCb}>点击我看父组件的描述啊</button>
                <button onClick={() => this.props.data('6666')}>点击我看另一种父组件的描述啊</button>
           </div>
       )
    };
    //注意clickCb这种写法和this.clickCb.bind(this)的区别，即如果写成clickCb(){},则需要绑定this,
    //this.clickCb = this.clickCb.bind(this);
    clickCb = ()=>{
        console.log(this);
        this.props.data(this.state.childtip);
    }
}


ReactDOM.render(<Parent />,document.getElementById('root'));

