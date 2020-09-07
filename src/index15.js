import React from 'react';
import ReactDOM from 'react-dom';


//插槽啊
class Parents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            new: null
        }
        console.log(this.props);//props里面有插槽的内容
    }

    render() {
        return (
            <div>
                <h1>组件插槽</h1>
                {this.props.children}
                <Childrens>
                     <h1 data-position="header">头部内容</h1>
                     <h2 data-position="main">主要内容</h2>
                     <h3 data-position="footer">尾部内容</h3>
                </Childrens>
            </div>
        )
    }
}

class Childrens extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        let headerCom,mainCom,footerCom;
        this.props.children.forEach((ele,index)=>{
            if(ele.props['data-position'] === 'header'){
                headerCom = ele;
            }else if(ele.props['data-position'] === 'main'){
                mainCom = ele;
            }else{
                footerCom = ele;
            }
        });
        return (
            <div>
                <div className="header">
                     {headerCom}
                </div>
                <div className="main">
                     {mainCom}
                </div>
                <div className="footer">
                     {footerCom}
                </div>
            </div>
        )
    }
}

class Readom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr: [1,2,3]
        }
    }

    render() {
        return (
            <Parents>
                 <h1 data-name="a" data-index={this.state.arr[0]}>子组件1</h1>
                 <h1 data-name="b" data-index={this.state.arr[1]}>子组件2</h1>
                 <h1 data-name="c" data-index={this.state.arr[2]}>子组件3</h1>
            </Parents>
        )
    }
}

ReactDOM.render(            
    <Readom> </Readom>,
    document.getElementById('root')
);

