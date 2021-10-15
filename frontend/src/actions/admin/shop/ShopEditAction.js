const ACTIONS = {
  CHANGE_FIELD: 'CHANGE_FIELD',
  RESET: 'RESET',
  CHANGE_RESULT: 'CHANGE_RESULT',
  LOAD_SHOP: 'LOAD_SHOP'
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

const loadShop = newShop => {
  return {
    type: ACTIONS.LOAD_SHOP,
    newShop
  }
}

export {ACTIONS, changeField, reset, changeResult, loadShop};