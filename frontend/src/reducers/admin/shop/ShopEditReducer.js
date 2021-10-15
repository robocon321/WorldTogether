import { ACTIONS } from "../../../actions/admin/shop/ShopEditAction";

const init = {
  newShop: {
    title: '',
    descrp: '',
    avatar: '',
    meta_keyword: '',
    meta_descrp: '',
    meta_title: '',
    slug: ''
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
        newShop: {
          ...state.newShop,
          [action.name]: action.value
        }
      }
      break;
    case ACTIONS.LOAD_SHOP:
      state = {
        ...state,
        newShop: action.newShop
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