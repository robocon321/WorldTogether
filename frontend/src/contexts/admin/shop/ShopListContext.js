/* eslint-disable react-hooks/exhaustive-deps */
import { createContext,  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../actions/admin/shop/ShopListAction";
import axios from 'axios';
import { SERVER } from "../../../utils/Constants";

export const ShopListContext = createContext();

const ShopListProvider = (props) => {
  
  let { shops, size, page, count, search } = useSelector(state => state);
  const dispatch = useDispatch();
  let remain = count - size*page < 0 ? 0 : count - size*page;

  useEffect(() => {
    loadShop();
  }, [search]);

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
      dispatch(actions.load(result.data.shop));
      dispatch(actions.nextPage());
      dispatch(actions.setCount(result.data.count));
    }
  }

  const searchShop = (e) => {
    e.preventDefault();
    dispatch(actions.setSearch(e.target.value));
  }

  const value = {
    loadShop, 
    searchShop, 
    shops, 
    remain
  };
  return (
    <ShopListContext.Provider value={value}>
      {props.children}
    </ShopListContext.Provider>
  )
}

export default ShopListProvider;