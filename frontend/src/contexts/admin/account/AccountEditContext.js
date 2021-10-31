/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../actions/admin/account/AccountEditAction";
import axios from 'axios';
import { SERVER } from "../../../utils/Constants";

export const AccountEditContext = createContext();

const AccountEditProvider = (props) => {
  
  const { newAccount, result } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    loadAccount(props.match.params.id);
  }, []);

  
  const loadAccount = async id => {
    const account = await (await axios.get(`${SERVER}/admin/account`, {params: {_id: id, is_delete: false}})).data.account[0];
    dispatch(actions.loadAccount(account));
  }

  const updateAccount = async (e) => {
    e.preventDefault();

    if(newAccount.pwd !== newAccount.re_pwd) {
      dispatch(actions.changeResult({success: false, message: "Password and Re-password not match"}));
      return ;
    }

    try {
      const update = await axios.put(`${SERVER}/admin/account`, newAccount);

      if(update.data.success) {
        dispatch(actions.changeResult({success: update.data.success, message: update.data.message}));
        props.history.goBack();
        return ;
      }

      return ;

    } catch (e) {
      console.log(e);
      if (e.response) {
        dispatch(actions.changeResult({success: e.response.data.success, message: e.response.data.message}));
      }
      return ;
    }

  }

  const changeField = (e) => {
    e.preventDefault();
    dispatch(actions.changeField(e.target.name, e.target.value))
  }

  const reset = () => {
    dispatch(actions.reset());
  }

  const value = {updateAccount, changeField, reset, loadAccount, newAccount, result};

  return (
    <AccountEditContext.Provider value={value}>
      {props.children}
    </AccountEditContext.Provider>
  )
}

export default AccountEditProvider;