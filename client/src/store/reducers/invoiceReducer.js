const defaultState = {
    needs : [
        
    ]
}

export const ADD_NEED = 'ADD_NEED'



export const invoiceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEED:
            return { ...state, needs:[...action.payload]}
        default: return state
    }
}