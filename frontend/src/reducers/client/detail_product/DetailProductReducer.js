import { ACTIONS } from "../../../actions/client/detail_product/DetailProductAction";
const init = {
  product: {},
  product_titles: [],
  product_values: []
};

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.LOAD_DETAIL_PRODUCT:
      state.product = action.product;
      break;
    case ACTIONS.LOAD_OPTIONS:
      state.product_titles.push(...action.product_titles);
      state.product_values.push(...action.product_values);
      break;
    default:
      break;
  }

  return {...state};
}

export default reducer;