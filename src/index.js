import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'


//react-redux 先安装 cnpm install react-redux --save
class Counter extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        //计数，通过store的state传给props，直接通过props就可以将state的数据获取
        const value = this.props.value;
        //将修改数据的事件或者方法传入到props
        const onAddClick = this.props.onAddClick;
        //等同于vuex的mapMutation mapState
        return (
            <div>
                <h1>计数的数量:{value}</h1>
                <button onClick={onAddClick}>数字+1</button>
            </div>
        )
    }
}

const addAction = {
    type: 'add'
}

function reducer(state={num:0},action){
    switch(action.type){
        case "add":
            state.num++;
            break;
        default:
            break;
    }
    return {...state}
}

const store = createStore(reducer);

//将状态映射到props函数
function mapStateToProps(state){
    return {
        value: state.num
    }
}

//将修改数据的方法映射到props,默认会传入store的dispatch方法
function mapDispatchToProps(dispatch){ //dispatch形参为固定的写法
    return {
        onAddClick: ()=>{dispatch(addAction)}
    }
}

//将上面的这两个方，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


ReactDOM.render(  
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
);

