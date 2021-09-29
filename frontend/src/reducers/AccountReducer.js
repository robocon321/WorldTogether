/* eslint-disable default-case */
import { createStore } from '@reduxjs/toolkit';
import { ACTIONS } from "../actions/AccountAction";

const init = {
  accounts: [],
  count: 0,
  page: 0,
  size: 10,
  search: ''
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
        accounts: [...state.accounts, ...action.newAccounts]
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

    case ACTIONS.NEXT_PAGE:
      state = {
        ...state,
        page: state.page + 1
      }
      break;

    case ACTIONS.SET_COUNT:
      state = {
        ...state,
        count: action.count
      }    
      break;
    case ACTIONS.RESET:
      state = {
        ...state,
        accounts: [],
        count: 0,
        page: 0,
        size: 10,      
      };
      console.log("reset", state);
      break;

    case ACTIONS.SET_SEARCH:
      state = {
        ...state,
        search: action.search
      }
      console.log("Search", state);
      break;
  }
  return {...state};
}

export default createStore(reducer);