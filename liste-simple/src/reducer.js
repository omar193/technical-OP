const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addElement':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        default:
            return state
    }
}
export default reducer;