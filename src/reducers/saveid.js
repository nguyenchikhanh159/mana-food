import * as types from "../constants/ActionType";

var initialState = [];

const saveid = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVEID:
      state = action.id_user ;
      return {...state};
    default:
      return {...state};
  }
};

export default saveid;
