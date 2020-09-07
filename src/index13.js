import React from 'react';
import ReactDOM from 'react-dom';

//条件渲染

// function ListObj(props){
//     return (
//         <li>
//             <h3>{props.data.title}</h3>
//             <h4>{props.data.content}</h4>
//         </li>
//     )
// }

class ListObj extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
             <li onClick={(e)=>this.clickCb(this.props.data.title,this.props.index,e)}>
                <h3>{this.props.data.title}</h3>
                <h4>{this.props.data.content}</h4>
            </li>
        )
    }

    clickCb(item,index,e){
        alert(item + '-' + index)
    }
}

class ListHtml extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        list: [
                {title: 'one', content: '一'},
                {title: 'two', content: '二'},
                {title: 'three', content: '三'}
            ]
        }
    }
    render() {
        // let listItem = [];
        // for(var i = 0; i < this.state.list.length; i++){
        //     let item = (
        //         <li>
        //             <h3>{this.state.list[i].title}</h3>
        //             <h4>{this.state.list[i].content}</h4>
        //         </li>
        //     );
        //     listItem.push(item);
        // };
        let listItem = this.state.list.map((item, index) => {
            return (
                // <li key={index}>
                //     <h3>{index}{item.title}</h3>
                //     <h4>{item.content}</h4>
                // </li>
                <ListObj key={index} index={index} data={item} />
            )
        });
        return (
            <div>
                <h1>今日天气很热啊</h1>
                <ul>
                    {listItem}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<ListHtml />,document.getElementById('root'));

