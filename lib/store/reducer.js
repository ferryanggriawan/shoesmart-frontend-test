import { combineReducers } from "redux"
import productStore from "./product/product.store"

const rootReducer = combineReducers({
  product: productStore,
})

export default rootReducer
