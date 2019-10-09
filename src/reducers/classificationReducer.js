const initialState = {
  classifications: [],
  classification: [],
}

export default function brandReducer(state= initialState, action) {
  switch (action.type) {
    case "GET_CLASSIFICATIONS_COMPLETED":
      return {...state, classifications: action.payload};
    case "GET_CLASSIFICATION_COMPLETED":
      return {...state, classification: action.payload};
    default:
      return state;
  }
}