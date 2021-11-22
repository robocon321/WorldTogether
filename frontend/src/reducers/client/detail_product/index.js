import {createStore, combineReducers} from "redux";
import suggestSaleReducer from "./SuggestSaleReducer";
import detailProductReducer from "./DetailProductReducer";

const reducer = combineReducers({
  suggestSale: suggestSaleReducer,
  detailProduct: detailProductReducer
})

export default createStore(reducer);