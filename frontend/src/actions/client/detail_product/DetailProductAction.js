const ACTIONS = {
  LOAD_DETAIL_PRODUCT: 'LOAD_DETAIL_PRODUCT',
  LOAD_OPTIONS: 'LOAD_OPTIONS'
}

const loadDetailProduct = product => {
  return {
    type: ACTIONS.LOAD_DETAIL_PRODUCT,
    product
  }
}

const loadOptions = (product_titles, product_values) => {
  return {
    type: ACTIONS.LOAD_OPTIONS,
    product_titles,
    product_values
  }
}

export { ACTIONS, loadDetailProduct, loadOptions };