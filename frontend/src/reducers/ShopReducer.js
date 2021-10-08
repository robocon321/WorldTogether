/* eslint-disable default-case */
import { ACTIONS } from "../actions/ShopAction";

const init = {
  shops: [],
  count: 0,
  page: 0,
  size: 10,
  search: ''
};

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.ADD_SHOP: 
      state = {
        ...state,
        shops: [...state.shops, action.newShop]
      };
      break;

    case ACTIONS.ADD_SHOPS:
      state = {
        ...state,
        shops: [...state.shops, ...action.newShops]
      };
      break;

    case ACTIONS.DELETE_SHOP: 
      state = {
        ...state,
        shops: state.shops.filter(item => item._id !== action.id)
      }
      break;

    case ACTIONS.EDIT_SHOP: 
      state.shops.forEach(item => {
        if(item._id === action.shop._id) {
          item = action.shop;
          return {...state}
        }
      });
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
        shops: [],
        count: 0,
        page: 0,
        size: 10,      
      };
      break;

    case ACTIONS.SET_SEARCH:
      state = {
        ...state,
        search: action.search
      }
      break;
  }
  return {...state};
}

export default reducer;