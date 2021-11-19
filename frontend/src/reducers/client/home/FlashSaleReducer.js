import { ACTIONS } from "../../../actions/client/home/FlashSaleAction";
const init = {
  products: [],
  product_titles: [],
  product_values: []
};

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.LOAD_PRODUCT:
      state.products.push(...action.products)
      break;
    case ACTIONS.LOAD_OPTION:
      state.product_titles.push(...action.product_titles);
      state.product_values.push(...action.product_values);
      break;
    default:
      break;
  }

  return {...state};
}

export default reducer;