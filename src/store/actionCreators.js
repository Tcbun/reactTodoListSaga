import { ADD_INPUT_VALUE,ADD_LIST_ITEM,DELETE_ITEM_ITEM } from './actionTypes'

export const getInputChange = (value) => ({
    type:ADD_INPUT_VALUE,
    value
})

export const getAddListItem = () => ({
    type:ADD_LIST_ITEM
})

export const getDeleteListItem = (index) => ({
    type:DELETE_ITEM_ITEM,
    index
})