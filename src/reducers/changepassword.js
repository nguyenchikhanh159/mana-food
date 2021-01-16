import * as types from "../constants/ActionType";

var initialState = [];

const changepassword = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGEPASSWORD:
      state = action.data_changepassword;
      return {...state};
    default:
      return {...state};
  }
};

export default changepassword;
