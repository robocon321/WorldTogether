/* eslint-disable react-hooks/exhaustive-deps */
import { createContext,  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../actions/admin/account/AccountListAction";
import axios from 'axios';
import { SERVER } from "../../../utils/Constants";

export const AccountListContext = createContext();

const AccountListProvider = ({children, history}) => {
  
  const { accounts, size, page, count, search } = useSelector(state => state);
  const dispatch = useDispatch();
  let remain = count - size*page < 0 ? 0 : count - size*page;

  useEffect(()=> {
    loadAccount();
  }, [search]);

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
      dispatch(actions.load(result.data.account));
      dispatch(actions.nextPage());
      dispatch(actions.setCount(result.data.count));
    }
  }

  const deleteAccount = async (e, id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`${SERVER}/admin/account`, {params: {id}});

      dispatch(actions.deleteAccount(id))
      dispatch(actions.setResult({result: res.data.success, message: res.data.message}));

    } catch (e) {
      console.log(e);
    }    
  }

  const searchAccount = (e) => {
    e.preventDefault();
    dispatch(actions.setSearch(e.target.value));
  }

  const switchToEditPage = (id) => {
    history.push(`/admin/account/edit/${id}`);
  }

  const value = {loadAccount, deleteAccount, searchAccount, switchToEditPage, accounts, remain};
  return (
    <AccountListContext.Provider value={value}>
      {children}
    </AccountListContext.Provider>
  )
}

export default AccountListProvider;