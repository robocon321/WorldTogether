const ACTIONS = {
  LOAD_PRODUCT: 'LOAD_PRODUCT',
  DELETE: 'DELETE',
  RESET: 'RESET',
  SET_SEARCH: 'SET_SEARCH',
  SET_COUNT: 'SET_COUNT',
  NEXT_PAGE: 'NEXT_PAGE',
  SET_RESULT: 'SET_RESULT'
}

const loadProduct = (newProducts) => {
  return {
    type: ACTIONS.LOAD_PRODUCT,
    newProducts
  }
}

const deleteProduct = (id) => {
  return {
    type: ACTIONS.DELETE,
    id
  }
}

const nextPage = () => {
  return {
    type: ACTIONS.NEXT_PAGE,
  }
}

const setCount = (count) => {
  return {
    type: ACTIONS.SET_COUNT,
    count
  }
}

const setSearch = (search) => {
  return {
    type: ACTIONS.SET_SEARCH,
    search
  }
}

const setResult = (result) => {
  return {
    type: ACTIONS.SET_RESULT,
    result
  }
}

const reset = () => {
  return {
    type: ACTIONS.RESET
  }
}

export {  loadProduct , deleteProduct, nextPage, setCount, setSearch, reset, setResult, ACTIONS };