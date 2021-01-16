import * as types from "../constants/ActionType";

var initialState = [];

const checkout = (state = initialState, action) => {
  switch (action.type) {
    case types.CHECKOUT_TO_CART:
      state = action.data_checkout;
      return {...state};
    default:
      return {...state};
  }
};

export default checkout;
