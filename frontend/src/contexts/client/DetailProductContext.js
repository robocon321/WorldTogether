/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SERVER } from "../../utils/Constants";
import * as suggestSaleActions from "../../actions/client/detail_product/SuggestSaleAction";
import * as detailProductActions from "../../actions/client/detail_product/DetailProductAction";

export const DetailProductContext = createContext();

const DetailProductProvider = (props) => {
  const { suggestSale, detailProduct } = useSelector(state => state);
  const dispatcher = useDispatch();

  useEffect(() => {
    loadProduct_SuggestSale();
    loadProduct_Detail();
  }, []);

  // detail product

  const loadProduct_Detail = async () => {
    const resProduct = await axios.get(`${SERVER}/product`, {
      params: {
        is_delete: false,
        limit: 10,
        skip: 0, 
        search: '',
        _id: props.match.params.id
      }
    });
    
    if(resProduct.data.success) {
      dispatcher(detailProductActions.loadDetailProduct(resProduct.data.product[0]));
      resProduct.data.product.forEach((item) => {
        loadOption_Detail(item._id);
      })
    }
  }

  const loadOption_Detail = async (id) => {
    const resProduct = await axios.get(`${SERVER}/option-product`, {
      params: {
        query_title: {
          product_id: id
        },
        query_value: {}
      }
    });

    if(resProduct.data.success) {
      dispatcher(detailProductActions.loadOptions(resProduct.data.product_titles, resProduct.data.product_values));
      dispatcher(detailProductActions.loadOptions(resProduct.data.product_titles, resProduct.data.product_values));
    };
  }

  const findTitleByIdValue_Detail = (id) => {
    const optValue = suggestSale.product_values.find(item => item._id === id);
    return suggestSale.product_titles.find(item => item._id === optValue.opt_title_id);
  }

  const findProductByIdValue_Detail = (id) => {
    return suggestSale.products.find(item => item._id === findTitleByIdValue_SuggestSale(id).product_id)
  }

  // suggest product

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

  const splitImageString = (index) => {
    if(!detailProduct.product_values.length || detailProduct.product_values[index].imgs === '') return [];
    else return detailProduct.product_values[index].imgs.split(',');
  }

  const value = {
    suggestSale, 
    findTitleByIdValue_SuggestSale, 
    findProductByIdValue_SuggestSale, 
    loadProduct_SuggestSale,

    detailProduct,
    findTitleByIdValue_Detail,
    findProductByIdValue_Detail,
    splitImageString
  };

  return (
    <DetailProductContext.Provider value={value}>
      {props.children}
    </DetailProductContext.Provider>
  )
}

export default DetailProductProvider;