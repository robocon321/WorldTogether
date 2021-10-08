/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/ShopAction";
import axios from 'axios';
import { SERVER } from "../utils/Constants";
import {AuthContext} from '../contexts/AuthContext';

export const ShopContext = createContext();

const ShopProvider = ({children}) => {
  
  const { shops, size, page, count, search } = useSelector(state => state);
  const dispatch = useDispatch();
  let remain = count - size*page < 0 ? 0 : count - size*page;

  useEffect(()=> {
    loadShop();
  }, [search]);

  const {authState} = useContext(AuthContext);
  
  const { account } = authState;

  const createShop = async newShop => {
   const result = {
      success: false,
      message: 'Server error',
    }

    try {
      const res = await axios.post(`${SERVER}/admin/shop`, newShop);
      result.success = res.data.success;
      result.message = res.data.message;
      if(result.success) {
        dispatch(actions.addShop(res.data.newShop));
      }
    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const updateShop = async newShop => {
    const now = new Date();
    const result = {
      success: false,
      message: 'Server error',
    }

    try {
      const oldShop = await getShopById(newShop._id);;

      console.log(oldShop, newShop);
      if(newShop.old_id) newShop.old_id = oldShop.old_id;
      else newShop.old_id = oldShop._id;

      delete newShop._id;

      oldShop.mod_uid = account.uid;
      oldShop.mod_time = now;
      oldShop.is_delete = true;

      const updateOld = await axios.put(`${SERVER}/admin/shop`, oldShop);
      const createNew = await axios.post(`${SERVER}/admin/shop`, newShop);

      if(!updateOld.data.success) {
        result.success = updateOld.data.success;
        result.message = updateOld.data.message;
        return result;
      }

      result.success = createNew.data.success;
      result.message = createNew.data.message;

      if(result.data.success) {
        dispatch(actions.editShop(newShop));
      }

    } catch (e) {
      console.log(e);
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const loadShop = async () => {
    const result = await axios.get(`${SERVER}/admin/shop`, {
      params: {
        is_delete: false,
        limit: size,
        skip: page * size, 
        search,
      }
    });
    
    if(result.data.success) {
      dispatch(actions.addShops(result.data.shop));
      dispatch(actions.nextPage());
      dispatch(actions.setCount(result.data.count));
    }
  }

  const getShopById =  async (id) => {
    const res = await axios.get(`${SERVER}/admin/shop`, {params: {_id: id, is_delete: false, search: ''}});
    if(res.data.success && res.data.shop) {
      return res.data.shop[0];
    }
    return null;
  }

  const deleteShop = async (id) => {
    const result = {
      success: false,
      message: "Server error"
    };

    try {
      const res = await axios.get(`${SERVER}/admin/shop`, {params: {_id: id}});
      const shopRes = res.data.shop[0];
      if(!shopRes) {
        result.success = false;
        result.message = "Not found";
      } else {
        shopRes.is_delete = true;
        shopRes.mod_uid = account._id;
        shopRes.mod_time = new Date();

        const updateRes = await axios.put(`${SERVER}/admin/shop`, shopRes);
        result.success = updateRes.data.success;
        result.message = updateRes.data.message;

        if(result.success) dispatch(actions.deleteShop(id));
      }

    } catch (e) {
      console.log(e);
    }    
    return result;

  }

  const searchShop = (str) => {
    dispatch(actions.reset());
    dispatch(actions.setSearch(str));
  }

  const value = {
    createShop, 
    updateShop, 
    loadShop, 
    deleteShop, 
    getShopById, 
    searchShop, 
    shops, 
    remain
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopProvider;