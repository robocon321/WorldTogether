/* eslint-disable default-case */
import { ACTIONS } from "../actions/CategoryAction";
import {createStore} from "redux";

const init = {
  categories: [],
  search: '',
  count: 0,
  page: 0,
  size: 10
};

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.ADD_CATEGORIES:
      state = {
        ...state,
        categories: action.newCategories
      }
      break;
    case ACTIONS.ADD_CATEGORY:
      state = {
        ...state,
        categories: [...action.categories, action.newCategory]
      }
      break;
      case ACTIONS.DELETE_CATEGORY: 
      state = {
        ...state,
        categories: state.categories.filter(item => item._id !== action.id)
      }
      break;

    case ACTIONS.EDIT_CATEGORY: 
      state.categories.forEach(item => {
        if(item._id === action.account._id) {
          item = action.category;
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
        categories: [],
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

  return {...state}
}

export default createStore(reducer);