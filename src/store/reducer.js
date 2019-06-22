const defaultValue = {
    inputValue: 'item info',
    list: ['1', '2', '3']
}

export default (state = defaultValue, action) => {
    // console.log(state,action)
    if (action.type === 'CHANGE_INPUT_VALUE') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        // console.log(newState)
        return newState
    }
    if (action.type === 'add_list_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        // console.log(newState)
        console.log(state,action)
        return newState
    }
    return state
}