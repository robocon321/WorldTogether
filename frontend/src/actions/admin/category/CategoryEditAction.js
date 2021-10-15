const ACTIONS = {
  RESET: 'RESET',
  CHANGE_FIELD: 'CHANGE_FIELD',
  ADD_ATTRIBUTE: 'ADD_ATTRIBUTE',
  LOAD_ATTRIBUTE: 'LOAD_ATTRIBUTE',
  REMOVE_ATTRIBUTE: 'REMOVE_ATTRIBUTE',
  CHANGE_ATTRIBUTE: 'CHANGE_ATTRIBUTE',
  SET_RESULT: 'SET_RESULT',
  LOAD_CATEGORY: 'LOAD_CATEGORY',
  SET_TREE: 'SET_TREE',
  SET_CATEGORY: 'SET_CATEGORY'
}

const setCategory = category => {
  return {
    type: ACTIONS.SET_CATEGORY,
    category
  }
}

const setTrees = (trees) => {
  return {
    type: ACTIONS.SET_TREE,
    trees
  }
}

const loadAll = (categories) => {
  return {
    type: ACTIONS.LOAD_CATEGORY,
    categories
  }
}

const reset = () => {
  return {
    type: ACTIONS.RESET
  }
}

const changeField = (name, value) => {
  return {
    type: ACTIONS.CHANGE_FIELD,
    name,
    value
  }
}

const addAttribute = (attributes) => {
  return {
    type: ACTIONS.ADD_ATTRIBUTE,
    attributes
  }
};

const removeAttribute = (index) => {
  return {
    type: ACTIONS.REMOVE_ATTRIBUTE,
    index
  }
}

const changeAttribute = (index, name, value) => {
  return {
    type: ACTIONS.CHANGE_ATTRIBUTE,
    index,
    name,
    value
  }
}

const setResult = (result) => {
  return {
    type: ACTIONS.SET_RESULT,
    result
  }
}

const loadAttribute = (attributes) => {
  return {
    type: ACTIONS.LOAD_ATTRIBUTE,
    attributes
  }
}

export {
  changeField, 
  changeAttribute, 
  removeAttribute, 
  addAttribute, 
  setResult, 
  reset, 
  setTrees, 
  loadAll, 
  setCategory,
  loadAttribute, 
  ACTIONS
};
