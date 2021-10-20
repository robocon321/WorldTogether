import { ACTIONS } from "../../../actions/admin/product/ProductNewAction"

const init = {
  product: {
    title: '',
    descrp: '',
    category_id: null,
    detail: '',
    tophot: null,
    include_vat: false,
    meta_keyword: '',
    meta_descrp: '',
    meta_title: '',
    slug: '',
    shop_id: null,
    warrently: '1 tháng',
    tags: ''
  },
  group: [],
  shops: [],
  trees: [],
  categories: [],
  attributes: [],
  attributeValues:[],
  result: {
    success: true,
    message: 'Nothing'
  },
}

const initProductType = {
  product_title: {
    title: '',
    datatype: 0
  },
  product_value: {
    opt_title_id: '',
    text_value: '',
    number_value: 0,
    date_value: '',
    opt_real_price: 0,
    opt_sale_price: 0,
    avatar: '',
    imgs: ''
  }
}

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.LOAD_CATEGORY:
      state.categories = action.categories
      break;

    case ACTIONS.LOAD_SHOP:
      state.shops = action.shops
      break;

    case ACTIONS.LOAD_ATTRIBUTE:
      action.attributes.forEach(item => {
        state.attributeValues.push({attr_id: item._id});
      })
      state.attributes = action.attributes;
      break;

    case ACTIONS.CHANGE_ATTRIBUTE:
      let {attributeValues} = state;
      attributeValues[action.index] = {
        ...attributeValues[action.index],
        [action.name] : action.value
      };
      break;

    case ACTIONS.CHANGE_FIELD:
      state = {
        ...state,
        product: {
          ...state.product,
          [action.name]: action.value
        }
      }
      break;

    case ACTIONS.CHANGE_FIELD_OPTION_TITLE:
      state.group[action.indexGroup][action.indexProduct].product_title = {
        ...state.group[action.indexGroup][action.indexProduct].product_title,
        [action.name]: action.value
      }
      break;

      case ACTIONS.CHANGE_FIELD_OPTION_VALUE:
        state.group[action.indexGroup][action.indexProduct].product_value = {
          ...state.group[action.indexGroup][action.indexProduct].product_value,
          [action.name]: action.value
        }
      break;
  
    case ACTIONS.ADD_GROUP_OPTION:
      state.group.push([{...initProductType}]);
      break;

    case ACTIONS.ADD_PRODUCT_OPTION:
      state.group[action.index].push({...initProductType});
      break;
    
    case ACTIONS.REMOVE_PRODUCT_OPTION:
      state.group[action.indexGroup].splice(action.indexProduct, 1);
      break;
    
    case ACTIONS.REMOVE_GROUP_OPTION:
      state.group.splice(action.index, 1);
      break;
    
    case ACTIONS.SET_RESULT:
      state = {
        ...state,
        result: action.result
      }
      break;
    
    case ACTIONS.RESET: 
      state = {...init};
      break;
    
    case ACTIONS.SET_TREE: 
      state = {
        ...state,
        trees: action.trees
      }
      break;
    
    default: break;
  }

  return {...state};
}

export default reducer;