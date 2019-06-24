import { ADD_INPUT_VALUE,ADD_LIST_ITEM,DELETE_ITEM_ITEM } from './actionTypes'

const defaultValue = {
    inputValue: 'item info',
    list: []
}

export default (state = defaultValue, action) => {
    // console.log(state,action)
    if (action.type === ADD_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        // console.log(newState)
        return newState
    }
    if (action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        // console.log(newState)
        console.log(state, action)
        return newState
    }

    if (action.type === DELETE_ITEM_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        console.log(action.index)
        return newState
    }

    return state
}   