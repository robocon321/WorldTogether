/* eslint-disable react-hooks/exhaustive-deps */
import { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../actions/admin/shop/ShopNewAction";
import axios from 'axios';
import { SERVER } from "../../../utils/Constants";
import { uploadFirebase } from "../../../utils/fn";
import { getDownloadURL } from "@firebase/storage";

export const ShopNewContext = createContext();

const ShopNewProvider = (props) => {
  
  const { newShop, result, shop } = useSelector(state => state);
  const dispatch = useDispatch();


  const createShop = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${SERVER}/admin/shop`, newShop);
      dispatch(actions.changeResult({success: res.data.success, message: res.data.message}));
      if(res.data.success) props.history.push('/admin/shop');
      return ;
    } catch (e) {
      if (e.response) {
        dispatch(actions.changeResult({success: e.response.data.success, message: e.response.data.message}));
        return ;
      }
    }
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
          dispatch(actions.changeField('avatar', downloadURL));          
        });
      }); 
    } else {
      dispatch(actions.changeField(e.target.name, e.target.value));
    }
  }

  const reset = () => {
    dispatch(actions.reset());
  }

  const value = {createShop, changeField, reset, shop, result};

  return (
    <ShopNewContext.Provider value={value}>
      {props.children}
    </ShopNewContext.Provider>
  )
}

export default ShopNewProvider;