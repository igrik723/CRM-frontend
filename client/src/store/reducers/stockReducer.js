const defaultState = {
    stocks : [
       
    ]
}

export const ADD_STOCK= 'ADD_STOCK'



export const stockReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_STOCK:
            return { ...state, stocks:[...action.payload]}
        default: return state
    }
}