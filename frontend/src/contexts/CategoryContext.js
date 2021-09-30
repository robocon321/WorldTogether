/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../utils/Constants";
import { AuthContext } from "./AuthContext";
import * as actions from "../actions/CategoryAction";

export const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
  const { categories, size, page, count, search } = useSelector(state => state);
  const dispatch = useDispatch();
  let remain = count - size*page < 0 ? 0 : count - size*page;

  useEffect( ()=> {
    loadCategory();
  }, [search]);

  const {authState} = useContext(AuthContext);
  
  const { account } = authState;

  const createCategory = async newCategory => {
    newCategory.cre_uid = account._id;

    const result = {
      success: false,
      message: 'Server error',
    }

    try {
      const res = await axios.post(`${SERVER}/admin/category`, newCategory);
      result.success = res.data.success;
      result.message = res.data.message;
      if(result.success) {
        dispatch(actions.addCategory(newCategory));
      }
    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const updateCategory = async newCategory => {
    const now = new Date();
    const result = {
      success: false,
      message: 'Server error',
    }

    try {
      const oldCategory = (await axios.get(`${SERVER}/admin/category`, {params: {_id: newCategory._id}})).data.account;

      if(newCategory.old_id) newCategory.old_id = oldCategory[0].old_id;
      else newCategory.old_id = oldCategory[0]._id;

      newCategory.cre_uid = account.uid;
      newCategory.cre_time = now;
      delete newCategory._id;

      oldCategory[0].mod_uid = account.uid;
      oldCategory[0].mod_time = now;
      oldCategory[0].is_delete = true;

      const updateOld = await axios.put(`${SERVER}/admin/category`, oldCategory[0]);
      const createNew = await axios.post(`${SERVER}/admin/category`, newCategory);

      if(!updateOld.success) {
        result.success = updateOld.data.success;
        result.message = updateOld.data.message;
        return result;
      }

      result.success = createNew.data.success;
      result.message = createNew.data.message;

      if(result.success) {
        dispatch(actions.editCategory(newCategory));
      }

    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const loadCategory = async () => {
    const result = await axios.get(`${SERVER}/admin/category`, {
      params: {
        is_delete: false,
        limit: size,
        skip: page * size, 
        search,
      }
    });
    
    if(result.data.success) {
      dispatch(actions.addCategories(result.data.category));
      dispatch(actions.nextPage());
      dispatch(actions.setCount(result.data.count));
    }

    console.log(result.data);
  }

  const getCategoryById = (id) => {
    return categories.find(item => item._id === parseInt(id));
  }

  const deleteAccount = async (id) => {
    const result = {
      success: false,
      message: "Server error"
    };

    try {
      const res = await axios.get(`${SERVER}/admin/category`, {params: {_id: id}});
      const categoryRes = res.data.category[0];
      if(!categoryRes) {
        result.success = false;
        result.message = "Not found";
      } else {
        categoryRes.is_delete = true;
        categoryRes.mod_uid = account._id;
        categoryRes.mod_time = new Date();

        const updateRes = await axios.put(`${SERVER}/admin/category`, categoryRes);
        result.success = updateRes.data.success;
        result.message = updateRes.data.message;

        if(result.success) dispatch(actions.deleteCategory(id));
      }

    } catch (e) {
      console.log(e);
    }    
    return result;

  }

  const searchCategory = async (str) => {
    await dispatch(actions.reset());
    await dispatch(actions.setSearch(str));
  }

  const value = {createCategory, updateCategory, loadCategory, deleteAccount, getCategoryById, searchCategory, categories, remain};

  return (
  <CategoryContext.Provider value={value}>
    {children}
  </CategoryContext.Provider>
  )
}

export default CategoryProvider;