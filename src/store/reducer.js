import { ADD_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST_ITEM } from './actionTypes'

const defaultValue = {
    inputValue: '',
    list: []
}

export default (state = defaultValue, action) => {
    // console.log(state,action)
    if (action.type === ADD_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        console.log('BUG:',newState)
        // console.log(state, action)
        return newState
    }

    if (action.type === INIT_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    if (action.type === DELETE_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}   