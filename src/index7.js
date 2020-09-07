import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

//父元素控制子元素
//在父元素中使用state去控制子元素props的从而达到付元素数据传递给子元素
class Father extends React.Component{
   constructor(props){
       super(props); //必须要写super
       this.state = {
           isActive: true
       };
       this.cnotronFun = this.cnotronFun.bind(this);
   };

   cnotronFun() {
       this.setState({
           isActive: !this.state.isActive
       })
   }

   render() {
        return (
            <div>
                <button onClick={this.cnotronFun}>控制子元素显示</button>
                <Children isActive={this.state.isActive} />
            </div>
        )
    }
}

class Children extends React.Component{
    // constructor(props){
    //     super(props);
    // };
    
    render() {
        // console.log(this.props);
        let ele = null;
        if(this.props.isActive){
            ele = "active";
        }else{
            ele = "";
        }
        return(
            <div className={"contents " + ele}>我是子元素</div>
        )
    }
}

ReactDOM.render(<Father />,document.getElementById('root'));

