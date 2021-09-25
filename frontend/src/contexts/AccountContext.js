import { createContext, useContext } from "react";
import axios from 'axios';
import { SERVER } from "../utils/Constants";
import {AuthContext} from '../contexts/AuthContext';

export const AccountContext = createContext();

const AccountProvider = ({children}) => {
  
  const {authState} = useContext(AuthContext);
  
  const { account } = authState;

  const createAccount = async newAccount => {
    newAccount.cre_uid = account._id;

    const result = {
      success: false,
      message: 'Server error',
    }

    try {
      const res = await axios.post(`${SERVER}/admin/account`, newAccount);
      result.success = res.data.success;
      result.message = res.data.message;
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

    try {
      const oldAccount = await axios.get(`${SERVER}/admin/account`, {uname: newAccount.uname, is_delete: false});

      if(newAccount.old_id) newAccount.old_id = oldAccount.old_id;
      else newAccount.old_id = oldAccount._id;

      newAccount.cre_uid = account.uid;
      newAccount.cre_time = now;

      oldAccount.mod_uid = account.uid;
      oldAccount.mod_time = now;

      const updateOld = await axios.put(`${SERVER}/admin/account`, oldAccount);
      const createNew = await axios.post(`${SERVER}/admin/account`, newAccount);

      if(!updateOld.success) {
        result.message = updateOld.data.message;
        return result;
      }

      result.success = createNew.data.success;
      result.message = createNew.data.message;

    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const value = {createAccount, updateAccount};
  return (
    <AccountContext.Provider value={value}>
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider;