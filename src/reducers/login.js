import * as types from "../constants/ActionType";

var initialState = [];

const login = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      state = action.data_login;
      return {...state};
    default:
      return {...state};
  }
};

export default login;
