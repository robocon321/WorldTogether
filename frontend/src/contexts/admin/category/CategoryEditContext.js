/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../../utils/Constants";
import * as actions from "../../../actions/admin/category/CategoryEditAction";
import { uploadFirebase } from "../../../utils/fn";
import { getDownloadURL } from "@firebase/storage";

export const CategoryEditContext = createContext();

const CategoryEditProvider = (props) => {
  const { categories, trees, attributes, result, category } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=> {
    loadCategory();
  }, []);

  useEffect(() => {
    buildTreeCategories();
  }, [categories]);

  // category 
  const updateCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`${SERVER}/admin/category`, category);
      dispatch(actions.setResult({success: res.data.success, message: res.data.message}));

      if(res.data.success) {
        createAttrs(res.data.old, res.data.update);
      }
      return ;

    } catch (e) {
      console.log(e);
      if (e.response) {
        dispatch(actions.setResult({success: e.response.data.success, message: e.response.data.message}));
      }
      return ;
    }
  }

  const loadCategory = async () => {
    const result = await axios.get(`${SERVER}/admin/category`, {
      params: {
        is_delete: false
      }
    });

    const currentCategory = result.data.category.find(item => item._id === parseInt(props.match.params.id));

    dispatch(actions.setCategory(currentCategory));
    dispatch(actions.setResult({success: result.data.success, message: result.data.message}));
    
    if(result.data.success) {
      dispatch(actions.loadAll(result.data.category));
      loadAttributes(currentCategory._id);
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
    })

    dispatch(actions.setTrees(trees));
  }

  const reset = (e) => {
    e.preventDefault();
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
  const createAttrs = async (old, update) => {
    attributes.forEach(item => {
      item.category_id = update._id;
      delete item._id;
    });

    try {
      const res = await axios.put(`${SERVER}/admin/attribute`, {attributes, oldCategory: old, updateCategory: update});
      dispatch(actions.setResult({success: res.data.success, message: res.data.message}));
      if(res.data.success) props.history.goBack(); 
    } catch (e) {
      if (e.response) {
        dispatch(actions.setResult({success: e.response.data.success, message: e.response.data.message}));
      }
    }
  }

  const loadAttributes = async (category_id) => {
    const res = await axios.get(`${SERVER}/admin/attribute`, {
      params: {
        category_id
      }
    });

    dispatch(actions.setResult({success: res.data.success, message: res.data.message}));
    
    if(res.data.success) {
      console.log(res.data.attributes);
      dispatch(actions.loadAttribute(res.data.attribute));
    }
  }

  const removeAttribte = (index) => {
    dispatch(actions.removeAttribute(index));
  }

  const changeAttribute = (e, index) => {
    e.preventDefault();
    dispatch(actions.changeAttribute(index, e.target.name, e.target.value));
  }

  const addAttribute = (e) => {
    e.preventDefault();
    dispatch(actions.addAttribute());
  }

  const value = {    
    updateCategory, 
    loadCategory, 
    buildTreeCategories, 
    reset,
    loadAttributes,
    removeAttribte,
    changeAttribute,
    changeField,
    addAttribute,
    category,
    categories, 
    trees,
    attributes,
    result
  };

  return (
  <CategoryEditContext.Provider value={value}>
    {props.children}
  </CategoryEditContext.Provider>
  )
}

export default CategoryEditProvider;