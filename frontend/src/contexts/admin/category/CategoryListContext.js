/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../../utils/Constants";
import * as categoryActions from "../../../actions/admin/category/CategoryListAction";

export const CategoryListContext = createContext();

const CategoryListProvider = (props) => {
  const { categories, search } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=> {
    loadCategory();
  }, []);

  // category 

  const loadCategory = async () => {
    const result = await axios.get(`${SERVER}/admin/category`, {
      params: {
        search,
        is_delete: false
      }
    });

    dispatch(categoryActions.setResult({success: result.data.success, message: result.data.message}));
    
    if(result.data.success) {
      dispatch(categoryActions.loadAll(result.data.category));
      dispatch(categoryActions.setCount(result.data.count));
    }

  }

  const searchCategory = (e) => {
    dispatch(categoryActions.setSearch(e.target.value));
  }

  const deleteCategory = async (e, id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`${SERVER}/admin/category`, {params: {id}});

      res.success = res.data.success;
      res.message = res.data.message;
      dispatch(categoryActions.setResult({success: res.data.success, message: res.data.message}));

      if(res.success) dispatch(categoryActions.deleteCategory(id));
    } catch (e) {
      console.log(e);
      if(e.response) {
        dispatch(categoryActions.setResult({success: e.response.data.success, message: e.response.data.message}));        
      }
    }    
  }

  const switchToEditPage = (e, id) => {
    e.preventDefault();
    props.history.push(`/admin/category/edit/${id}`);
  } 

  const getTitleParentCategory = id => {
    if(!id) return 'None';
    const title = categories.find(item => item._id === parseInt(id)).title;
    return title ? title : 'None';
  }

  const value = {
    searchCategory, 
    deleteCategory,
    switchToEditPage,
    getTitleParentCategory,
    categories,
    search
  };

  return (
  <CategoryListContext.Provider value={value}>
    {props.children}
  </CategoryListContext.Provider>
  )
}

export default CategoryListProvider;