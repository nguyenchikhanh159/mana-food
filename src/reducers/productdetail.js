import * as types from "../constants/ActionType";

var initialState = [];

const productdetail = (state = initialState, action) => {
  switch (action.type) {
    case types.G_PRODUCT_DETAIL:
      state = action.product_detail;
      return {...state};
    default:
      return {...state};
  }
};

export default productdetail;
