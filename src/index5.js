import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Clock extends React.Component{
   constructor(props){
       super(props); //必须要写super
       this.state = {
           time: new Date().toLocaleTimeString()
       };
    //    console.log(this.state.time);
   }

   render() {
    //    console.log(this.state.time);
        //数据的改变刷新要在render里面重新赋值
    //    this.state.time = new Date().toLocaleTimeString();
       return(
           <div>当前时间:{this.state.time}</div>
       )
   }

   //生命周期函数,组件渲染完成时调用
   componentDidMount(){
       setInterval(()=>{
            // console.log(this.state.time);
           //切勿直接修改state数据,直接state重新渲染内容，需要使用setState
           //通过修改this.setState完后，数据并不会立即修改DOM里面的内容，react会在这个函数，
           //内容所有设置状态改变后，统一对比虚拟DOM对象，然后统一修改，提升性能。
           //小程序也是借鉴react状态管理操作
            this.setState({
                time: new Date().toLocaleTimeString()
            })
            // console.log(this.state.time);
       },1000)
   }
}

ReactDOM.render(<Clock/>,document.getElementById('root'));

// setInterval(()=>{
//     ReactDOM.render(<Clock/>,document.getElementById('root'));
//     // console.log(new Date());
// },1000)

