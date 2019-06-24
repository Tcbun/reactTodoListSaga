import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { List, Typography } from 'antd'

class TodoListUI extends Component {
    render() {
        return (
            <div>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        onChange={this.props.handleChange}
                    />
                    <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <div>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={(index) => {this.props.handledeleteItem(index)}}>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default TodoListUI;