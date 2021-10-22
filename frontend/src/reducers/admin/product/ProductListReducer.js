import { ACTIONS } from "../../../actions/admin/product/ProductListAction";

const init = {
  products: [],
  count: 0,
  page: 0,
  size: 10,
  search: '',
  result: {
    success: false,
    message: 'Nothing'
  }
};

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.LOAD_PRODUCT: 
      state = {
        ...state,
        products: [...state.products, ...action.newProducts]
      };
      break;

    case ACTIONS.NEXT_PAGE:
      state = {
        ...state,
        page: state.page + 1
      }
      break;

    case ACTIONS.SET_COUNT:
      state = {
        ...state,
        count: action.count
      }    
      break;
    case ACTIONS.RESET:
      state = {
        ...state,
        products: [],
        count: 0,
        page: 0,
        size: 10,      
      };
      break;

    case ACTIONS.SET_SEARCH:
      state = {
        ...state,
        search: action.search,
        products: [],
        count: 0,
        page: 0,
      }
      break;
      
    case ACTIONS.SET_RESULT: 
      state = {
        ...state,
        result: action.result
      }
      break;

      case ACTIONS.DELETE:
        state.products = state.products.filter(item => item._id !== action.id);
        break;

        default: break;

  }
  return {...state};
}

export default reducer;