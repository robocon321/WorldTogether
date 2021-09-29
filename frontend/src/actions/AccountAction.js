const ACTIONS = {
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  ADD_ACCOUNTS: 'ADD_ACCOUNTS',
  EDIT_ACCOUNT: 'EDIT_ACCOUNT',
  DELETE_ACCOUNT: 'DELETE_ACCOUNT',
  NEXT_PAGE: 'NEXT_PAGE',
  SET_COUNT: 'SET_COUNT',
  RESET: 'RESET',
  SET_SEARCH: 'SET_SEARCH'
}

const addAccounts = (newAccounts) => {
  return {
    type: ACTIONS.ADD_ACCOUNTS,
    newAccounts
  }
}

const addAccount = (newAccount) => {
  return {
    type: ACTIONS.ADD_ACCOUNT,
    newAccount
  }
}

const editAccount = (newAccount) => {
  return {
    type: ACTIONS.EDIT_ACCOUNT,
    newAccount
  }
}

const deleteAccount = (id) => {
  return {
    type: ACTIONS.DELETE_ACCOUNT,
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

export { addAccount, editAccount, deleteAccount, addAccounts, nextPage, setCount, setSearch, reset, ACTIONS };