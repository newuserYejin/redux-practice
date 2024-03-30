let initialState = {
    count: 0,
    id: "",
    password: ""
}

function reducer(state = initialState, action) {
    console.log("action:", action)
    if (action.type === "increment") {
        return { ...state, count: state.count + action.payload.num }
    } else if (action.type === "login") {
        return { ...state, id: action.payload.id, password: action.payload.password }
    } else if (action.type === "decrement") {
        return { ...state, count: state.count - action.payload.downNum }
    }

    return { ...state }
}

export default reducer