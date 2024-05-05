import { ADD_PRODUCT } from "../reducers/shopReducer"
import { ADMIN_ENTER, EXIT,  SALESMAN_ENTER, STOREKEEPER_ENTER } from "../reducers/userReducer"
import { ADD_STOCK } from "../reducers/stockReducer"
import { ADD_NEED } from "../reducers/invoiceReducer"
import { ADD_ACCEPT } from "../reducers/acceptanceReducer"

export const exitAction = (payload) => ({ type: EXIT, payload })
export const adminEnterAction = (payload) => ({ type: ADMIN_ENTER, payload })
export const salesmanEnterAction = (payload) => ({type: SALESMAN_ENTER, payload})
export const storekeeperEnterAction = (payload) => ({ type: STOREKEEPER_ENTER, payload })
export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const addStockAction = (payload) => ({type: ADD_STOCK, payload})
export const addNeedAction = (payload) => ({type: ADD_NEED, payload})
export const addAcceptAction = (payload) => ({type: ADD_ACCEPT, payload})