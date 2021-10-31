/* eslint-disable no-loop-func */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../../utils/Constants";
import * as actions from "../../../actions/admin/product/ProductEditAction";
import { uploadFirebase } from "../../../utils/fn";
import {  getDownloadURL } from "@firebase/storage";
import {AuthContext} from "../../AuthContext";

export const ProductEditContext = createContext();

const ProductEditProvider = (props) => {
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
    loadProduct(props.match.params.id);
    getShopByAccountId();
  }, []);

  useEffect(() => {
    buildTreeCategories();
  }, [categories]);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      // update product
      const resProduct = await axios.put(`${SERVER}/admin/product`, product);
      dispatch(actions.setResult({success: resProduct.data.success, message: resProduct.data.message}));
      if(!resProduct.data.success) return;

      // update attribute value
      group.forEach(itemGroup => {
        itemGroup.forEach(item => {
          item.product_title.product_id = product._id;
        })
      });

      const resAttributeValue = await axios.put(`${SERVER}/admin/attribute-value`, {
        oldProduct: resProduct.data.old, 
        updateProduct: resProduct.data.update,
        attributeValues
      });
      dispatch(actions.setResult({success: resAttributeValue.data.success, message: resAttributeValue.data.message}));
      if(!resAttributeValue.data.success) return;

      // update option product
      const resOptProduct = await axios.put(`${SERVER}/admin/option-product`, {
        group, 
        oldProduct: resProduct.data.old, 
        updateProduct: resProduct.data.update
      });
      dispatch(actions.setResult({success: resOptProduct.data.success, message: resOptProduct.data.message}));
      if(resAttributeValue.data.success) props.history.goBack();
    }
    catch (e) {
      console.log(e);
      if(e.response) {
        dispatch(actions.setResult({success: false, message: e.response.data.message}));
      }
    }
  }

  const loadProduct = async (id) => {
    const res = await axios.get(`${SERVER}/admin/product`, {
      params: {
        _id: id,
        is_delete: false
      }
    });

    dispatch(actions.loadProduct(res.data.product[0]));
    loadProductOption(res.data.product[0]._id);
    loadAttributeByCategoryId(res.data.product[0].category_id._id);
    loadAttributeValue(res.data.product[0]._id);
  }

  const loadAttributeByCategoryId = async (id) => {
    if(!id) return;
    const res = await axios.get(`${SERVER}/admin/attribute`, {params: {category_id: id}});
    dispatch(actions.setResult({success: res.data.success, message: res.data.message}));
    if(res.data.success) dispatch(actions.loadAttribute(res.data.attribute));
  }

  const loadAttributeValue = async (product_id) => {
    if(!product_id) return;
    const res = await axios.get(`${SERVER}/admin/attribute-value`, {params: {product_id}});
    dispatch(actions.setResult({success: res.data.success, message: res.data.message}));
    if(res.data.success) dispatch(actions.loadAttributeValue(res.data.productAttributeValue));
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
    }
  }

  const loadProductOption = async (product_id) => {
    const res = await axios.get(`${SERVER}/admin/option-product`, {
      params: {
        query_title: {
          product_id
        },
        query_value: {}
      }
    });

    
    dispatch(actions.loadOptionProduct(res.data.product_titles, res.data.product_values));
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
    if(e.target.name === 'category_id') {
      getAttributeByCategoryId(e.target.value);
    }
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

  const changeAttribute = (e, attr_id) => {
    e.preventDefault();
    dispatch(actions.changeAttribute(attr_id, e.target.name, e.target.value));
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

  const getAttributeByCategoryId = async (id) => {
    if(!id) return;
    const res = await axios.get(`${SERVER}/admin/attribute`, {params: {category_id: id}});
    dispatch(actions.loadAttribute(res.data.attribute));
  }

  const getAttributeById = (id) => {
    if(!attributeValues) return {};
    const result = attributeValues.find(item => item.attr_id === id);
    return result;
  }

  const getShopByAccountId = async () => {
    if(!authState.account) return ;
    const res = await axios.get(`${SERVER}/admin/shop`, {params: {cre_uid: authState.account._id, is_delete: false}});
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
    getAttributeById,
    addGroupOption,
    addProductOption,
    removeGroupOption,
    removeProductOption,
    changeAttribute,
    changeField,
    changeFieldOptionTitle,
    changeFieldOptionValue,
    reset,
    updateProduct,
    categories, 
    product, 
    attributes, 
    shops,
    group,
    trees,
    result
  };

  return (
  <ProductEditContext.Provider value={value}>
    {props.children}
  </ProductEditContext.Provider>
  )
}

export default ProductEditProvider;