const ACTIONS = {
  LOAD_ALL: 'LOAD_ALL',
  SET_COUNT: 'SET_COUNT',
  SET_SEARCH: 'SET_SEARCH',
  RESET: 'RESET',
  SET_TREES: 'SET_TREES',
  DELETE: 'DELETE',
  SET_RESULT: 'SET_RESULT'
}

const loadAll = (newCategories) => {
  return {
    type: ACTIONS.LOAD_ALL,
    newCategories
  }
}

const deleteCategory = id => {
  return {
    type: ACTIONS.DELETE,
    id
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

const setResult = (result) => {
  return {
    type: ACTIONS.SET_RESULT,
    result
  }
}

export { setSearch, setCount, reset, setTrees, loadAll, deleteCategory, setResult, ACTIONS};
