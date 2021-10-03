const ACTIONS = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  ADD_CATEGORIES: 'ADD_CATEGORIES',
  EDIT_CATEGORY: 'EDIT_CATEGORY',
  DELETE_CATEGORY: 'REMOVE_CATEGORY',
  SET_COUNT: 'SET_COUNT',
  SET_SEARCH: 'SET_SEARCH',
  RESET: 'RESET',
  NEXT_PAGE: 'NEXT_PAGE',
  SET_TREES: 'SET_TREES'
}

const addCategory = (newCategory) => {
  return {
    type: ACTIONS.ADD_CATEGORY,
    newCategory,
  }
}

const addCategories = newCategories => {
  return {
    type: ACTIONS.ADD_CATEGORIES,
    newCategories
  }
}

const editCategory = newCategory => {
  return {
    type: ACTIONS.EDIT_CATEGORY,
    newCategory
  }
}

const deleteCategory = id => {
  return {
    type: ACTIONS.DELETE_CATEGORY,
    id
  }
}

const nextPage = () => {
  return {
    type: ACTIONS.NEXT_PAGE
  }
}

const setCount = count => {
  return {
    type: ACTIONS.SET_COUNT,
    count
  }
}

const setSearch = search => {
  return {
    type: ACTIONS.SET_SEARCH,
    search
  }
}

const reset = () => {
  return {
    type: ACTIONS.RESET
  }
}

const setTrees = (trees) => {
  return {
    type: ACTIONS.SET_TREES,
    trees
  }
}

export {addCategories, addCategory, editCategory, deleteCategory, setSearch, setCount, reset, nextPage, setTrees, ACTIONS};
