/* eslint-disable react-hooks/exhaustive-deps */
import { createContext,  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../actions/admin/product/ProductListAction";
import axios from 'axios';
import { SERVER } from "../../../utils/Constants";

export const ProductListContext = createContext();

const ProductListProvider = ({children, history}) => {
  
  const { products, size, page, count, search } = useSelector(state => state);
  const dispatch = useDispatch();
  let remain = count - size*page < 0 ? 0 : count - size*page;

  useEffect(()=> {
    loadProduct();
  }, [search]);

  const loadProduct = async () => {
    const result = await axios.get(`${SERVER}/admin/product`, {
      params: {
        is_delete: false,
        limit: size,
        skip: page * size, 
        search,
      }
    });  
    
    if(result.data.success) {
      dispatch(actions.loadProduct(result.data.product));
      dispatch(actions.nextPage());
      dispatch(actions.setCount(result.data.count));
    }
  }

  const deleteProduct = async (e, id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`${SERVER}/admin/product`, {params: {id}});
      console.log(res.data);

      dispatch(actions.deleteProduct(id))
      dispatch(actions.setResult({result: res.data.success, message: res.data.message}));

    } catch (e) {
      console.log(e);
    }    
  }

  const searchProduct = (e) => {
    e.preventDefault();
    dispatch(actions.setSearch(e.target.value));
  }

  const switchToEditPage = (e, id) => {
    e.preventDefault();
    history.push(`/admin/product/edit/${id}`);
  }

  const value = {loadProduct, deleteProduct, searchProduct, switchToEditPage, products, remain};
  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  )
}

export default ProductListProvider;