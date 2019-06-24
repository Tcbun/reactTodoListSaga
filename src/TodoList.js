import React, { Component } from 'react'
import store from './store';
import { getInputChange, getAddListItem, getDeleteListItem,initList } from './store/actionCreators'
import TodoListUI from './TodoListUI';
import Axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        // console.log(store.getState())
        this.onHandleChange = this.handleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.HandleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount() {
        Axios.get('https://www.fastmock.site/mock/06c9d41c50b3aca91d14f8297dab6173/Test/test').then((res) => {
            console.log(res)
            const data = res.data.data
            const action = initList(data)
            console.log(action)
            store.dispatch(action)
        })
    }
    handleChange(e) {
        const action = getInputChange(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange() {
        this.setState(store.getState())
    }
    handleBtnClick(e) {
        const action = getAddListItem()
        store.dispatch(action)
    }
    handledeleteItem(index) {
        const action = getDeleteListItem(index)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleChange={this.handleChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handledeleteItem={this.handledeleteItem}
            />
        )
    }
}

export default TodoList