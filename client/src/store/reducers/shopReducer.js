const defaultState = {
    products : [
        
    ]
}

export const ADD_PRODUCT = 'ADD_PRODUCT'



export const shopReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products:[...action.payload]}
        default: return state
    }
}