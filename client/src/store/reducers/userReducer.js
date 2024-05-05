const defaultState = {
    auth: false,
    role: 'salesman'
}

export const EXIT = 'EXIT'
export const ADMIN_ENTER = 'ADMIN_ENTER'
export const SALESMAN_ENTER = 'SALES_ENTER'
export const STOREKEEPER_ENTER = 'STOREKEEPER_ENTER'


export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADMIN_ENTER:
            return { ...state, auth: true, role: 'admin' }
        case SALESMAN_ENTER:
            return { ...state, auth: true, role: 'salesman' }
        case STOREKEEPER_ENTER:
            return { ...state, auth: true, role: 'storekeeper' }
        case EXIT:
            return { ...state, auth: false}
        default: return state
    }
}