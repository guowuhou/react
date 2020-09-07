import React from 'react';
import ReactDOM from 'react-dom';

//条件渲染
let arr = ['one','two','three'];
let arrHtml = [<li>one</li>,<li>two</li>,<li>three</li>];

class ListItem extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>这是数组啊</h1>
                <ul>
                   {arrHtml}
                </ul>
            </div>
            
        )
    }
}

ReactDOM.render(<ListItem />,document.getElementById('root'));

