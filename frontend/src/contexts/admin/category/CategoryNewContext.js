/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../../utils/Constants";
import * as actions from "../../../actions/admin/category/CategoryNewAction";
import { uploadFirebase } from "../../../utils/fn";
import { getDownloadURL } from "@firebase/storage";

export const CategoryNewContext = createContext();

const CategoryNewProvider = (props) => {
  const { categories, search, trees, attributes, result, category } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=> {
    loadCategory();
  }, []);

  useEffect(() => {
    buildTreeCategories();
  }, [categories]);

  // category 

  const createCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${SERVER}/admin/category`, category);
      dispatch(actions.setResult({success: res.data.success, message: res.data.message}));
      if(res.data.success) {
        await createAttrs(res.data.newCategory._id);
      }
    } catch (e) {
      if (e.response) {
        dispatch(actions.setResult({success: e.response.data.success, message: e.response.data.message}));
      }
    }
  }

  const loadCategory = async () => {
    const result = await axios.get(`${SERVER}/admin/category`, {
      params: {
        search,
        is_delete: false
      }
    });

    dispatch(actions.setResult({success: result.data.success, message: result.data.message}));
    
    if(result.data.success) {
      dispatch(actions.loadAll(result.data.category));
    }
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
          current = categories.find(item => item._id === current.parent_id);
          tree.title = " > " + tree.title;
        }
      }
    });

    dispatch(actions.setTrees(trees));
  }

  const reset = (e) => {
    dispatch(actions.reset());
  }

  const changeField = async (e) => {
    if(e.target.type === 'file') {
      const uploadTask = uploadFirebase(e.target.files[0]);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Nothing
      }, (error) => {
        console.log("Error upload", error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(actions.changeField('icon', downloadURL));          
        });
      }); 
    } else {
      dispatch(actions.changeField(e.target.name, e.target.value));
    }
  }

  // attribute 

  const createAttrs = async (category_id) => {
    attributes.forEach(item => item.category_id = category_id);

    try {
      const res = await axios.post(`${SERVER}/admin/attribute`, {attributes});
      dispatch(actions.setResult({success: res.data.success, message: res.data.message}));
      if(res.data.success) props.history.push('/admin/category');

    } catch (e) {
      if (e.response) {
        dispatch(actions.setResult({success: e.response.data.success, message: e.response.data.message}));
      }
    }
  }

  const addAttribute = (e) => {
    e.preventDefault();
    dispatch(actions.addAttribute());
  }

  const removeAttribte = (index) => {
    dispatch(actions.removeAttribute(index));
  }

  const changeAttribute = (e, index) => {
    e.preventDefault();
    dispatch(actions.changeAttribute(index, e.target.name, e.target.value));
  }

  const value = {    
    createCategory, 
    loadCategory, 
    buildTreeCategories, 
    reset,
    createAttrs,
    addAttribute,
    removeAttribte,
    changeAttribute,
    changeField,
    categories, 
    trees,
    attributes,
    result
  };

  return (
  <CategoryNewContext.Provider value={value}>
    {props.children}
  </CategoryNewContext.Provider>
  )
}

export default CategoryNewProvider;