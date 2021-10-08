/* eslint-disable eqeqeq */
/* eslint-disable default-case */
import { ACTIONS } from "../actions/AttributeAction";

const init = {
  attrs: []
}

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.ADD_ATTRIBUTE:
      state = {
        attrs: [...state.attrs, action.newAttr]
      }
      break;
    case ACTIONS.ADD_ATTRIBUTES: 
      state = {
        attrs: [...state.attrs, ...action.newAttrs]
      }
      break;
    case ACTIONS.EDIT_ATTRIBUTE:
      if(action.newAttrs) {
        state = {
          attrs: [...state.attrs.filter(item => item.category_id != action.old_id), ...action.newAttrs]
        }  
      } else {
        state = {
          attrs: [...state.attrs.filter(item => item.category_id != action.old_id)]
        }
      }
      break;
    case ACTIONS.DELETE_ATTRIBUTE:
      state = {
        ...state,
        attrs: state.attrs.filter(item => item._id !== action.id)
      }
      break;
  }

  return {...state};
}

export default reducer;