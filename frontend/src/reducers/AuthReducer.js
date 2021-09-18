import {SET_AUTH} from "../actions/AuthAction";

const authReducer = (state, action) => {
  const {type, payload: {isAuth, account}} = action;
  switch(type) {
    case SET_AUTH: 
      return {
        ...state,
        isLoading: false,
        isAuth,
        account
      }
    default:
      return state;
  }
}

export default authReducer;