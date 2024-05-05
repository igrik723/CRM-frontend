const defaultState = {
    accepts : [
        
    ]
}

export const ADD_ACCEPT = 'ADD_ACCEPT'



export const acceptenceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ACCEPT:
            return { ...state, accepts:[...action.payload]}
        default: return state
    }
}