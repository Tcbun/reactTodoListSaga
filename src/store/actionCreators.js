import { ADD_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM,INIT_LIST_ITEM } from './actionTypes'
import Axios from 'axios';

export const getInputChange = (value) => ({
    type:ADD_INPUT_VALUE,
    value
})

export const getAddListItem = () => ({
    type:ADD_LIST_ITEM
})

export const getDeleteListItem = (index) => ({
    type:DELETE_LIST_ITEM,
    index
})

export const initList = (data) => ({
    type:INIT_LIST_ITEM,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        Axios.get('https://www.fastmock.site/mock/06c9d41c50b3aca91d14f8297dab6173/Test/test').then((res) => {
            console.log(res)
            const data = res.data.data
            const action = initList(data)
            dispatch(action)
        })
    }
}