const ACTIONS = {
  CHANGE_FIELD: 'CHANGE_FIELD',
  RESET: 'RESET',
  CHANGE_RESULT: 'CHANGE_RESULT',
  LOAD_ACCOUNT: 'LOAD_ACCOUNT'
}

const changeField = (name, value) => {
  return {
    type: ACTIONS.CHANGE_FIELD,
    name,
    value
  }
}

const reset = () => {
  return {
    type: ACTIONS.RESET
  }
}

const changeResult = (result) => {
  return {
    type: ACTIONS.CHANGE_RESULT,
    result
  }
}

const loadAccount = newAccount => {
  return {
    type: ACTIONS.LOAD_ACCOUNT,
    newAccount
  }
}

export {ACTIONS, changeField, reset, changeResult, loadAccount};