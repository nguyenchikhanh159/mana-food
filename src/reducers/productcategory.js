import * as types from "../constants/ActionType";
var data = JSON.parse(localStorage.getItem('CATEGORY'));
var initialState = data ? data : [];


const productcategory = (state = initialState, action) => {
  switch (action.type) {
    case types.G_PRODUCT_CATEGORY:
      state = action.product_category;
      localStorage.setItem('CATEGORY', JSON.stringify(state));
      return {...state};
    default:
      return {...state};
  }
};

export default productcategory;
