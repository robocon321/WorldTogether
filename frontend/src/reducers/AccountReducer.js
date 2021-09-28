/* eslint-disable default-case */
import { configureStore } from '@reduxjs/toolkit';
import { ACTIONS } from "../actions/AccountAction";

const init = {
  accounts: []
};

const reducer = (state = init, action) => {
  switch(action.type) {
    case ACTIONS.ADD_ACCOUNT: 
      state = {
        ...state,
        accounts: [...state.accounts, action.newAccount]
      };
      break;
    case ACTIONS.ADD_ACCOUNTS:
      state = {
        ...state,
        accounts: [...action.newAccounts]
      };
      break;
    case ACTIONS.DELETE_ACCOUNT: 
      state = {
        ...state,
        accounts: state.accounts.filter(item => item._id !== action.id)
      }
      break;
    case ACTIONS.EDIT_ACCOUNT: 
      state.accounts.forEach(item => {
        if(item._id === action.account._id) {
          item = action.account;
          return {...state}
        }
      });
      break;
  }
  return {...state};
}

export default configureStore({
  reducer,
});