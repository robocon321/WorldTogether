/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../actions/admin/account/AccountNewAction";
import axios from 'axios';
import { SERVER } from "../../../utils/Constants";
import {AuthContext} from '../../../contexts/AuthContext';

export const AccountNewContext = createContext();

const AccountNewProvider = (props) => {
  
  const { newAccount, result } = useSelector(state => state);
  const dispatch = useDispatch();

  const {authState} = useContext(AuthContext);
  
  const { account } = authState;

  const createAccount = async (e) => {
    e.preventDefault();

    if(newAccount.pwd !== newAccount.re_pwd) {
      dispatch(actions.changeResult({success: false, message: "Password and Re-password not match"}));
      return ;
    }

    try {
      const res = await axios.post(`${SERVER}/admin/account`, newAccount);
      dispatch(actions.changeResult({success: res.data.success, message: res.data.message}));
      if(res.data.success) props.history.push('/admin/account');
      return ;
    } catch (e) {
      if (e.response) {
        dispatch(actions.changeResult({success: e.response.data.success, message: e.response.data.message}));
        return ;
      }
    }
  }

  const changeField = (e) => {
    e.preventDefault();
    dispatch(actions.changeField(e.target.name, e.target.value))
  }

  const reset = () => {
    dispatch(actions.reset());
  }

  const value = {createAccount, changeField, reset, account, result};

  return (
    <AccountNewContext.Provider value={value}>
      {props.children}
    </AccountNewContext.Provider>
  )
}

export default AccountNewProvider;