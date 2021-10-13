import { ACTIONS } from "../../../actions/admin/account/AccountListAction";

const init = {
  accounts: [],
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
    case ACTIONS.LOAD: 
      state = {
        ...state,
        accounts: [...state.accounts, ...action.newAccounts]
      };
      break;

    case ACTIONS.DELETE: 
      state = {
        ...state,
        accounts: state.accounts.filter(item => item._id !== action.id)
      }
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
        accounts: [],
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
      
    case ACTIONS.SET_RESULT: 
      state = {
        ...state,
        result: action.result
      }
      break;

      default: break;
  }
  return {...state};
}

export default reducer;