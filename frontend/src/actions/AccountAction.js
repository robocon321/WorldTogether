const ACTIONS = {
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  ADD_ACCOUNTS: 'ADD_ACCOUNTS',
  EDIT_ACCOUNT: 'EDIT_ACCOUNT',
  DELETE_ACCOUNT: 'DELETE_ACCOUNT'
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

export { addAccount, editAccount, deleteAccount, addAccounts, ACTIONS };