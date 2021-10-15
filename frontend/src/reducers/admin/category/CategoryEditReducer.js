/* eslint-disable default-case */
import { ACTIONS } from "../../../actions/admin/category/CategoryEditAction";
import { DATATYPE } from "../../../utils/Constants";

const init = {
  category :{
    title: '',
    parent_id: null,
    display_order: null,
    meta_keyword: '',
    meta_descrp: '',
    meta_title: '',
    slug: '',
    icon: ''  
  },
  attributes: [{
    title: '',
    category_id: null,
    datatype: DATATYPE.NUMBER
  }],
  result: {
    success: true,
    message: 'Nothing'
  },
  categories: [],
  trees: []
};

const reducer = (state = init, action) => {
  switch(action.type) {
      case ACTIONS.LOAD_CATEGORY:
      state = {
        ...state,
        categories: action.categories
      }
      break;

      case ACTIONS.RESET:
      state = {...init}
      break;
    
      case ACTIONS.SET_RESULT:
      state = {
        ...state,
        result: action.result
      }
      break
    
      case ACTIONS.CHANGE_FIELD: 
      state = {
        ...state,
        category: {
          ...state.category,
          [action.name]: action.value
        }
      }
      break;
    
      case ACTIONS.ADD_ATTRIBUTE: 
      state = {
        ...state,
        attributes: [...state.attributes, {
          title: '',
          category_id: null,
          datatype: DATATYPE.NUMBER
        }]
      }
      break;
      
      case ACTIONS.CHANGE_ATTRIBUTE:
        let {attributes} = state;
        attributes[action.index] = {
          ...attributes[action.index],
          [action.name] : action.value
        };
        break;
      
      case ACTIONS.REMOVE_ATTRIBUTE:
        state.attributes.splice(action.index, 1);
        break;

      case ACTIONS.SET_TREE: 
        state = {
          ...state,
          trees: action.trees
        }
        break;

      case ACTIONS.SET_CATEGORY:
        state = {
          ...state,
          category: action.category
        }
        break;
      
      case ACTIONS.LOAD_ATTRIBUTE:
        state = {
          ...state,
          attributes: action.attributes
        }
        break;
      default : break;
  }

  return {...state}
}

export default reducer;