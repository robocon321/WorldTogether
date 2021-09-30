/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/AccountAction";
import axios from 'axios';
import { SERVER } from "../utils/Constants";
import {AuthContext} from '../contexts/AuthContext';

export const AccountContext = createContext();

const AccountProvider = ({children}) => {
  
  const { accounts, size, page, count, search } = useSelector(state => state);
  const dispatch = useDispatch();
  let remain = count - size*page < 0 ? 0 : count - size*page;

  useEffect( ()=> {
    loadAccount();
  }, [search]);

  const {authState} = useContext(AuthContext);
  
  const { account } = authState;

  const createAccount = async newAccount => {
    newAccount.cre_uid = account._id;

    const result = {
      success: false,
      message: 'Server error',
    }

    if(newAccount.pwd !== newAccount.re_pwd) {
      result.success = false;
      result.message = "Password and Re-password not match";
      return result;
    }

    try {
      const res = await axios.post(`${SERVER}/admin/account`, newAccount);
      result.success = res.data.success;
      result.message = res.data.message;
      if(result.success) {
        dispatch(actions.addAccount(newAccount));
      }
    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const updateAccount = async newAccount => {
    const now = new Date();
    const result = {
      success: false,
      message: 'Server error',
    }

    if(newAccount.pwd !== newAccount.re_pwd) {
      result.success = false;
      result.message = "Password and Re-password not match";
      return result;
    }

    try {
      const oldAccount = (await axios.get(`${SERVER}/admin/account`, {params: {_id: newAccount._id}})).data.account;

      if(newAccount.old_id) newAccount.old_id = oldAccount[0].old_id;
      else newAccount.old_id = oldAccount[0]._id;

      newAccount.cre_uid = account.uid;
      newAccount.cre_time = now;
      delete newAccount._id;

      oldAccount[0].mod_uid = account.uid;
      oldAccount[0].mod_time = now;
      oldAccount[0].is_delete = true;

      const updateOld = await axios.put(`${SERVER}/admin/account`, oldAccount[0]);
      const createNew = await axios.post(`${SERVER}/admin/account`, newAccount);

      if(!updateOld.success) {
        result.success = updateOld.data.success;
        result.message = updateOld.data.message;
        return result;
      }

      result.success = createNew.data.success;
      result.message = createNew.data.message;

      if(result.success) {
        dispatch(actions.editAccount(newAccount));
      }

    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const loadAccount = async () => {
    const result = await axios.get(`${SERVER}/admin/account`, {
      params: {
        is_delete: false,
        limit: size,
        skip: page * size, 
        search,
      }
    });
    
    if(result.data.success) {
      dispatch(actions.addAccounts(result.data.account));
      dispatch(actions.nextPage());
      dispatch(actions.setCount(result.data.count));
    }
  }

  const getAccountById = (id) => {
    return accounts.find(item => item._id === parseInt(id));
  }

  const deleteAccount = async (id) => {
    const result = {
      success: false,
      message: "Server error"
    };

    try {
      const res = await axios.get(`${SERVER}/admin/account`, {params: {_id: id}});
      const accountRes = res.data.account[0];
      if(!accountRes) {
        result.success = false;
        result.message = "Not found";
      } else {
        accountRes.is_delete = true;
        accountRes.mod_uid = account._id;
        accountRes.mod_time = new Date();

        const updateRes = await axios.put(`${SERVER}/admin/account`, accountRes);
        result.success = updateRes.data.success;
        result.message = updateRes.data.message;

        if(result.success) dispatch(actions.deleteAccount(id));
      }

    } catch (e) {
      console.log(e);
    }    
    return result;

  }

  const searchAccount = async (str) => {
    await dispatch(actions.reset());
    await dispatch(actions.setSearch(str));
  }

  const value = {createAccount, updateAccount, loadAccount, deleteAccount, getAccountById, searchAccount, accounts, remain};
  return (
    <AccountContext.Provider value={value}>
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider;