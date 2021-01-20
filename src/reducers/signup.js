import * as types from "../constants/ActionType";

var initialState = [];

const signup = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      state = action.data_signup;
      return state;
    default:
      return state;
  }
};

export default signup;
