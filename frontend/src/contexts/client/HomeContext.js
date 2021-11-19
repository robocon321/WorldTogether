/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../utils/Constants";
import * as flashSaleActions from "../../actions/client/home/FlashSaleAction";
import * as suggestSaleActions from "../../actions/client/home/SuggestSaleAction";

export const HomeContext = createContext();

const HomeProvider = (props) => {

  const { flashSale, suggestSale } = useSelector(state => state);
  const dispatcher = useDispatch();

  useEffect(() => {
    loadProduct_FlashSale();
    loadProduct_SuggestSale();
  }, []);
  
  const loadProduct_FlashSale = async () => {
    const resProduct = await axios.get(`${SERVER}/product`, {
      params: {
        is_delete: false,
        limit: 10,
        skip: 0, 
        search: ''
      }
    });
    
    if(resProduct.data.success) {
      dispatcher(flashSaleActions.loadProduct(resProduct.data.product));
      resProduct.data.product.forEach((item) => {
        loadOption_FlashSale(item._id);
      })
    }
  }

  const loadOption_FlashSale = async (id) => {
    const resProduct = await axios.get(`${SERVER}/option-product`, {
      params: {
        query_title: {
          product_id: id
        },
        query_value: {}
      }
    });

    if(resProduct.data.success) {
      dispatcher(flashSaleActions.loadOption(resProduct.data.product_titles, resProduct.data.product_values));
      dispatcher(flashSaleActions.loadOption(resProduct.data.product_titles, resProduct.data.product_values));
    };
  }

  const loadProduct_SuggestSale = async () => {
    const resProduct = await axios.get(`${SERVER}/product`, {
      params: {
        is_delete: false,
        limit: 10,
        skip: 0, 
        search: ''
      }
    });
    
    if(resProduct.data.success) {
      dispatcher(suggestSaleActions.loadProduct(resProduct.data.product));
      resProduct.data.product.forEach((item) => {
        loadOption_SuggestSale(item._id);
      })
    }
  }

  const loadOption_SuggestSale = async (id) => {
    const resProduct = await axios.get(`${SERVER}/option-product`, {
      params: {
        query_title: {
          product_id: id
        },
        query_value: {}
      }
    });

    if(resProduct.data.success) {
      dispatcher(suggestSaleActions.loadOption(resProduct.data.product_titles, resProduct.data.product_values));
      dispatcher(suggestSaleActions.loadOption(resProduct.data.product_titles, resProduct.data.product_values));
    };
  }

  const findTitleByIdValue_SuggestSale = (id) => {
    const optValue = suggestSale.product_values.find(item => item._id === id);
    return suggestSale.product_titles.find(item => item._id === optValue.opt_title_id);
  }

  const findProductByIdValue_SuggestSale = (id) => {
    return suggestSale.products.find(item => item._id === findTitleByIdValue_SuggestSale(id).product_id)
  }

  const value = {
    flashSale, 
    suggestSale, 
    findTitleByIdValue_SuggestSale, 
    findProductByIdValue_SuggestSale, 
    loadProduct_SuggestSale
  };

  return (
    <HomeContext.Provider value={value}>
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeProvider;