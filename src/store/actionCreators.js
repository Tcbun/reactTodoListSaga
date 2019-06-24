import { ADD_INPUT_VALUE,ADD_LIST_ITEM,DELETE_LIST_ITEM,INIT_LIST_ITEM } from './actionTypes'

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