const ACTIONS = {
  LOAD_PRODUCT: 'LOAD_PRODUCT_SUGGEST',
  LOAD_OPTION: 'LOAD_OPTION_SUGGEST'
};

const loadProduct = (products) => {
  return {
    type: ACTIONS.LOAD_PRODUCT,
    products
  }
};

const loadOption = (product_titles, product_values) => {
  return {
    type: ACTIONS.LOAD_OPTION,
    product_titles,
    product_values
  }
};

export {ACTIONS, loadProduct, loadOption};
