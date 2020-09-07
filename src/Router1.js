import React from 'react';
//hash模式主要是以#号分割的，#号hash值的变更是不会触发请求的。即当前页面不会重新加载或刷新
//import {HashRouter as Router,Link, Route}from 'react-router-dom'

//本节注意Redirect exact以及path="/abc"的switch 的使用
import {BrowserRouter as Router,Link, Route,Redirect,Switch} from 'react-router-dom'

function loginInfo(props) {
    // props.longinState === "success"
    // props.longinState === "fail"
    //Redirect重定向组件
    if(props.location.state.loginState === "success"){
        return (
            <Redirect to="/admin"> </Redirect>
        )
    }else{
        return (
            <Redirect to="/login"> </Redirect>
        )
    }
}

let Formcom = ()=>{
    let pathObj = {
        pathname: '/logininfo',
        state: {
            loginState: 'success'
        }
    }
    return (
        <div>
            <h1>表单验证</h1>
            <Link to={pathObj}>登录验证后的页面</Link>
        </div>
    )
}

class Chilredn extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickEvent}>跳转到首页</button>
            </div>
        )
    }

    clickEvent = ()=>{
        console.log(this.props);
        this.props.history.push("/",{msg: "这是由childcom组件发给首页的"});
        // this.props.history.replace("/",{msg: "这是由childcom组件发给首页的"});
        // this.props.history.go(1); //前进
        // this.props.history.goForward(1); //前进
        // this.props.history.go(1); //前进
        // this.props.history.go(-1); //后退
        // this.props.history.goBack();//后退
    }
}

class Routercompon extends React.Component{
    constructor(props){
        super(props)
    };
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact component={(prop)=>{console.log(prop); return <h1>首页</h1>}}></Route>
                        <Route path="/form" exact component={Formcom}></Route>
                        <Route path="/login" exact component={()=>{ return <h1>登录页</h1>}}></Route>
                        <Route path="/logininfo" exact component={loginInfo}></Route>
                        <Route path="/admin" exact component={()=>{ return <h1>admin,登录成功页</h1>}}></Route>
                        <Route path="/abc" exact component={()=>{ return <h1>abc1,登录成功页</h1>}}></Route>
                        <Route path="/abc" exact component={()=>{ return <h1>abc2,登录成功页</h1>}}></Route>
                        <Route path="/child" exact component={Chilredn}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routercompon;
