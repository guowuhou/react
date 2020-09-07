import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Tab extends React.Component{
   constructor(props){//原生继承
       super(props); //必须要写super
       this.state = {
           c2: "content",
           c1: "content active"
       }
       this.btnCb = this.btnCb.bind(this)
   };
   btnCb(e) {
    //    console.log(e.target.dataset.index);
       let index = e.target.dataset.index;
       if(index == '1'){
           this.setState({
                c2: "content",
                c1: "content active"
           })
        //    this.componentDidMount(index);
       }else{
            this.setState({
                c1: "content",
                c2: "content active"
           })
        //    this.componentDidMount(index);
       }
   };

   render() {
        return (
            <div>
                <button data-index="1" onClick={this.btnCb}>内容一</button>
                <button data-index="2" onClick={this.btnCb}>内容二</button>
                <div className={this.state.c1}>
                    <h1>{this.state.c1}</h1>
                </div>
                 <div className={this.state.c2}>
                    <h1>{this.state.c2}</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Tab />,document.getElementById('root'));

