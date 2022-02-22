import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../actions/types";

const initialState = {

}

const productReducer = ( state = initialState, action ) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return  payload;

    case ADD_PRODUCT:
      return [...state, payload];

    case UPDATE_PRODUCT:
    return state.map((prod) => {
      if (prod.id === payload.id) {
        return {
          ...prod,
          ...payload,
        };
      } else {
        return prod;
      }
    });

    case DELETE_PRODUCT:
      return state.filter(({ id }) => id !== payload) ;

    default:
      return state;
  }
}

export default productReducer;