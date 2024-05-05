import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userReducer'
import { shopReducer } from './shopReducer'
import { stockReducer } from './stockReducer'
import { invoiceReducer } from './invoiceReducer'
import { acceptenceReducer } from './acceptanceReducer'

const rootReducer = combineReducers({
    user: userReducer,
    shop: shopReducer,
    stock: stockReducer,
    invoice: invoiceReducer,
    accept: acceptenceReducer
})

export const store = configureStore({
    reducer: rootReducer,
})