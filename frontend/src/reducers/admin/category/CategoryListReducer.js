/* eslint-disable default-case */
import { ACTIONS } from "../../../actions/admin/category/CategoryListAction";

const init = {
  categories: [],
  trees: [],
  search: '',
  count: 0,
  result: {
    success: true,
    message: 'Nothing'
  }
};

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.LOAD_ALL:
      state = {
        ...state,
        categories: [...state.categories, ...action.newCategories]
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
      };
      break;

    case ACTIONS.SET_SEARCH:
      state = {
        ...state,
        search: action.search
      }
      break;
    case ACTIONS.SET_TREES:
      state = {
        ...state,
        trees: action.trees
      }
      break;

    case ACTIONS.SET_RESULT:
      state = {
        ...state,
        result: action.result
      }
      break

      case ACTIONS.DELETE:
        state = {
          ...state,
          categories: state.categories.filter(item => item._id !== action.id)
        }
        break;
  
        default : break;
  }

  return {...state}
}

export default reducer;