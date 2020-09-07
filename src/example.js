import React from 'react';
import ReactDom from 'react-dom'

class Example extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newTitle: '我是引入的组件啊'
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.newTitle}</h1>
            </div>
        )
    }
}

export default Example;