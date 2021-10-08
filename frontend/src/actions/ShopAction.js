const ACTIONS = {
  ADD_SHOP: 'ADD_SHOP',
  ADD_SHOPS: 'ADD_SHOPS',
  EDIT_SHOP: 'EDIT_SHOP',
  DELETE_SHOP: 'DELETE_SHOP',
  NEXT_PAGE: 'NEXT_PAGE',
  SET_COUNT: 'SET_COUNT',
  RESET: 'RESET',
  SET_SEARCH: 'SET_SEARCH'
}

const addShops = (newShops) => {
  return {
    type: ACTIONS.ADD_SHOPS,
    newShops
  }
}

const addShop = (newShop) => {
  return {
    type: ACTIONS.ADD_SHOP,
    newShop
  }
}

const editShop = (newShop) => {
  return {
    type: ACTIONS.EDIT_SHOP,
    newShop
  }
}

const deleteShop = (id) => {
  return {
    type: ACTIONS.DELETE_SHOP,
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

const reset = () => {
  return {
    type: ACTIONS.RESET
  }
}

export { addShop, editShop, deleteShop, addShops, nextPage, setCount, setSearch, reset, ACTIONS };