const ACTIONS = {
  LOAD_PRODUCT: 'LOAD_PRODUCT',
  LOAD_CATEGORY: 'LOAD_CATEGORY',
  LOAD_ATTRIBUTE: 'LOAD_ATTRIBUTE',
  LOAD_ATTRIBUTE_VALUE: 'LOAD_ATTRIBUTE_VALUE',
  LOAD_SHOP: 'LOAD_SHOP',
  LOAD_OPTION_PRODUCT: 'LOAD_OPTION_PRODUCT',
  CHANGE_FIELD: 'CHANGE_FIELD',
  CHANGE_ATTRIBUTE: 'CHANGE_ATTRIBUTE',
  CHANGE_FIELD_OPTION_TITLE: 'CHANGE_FIELD_OPTION_TITLE',
  CHANGE_FIELD_OPTION_VALUE: 'CHANGE_FIELD_OPTION_VALUE',
  ADD_PRODUCT_OPTION: 'ADD_PRODUCT_OPTION',
  ADD_GROUP_OPTION: 'ADD_GROUP_OPTION',
  REMOVE_PRODUCT_OPTION: 'REMOVE_PRODUCT_OPTION',
  REMOVE_GROUP_OPTION: 'REMOVE_GROUP_OPTION',
  RESET: 'RESET',
  SET_RESULT: 'SET_RESULT',
  SET_TREE: 'SET_TREE'
};

const loadOptionProduct = (product_titles, product_values) => {
  return {
    type: ACTIONS.LOAD_OPTION_PRODUCT,
    product_titles,
    product_values
  }
}

const loadProduct = product => {
  return {
    type: ACTIONS.LOAD_PRODUCT,
    product
  }
}

const loadShop = (shops) => {
  return {
    type: ACTIONS.LOAD_SHOP,
    shops
  }
}

const loadCategory = (categories) => {
  return {
    type: ACTIONS.LOAD_CATEGORY,
    categories
  }
}

const loadAttribute = (attributes) => {
  return {
    type: ACTIONS.LOAD_ATTRIBUTE,
    attributes
  }
}

const loadAttributeValue = values => {
  return {
    type: ACTIONS.LOAD_ATTRIBUTE_VALUE,
    values
  }
}

const changeField = (name, value) => {
  return {
    type: ACTIONS.CHANGE_FIELD,
    name,
    value
  }
}

const changeAttribute = (attr_id, name, value) => {
  return {
    type: ACTIONS.CHANGE_ATTRIBUTE,
    attr_id,
    name,
    value
  }
}

const changeFieldOptionTitle = (indexGroup, indexProduct, name, value) => {
  return {
    type: ACTIONS.CHANGE_FIELD_OPTION_TITLE,
    indexGroup,
    indexProduct,
    name,
    value
  }
}

const changeFieldOptionValue = (indexGroup, indexProduct, name, value) => {
  return {
    type: ACTIONS.CHANGE_FIELD_OPTION_VALUE,
    indexGroup,
    indexProduct,
    name, 
    value
  }
}

const addProductOption = (index) => {
  return {
    type: ACTIONS.ADD_PRODUCT_OPTION,
    index
  }
}

const addGroupOption = () => {
  return {
    type: ACTIONS.ADD_GROUP_OPTION
  }
}

const reset = () => {
  return {
    type: ACTIONS.RESET
  }
}

const removeProductionOption = (indexGroup, indexProduct) => {
  return {
    type: ACTIONS.REMOVE_PRODUCT_OPTION,
    indexGroup,
    indexProduct
  }
}

const removeGroupOption = (index) => {
  return {
    type: ACTIONS.REMOVE_GROUP_OPTION,
    index
  }
}

const setResult = (result) => {
  return {
    type: ACTIONS.SET_RESULT,
    result
  }
}

const setTrees = (trees) => {
  return {
    type: ACTIONS.SET_TREE,
    trees
  }
}

export {
  ACTIONS,
  loadOptionProduct,
  loadProduct,
  loadAttribute,
  loadCategory,
  loadShop,
  loadAttributeValue,
  addGroupOption,
  addProductOption,
  reset,
  removeGroupOption,
  removeProductionOption,
  changeAttribute,
  changeField,
  changeFieldOptionTitle,
  changeFieldOptionValue,
  setResult,
  setTrees
};