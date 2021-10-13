import { ACTIONS } from "../../../actions/admin/account/AccountNewAction";

const init = {
  newAccount: {
    uname: '',
    pwd: '',
    re_pwd: '',
    full_name: '',
    email: '',
    phone: '',
    sex: true,
    birthday: ''  
  },
  result: {
    success: true,
    message: 'Nothing'
  }
}

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.RESET: 
      state = {...init}
      break;
    case ACTIONS.CHANGE_FIELD:
      state = {
        ...state,
        newAccount: {
          ...state.newAccount,
          [action.name]: action.value
        }
      }
      break;
    case ACTIONS.CHANGE_RESULT:
      state = {
        ...state,
        result: action.result
      }
      break;
    default:
      break;
  }
  return state;
}

export default reducer;