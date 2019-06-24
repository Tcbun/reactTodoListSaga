import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { List, Typography } from 'antd'
import store from './store';
import { getInputChange,getAddListItem,getDeleteListItem } from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        // console.log(store.getState())
        this.onHandleChange = this.onHandleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.HandleBtnClick = this.HandleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    onHandleChange(e) {
        const action = getInputChange(e.target.value)
        store.dispatch(action)
        console.log('changed')
    }
    handleStoreChange() {
        // console.log('store change')
        this.setState(store.getState())
    }
    HandleBtnClick(e) {
        const action = getAddListItem()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = getDeleteListItem(index)
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <div>
                    <Input
                        placeholder={this.state.inputValue}
                        onChange={this.onHandleChange}
                    />
                    <Button type="primary" onClick={this.HandleBtnClick}>提交</Button>
                </div>
                <div>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index) => (
                            <List.Item onClick={this.deleteItem.bind(this,index)}>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList