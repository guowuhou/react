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
        if(this.state.isLogin){
            return (
                <UserLogin />
            )
        }else{
            return (
                <UserGreet />
            )
        }
       
    }
}

ReactDOM.render(<ParentsDom />,document.getElementById('root'));

