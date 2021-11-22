const ACTIONS = {
  LOAD_CATEGORY: 'LOAD_CATEGORY'
}

const loadCategory = categories => {
  return {
    type: ACTIONS.LOAD_CATEGORY,
    categories
  }
}

export {ACTIONS, loadCategory};