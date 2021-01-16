import * as types from "../constants/ActionType";

var initialState = [];

const logout = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      state = action.data_logout;
      return {...state};
    default:
      return {...state};
  }
};

export default logout;
