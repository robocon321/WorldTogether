/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../../utils/Constants";
import * as actions from "../../../actions/admin/product/ProductNewAction";
import { uploadFirebase } from "../../../utils/fn";
import {  getDownloadURL } from "@firebase/storage";
import {AuthContext} from "../../AuthContext";

export const ProductNewContext = createContext();

const CategoryNewProvider = (props) => {
  const { 
    categories, 
    product, 
    attributes, 
    attributeValues,
    group, 
    trees, 
    result, 
    shops 
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const { authState } = useContext(AuthContext);

  useEffect(()=> {
    loadCategory();
    getShopByAccountId();
  }, []);

  useEffect(() => {
    buildTreeCategories();
  }, [categories]);

  useEffect(() => {
    getAttributeByCategoryId();
  }, [product.category_id]);

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const resProduct = await axios.post(`${SERVER}/admin/product`, product);
      if(resProduct.data.success) {
        attributeValues.forEach(item => item.product_id = resProduct.data.newProduct._id);
        const resAttributes = await axios.post(`${SERVER}/admin/product-attribute-value`, {productAttributeValues: attributeValues});
        if(resAttributes.data.success) {
          group.forEach(itemGroup => {
            itemGroup.forEach(item => {
              item.product_title.product_id = resProduct.data.newProduct._id;
            })
          });


          const resGroup = await axios.post(`${SERVER}/admin/option-product`, {group});
          dispatch(actions.setResult({success: resGroup.data.success, message: resGroup.data.message}));

          if(resGroup.data.success) {
            props.history.goBack();
          }
        } else {
          dispatch(actions.setResult({success: false, message: resAttributes.data.message}));
        }
      } else {
        dispatch(actions.setResult({success: false, message: resProduct.data.message}));
      }
    }
    catch (e) {
      console.log(e);
      if(e.response) {
        dispatch(actions.setResult({success: false, message: e.response.data.message}));
      }
    }
  }

  const loadCategory = async () => {
    const res = await axios.get(`${SERVER}/admin/category`, {
      params: {
        is_delete: false
      }
    });

    dispatch(actions.setResult({success: res.data.success, message: res.data.message}));
    
    if(res.data.success) {
      dispatch(actions.loadCategory(res.data.category));
      dispatch(actions.changeField('category_id', res.data.category ? res.data.category[0]._id : ''));
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

  const changeAttribute = (e, index) => {
    e.preventDefault();
    dispatch(actions.changeAttribute(index, e.target.name, e.target.value));
  }

  const changeFieldOptionValue = async (e, indexGroup, indexProduct) => {
    if(e.target.name === 'avatar') {
      const uploadTask = uploadFirebase(e.target.files[0]);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Nothing
      }, (error) => {
        console.log("Error upload", error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(actions.changeFieldOptionValue(indexGroup, indexProduct, e.target.name, downloadURL));
        });
      }); 
    } else if (e.target.name === 'imgs') {
      let j = 0;
      let imgs = '';
      const { files } = e.target;
      for(var i = 0; i < files.length; i ++) {
        const uploadTask = uploadFirebase(files[i]);
        uploadTask.on('state_changed', 
        (snapshot) => {
          // Nothing
        }, (error) => {
          console.log("Error upload", error);
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            if (j === files.length - 1) {
              imgs = imgs + downloadURL;
              dispatch(actions.changeFieldOptionValue(indexGroup, indexProduct, e.target.name, imgs));  
            } else {
              imgs = imgs + downloadURL + ",";
            }
            j++;
          });
        });
      }
    } else {
      dispatch(actions.changeFieldOptionValue(indexGroup, indexProduct, e.target.name, e.target.value));
    }
  }

  const changeFieldOptionTitle = (e, indexGroup, indexProduct) => {
    dispatch(actions.changeFieldOptionTitle(indexGroup, indexProduct, e.target.name, e.target.value));
  }

  const getAttributeByCategoryId = async () => {
    if(!product.category_id) return;
    const res = await axios.get(`${SERVER}/admin/attribute`, {params: {category_id: product.category_id}});
    dispatch(actions.loadAttribute(res.data.attribute));
  }

  const getShopByAccountId = async () => {
    if(!authState.account) return ;
    const res = await axios.get(`${SERVER}/admin/shop`, {params: {cre_uid: authState.account._id}});
    dispatch(actions.changeField('shop_id', res.data.shop ? res.data.shop[0]._id : ''));
    dispatch(actions.loadShop(res.data.shop));
  }

  const addGroupOption = (e) => {
    e.preventDefault();
    dispatch(actions.addGroupOption());
  }

  const removeGroupOption = (e, index) => {
    e.preventDefault();
    dispatch(actions.removeGroupOption(index));
  }

  const addProductOption = (e, indexGroup) => {
    e.preventDefault();
    dispatch(actions.addProductOption(indexGroup));
  }

  const removeProductOption = (e, indexGroup, indexProduct) => {
    e.preventDefault();
    dispatch(actions.removeProductionOption(indexGroup, indexProduct));
  }

  const value = {    
    loadCategory,
    getAttributeByCategoryId,
    getShopByAccountId,
    addGroupOption,
    addProductOption,
    removeGroupOption,
    removeProductOption,
    changeAttribute,
    changeField,
    changeFieldOptionTitle,
    changeFieldOptionValue,
    reset,
    createProduct,
    categories, 
    product, 
    attributes, 
    shops,
    group,
    trees,
    result
  };

  return (
  <ProductNewContext.Provider value={value}>
    {props.children}
  </ProductNewContext.Provider>
  )
}

export default CategoryNewProvider;