const initialState = {
  brands: [],
  brand: [],
}

export default function brandReducer(state= initialState, action) {
  switch (action.type) {
    case "GET_BRANDS_COMPLETED":
      return {...state, brands: action.payload};
    case "GET_BRAND_COMPLETED":
      return {...state, brand: action.payload};
    default:
      return state;
  }
}