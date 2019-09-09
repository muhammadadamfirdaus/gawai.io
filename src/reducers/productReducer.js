const initialState = {
  products: [],
  selectedProducts: [],
  product: [],
}

export default function productsReducer(state= initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_COMPLETED":
      return {...state, products: action.payload};
    case "GET_SELECTED_PRODUCTS_COMPLETED":
      return {...state, selectedProducts: action.payload};
    case "GET_PRODUCT_COMPLETED":
      return {...state, product: action.payload};
    default:
      return state;
  }
}