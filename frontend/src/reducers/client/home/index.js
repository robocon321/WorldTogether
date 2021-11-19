import {createStore, combineReducers} from "redux";
import flashSaleReducer from "./FlashSaleReducer";
import suggestSaleReducer from "./SuggestSaleReducer";

const reducer = combineReducers({
  flashSale: flashSaleReducer,
  suggestSale: suggestSaleReducer
})

export default createStore(reducer);