/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../utils/Constants";
import { AuthContext } from "./AuthContext";
import * as categoryActions from "../actions/CategoryAction";
import * as attrActions from "../actions/AttributeAction";

export const CategoryContext = createContext();

const CategoryProvider = ({children}) => {
  const { categories, search, trees } = useSelector(state => state.category);
  const { attrs } = useSelector(state => state.attr);
  const dispatch = useDispatch();

  useEffect(()=> {
    loadCategory();
    loadAtrr();
  }, [search]);

  useEffect(() => {
    dispatch(categoryActions.setTrees(buildTreeCategories()));
  }, [categories]);

  const {authState} = useContext(AuthContext);
  
  const { account } = authState;


  // category 

  const createCategory = async newCategory => {
    newCategory.cre_uid = account._id;

    const result = {
      success: false,
      message: 'Server error',
      category: {}
    }

    try {
      const res = await axios.post(`${SERVER}/admin/category`, newCategory);
      result.success = res.data.success;
      result.message = res.data.message;
      if(result.success) {
        result.category = res.data.newCategory;
        result.category.parent_id = {
          _id: result.category.parent_id,
          title: categories.find(item => item._id === result.category.parent_id).title
        }
        dispatch(categoryActions.addCategory(result.category));
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
        dispatch(categoryActions.editCategory(newCategory));
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
        search,
      }
    });
    
    if(result.data.success) {
      dispatch(categoryActions.addCategories(result.data.category));
      dispatch(categoryActions.setCount(result.data.count));
    }

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

        if(result.success) dispatch(categoryActions.deleteCategory(id));
      }

    } catch (e) {
      console.log(e);
    }    
    return result;

  }

  const searchCategory = async (str) => {
    await dispatch(categoryActions.reset());
    await dispatch(categoryActions.setSearch(str));
  }

  const buildTreeCategories = () => {
    const trees = [];
    categories.forEach((item) => {
      let tree = {
        _id: item._id,
        title: ''
      };
      let current = item;
      while(true) {
        tree.title = current.title + tree.title;
        if (!current.parent_id) {
          trees.push(tree);
          break;
        }
        else {
          current = categories.find(item => item._id === current.parent_id._id);
          tree.title = " > " + tree.title;
        }
      }
    })

    return trees;
  }

  const categoryValue = {
    createCategory, 
    updateCategory, 
    loadCategory, 
    deleteAccount, 
    getCategoryById, 
    searchCategory, 
    buildTreeCategories, 
    categories, 
    trees
  };

  // attribute 
  
  const loadAtrr = async () => {
    const result = await axios.get(`${SERVER}/admin/attribute`);
    
    if(result.data.success) {
      dispatch(attrActions.addAttributes(result.data.attribute));
    }    
  }

  const updateAttr = async newAttrs => {
    const result = {
      success: false,
      message: 'Server error',
    }

    try {

      const res = await axios.put(`${SERVER}/admin/category`, newAttrs);

      if(!res.success) {
        result.success = res.data.success;
        result.message = res.data.message;
      } else {
        dispatch(attrActions.editAttribute(newAttrs));
      }
    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const createAttrs = async newAttrs => {
    const result = {
      success: false,
      message: 'Server error',
    }

    try {
      const res = await axios.post(`${SERVER}/admin/attribute`, {attributes: newAttrs});
      result.success = res.data.success;
      result.message = res.data.message;
      if(result.success) {
        dispatch(attrActions.addAttributes(newAttrs));
      }
    } catch (e) {
      if (e.response) {
        result.success = e.response.data.success;
        result.message = e.response.data.message;
      }
    }

    return result;
  }

  const attrValue = {loadAtrr, updateAttr, createAttrs, attrs};

  const value = {
    ...categoryValue,
    ...attrValue
  }

  return (
  <CategoryContext.Provider value={value}>
    {children}
  </CategoryContext.Provider>
  )
}

export default CategoryProvider;