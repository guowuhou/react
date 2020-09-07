import React from 'react';
import ReactDOM from 'react-dom';

//条件渲染
function UserGreet(props) {
    return (
        <h1>欢迎登录</h1>
    )
}

function UserLogin(props) {
    return (
        <h1>请先登录</h1>
    )
}

class ParentsDom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        }
    }
    render() {
        let element = null;
        if(this.state.isLogin){
             element = <UserLogin />
        }else{
             element = <UserGreet />
        }
        return (
            <div>
                <h1>这是头部</h1>
                {element}
                <h1>这是三元运算符的操作</h1>
                {this.state.isLogin ?  <UserLogin /> : <UserGreet />}
                <h1>这是尾部</h1>
            </div>
            
        )
    }
}

ReactDOM.render(<ParentsDom />,document.getElementById('root'));

