import axios from "axios";
import {createContext, useReducer} from "react";
import authReducer from "../reducers/AuthReducer";
import { setAuthToken } from "../utils/fn";
import { LOCAL_STORAGE_ACCOUNT, SERVER} from "../utils/Constants";
import { SET_AUTH } from "../actions/AuthAction";

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
  const [authState, dispatch] = useReducer(authReducer, {
    isLoading: true,
    isAuth: false,
    account: null,
  })

  const loginAccount  = async (accountForm) => {
    let result = {
      success: false,
      message: "Server error"
    }

    let res;
    try {
      res = await axios.post(`${SERVER}/auth/login`, accountForm);
    
      result.success = res.data.success;
      result.message = res.data.message;

    } catch (e) {
      if(e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;  
      }
    }

    if(result.success) {
      localStorage[LOCAL_STORAGE_ACCOUNT] = res.data.accessToken;
      await loadAccount();
    }
    
    return result;
  }

  const loadAccount = async () => {
    if(localStorage[LOCAL_STORAGE_ACCOUNT]) {
      await setAuthToken(localStorage[LOCAL_STORAGE_ACCOUNT]);
      try {
        const res = await axios.get(`${SERVER}/auth`);
        if(res.data.success) {
          dispatch({
            type: SET_AUTH,
            payload: {
              isLoading: false,
              isAuth: true,
              account: res.data.account
            }
          })
        } else {
          setAuthToken(null);
          dispatch({
            type: SET_AUTH,
            payload: {
              isLoading: false,
              isAuth: false,
              account: null
            }
          })
        }
      } catch (e) {
        console.log("Load error", e);
        dispatch({
          type: SET_AUTH,
          payload: {
            isLoading: false,
            isAuth: false,
            account: null
          }
        })
      }
    } else {
      setAuthToken(null);
      dispatch({
        type: SET_AUTH,
        payload: {
          isLoading: false,
          isAuth: false,
          account: null
        }
      })
  }
  }

  const registerAccount = async (accountForm) => {
    let result = {
      success: false,
      message: "Server error"
    }

    let res;
    try { 
      res = await axios.post(`${SERVER}/auth/register`, accountForm);

      result.success = res.data.success;
      result.message = res.data.message;

    } catch (e) {
      if(e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;  
      }
    }

    if(result.success) {
      localStorage[LOCAL_STORAGE_ACCOUNT] = result.accessToken;
      await loadAccount();
    }
    return result;
  }

  const logoutAccount = async () => {
    localStorage.removeItem(LOCAL_STORAGE_ACCOUNT);
    dispatch({
      type:  SET_AUTH,
      payload: {
        isLoading: false,
        isAuth: false,
        account: null,
      }
    })
  }

  const data = { loadAccount, loginAccount, registerAccount, logoutAccount, authState};

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider;