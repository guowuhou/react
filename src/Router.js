import React from 'react';
//hash模式主要是以#号分割的，#号hash值的变更是不会触发请求的。即当前页面不会重新加载或刷新
//import {HashRouter as Router,Link, Route}from 'react-router-dom'

//history模式，也不发送请求，需要后端的配合使用，比较高级，模式更好
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'

function Home() {
  return (
    <div>
       <h1>adimn首页</h1>
    </div>
  );
}

function Me(props) {
    console.log(props);
  return (
    <div>
       <h1>adimn个人中心</h1>
    </div>
  );
}

function Product() {
  return (
    <div>
       <h1>adimn产品页面</h1>
    </div>
  );
}

function News(props) {
  return (
    <div>
       <h1>新闻页面,新闻的id{props.match.params.id}</h1>
    </div>
  );
}

class Routercom extends React.Component{
    constructor(props){
        super(props);
    }
     
    render() {
        let meobj = {
            pathname:"/me", //跳转的路径
            search:"?username=admin", //get请求的参数
            hash:"#abc", //设置hash值
            state:{msg:"helloword"} //传入组件的数据
        };
        return(
            <div id="app">
                <div>普通内容</div>
                <Router>
                    <Route path="/" exact component={()=>(<div>这是首页</div>)}></Route>
                    <Route path="/me" component={()=>(<div>me</div>)}></Route>
                    <Route path="/product" component={()=>(<div>product</div>)}></Route>
                </Router>
                
                <Router basename="/admin">
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to={meobj}>个人中心</Link>
                        {/* <Link to={meobj} replace>个人中心</Link>  replace是替换的作用*/}
                         <Link to="/news/456789">新闻页面</Link>
                        {/* 动态路由的配置 */}
                    </div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/me" component={Me}></Route>
                    <Route path="/news/:id" component={News}></Route>
                    {/* 动态路由的配置实现 */}
                </Router>
            </div>
        )
    } 

}

export default Routercom;
