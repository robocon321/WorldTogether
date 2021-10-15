/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../actions/admin/shop/ShopEditAction";
import axios from 'axios';
import { SERVER } from "../../../utils/Constants";
import { uploadFirebase } from "../../../utils/fn";
import { getDownloadURL } from "@firebase/storage";

export const ShopEditContext = createContext();

const ShopEditProvider = (props) => {
  
  const { newShop, result } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    loadShop(props.match.params.id);
  }, []);

  
  const loadShop = async id => {
    const shop = await (await axios.get(`${SERVER}/admin/shop`, {params: {_id: id, is_delete: false}})).data.shop[0];
    if(shop) dispatch(actions.loadShop(shop));
  }

  const updateShop = async (e) => {
    e.preventDefault();

    try {
      const oldShop = {_id: newShop._id, is_delete: true};

      if(!newShop.old_id) newShop.old_id = oldShop._id;

      delete newShop._id;

      console.log(oldShop, newShop);
      const updateOld = await axios.put(`${SERVER}/admin/shop`, oldShop);
      const createNew = await axios.post(`${SERVER}/admin/shop`, newShop);

      if(!updateOld.data.success) {
        dispatch(actions.changeResult({success: false, message: updateOld.data.message}));
        return ;
      }

      dispatch(actions.changeResult({success: createNew.data.success, message: createNew.data.message}));
      if(createNew.data.success) props.history.goBack();  
      return ;

    } catch (e) {
      console.log(e);
      if (e.response) {
        dispatch(actions.changeResult({success: e.response.data.success, message: e.response.data.message}));
      }
      return ;
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
          dispatch(actions.changeField('icon', downloadURL));          
        });
      }); 
    } else {
      dispatch(actions.changeField(e.target.name, e.target.value));
    }
  }

  const reset = () => {
    dispatch(actions.reset());
  }

  const value = {
    updateShop, 
    changeField, 
    reset, 
    loadShop, 
    newShop, 
    result
  };

  return (
    <ShopEditContext.Provider value={value}>
      {props.children}
    </ShopEditContext.Provider>
  )
}

export default ShopEditProvider;