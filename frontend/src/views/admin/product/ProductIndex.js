import { React } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {Route, Switch} from "react-router-dom";

import ProductNewProvider from "../../../contexts/admin/product/ProductNewContext";
import ProductEditProvider from "../../../contexts/admin/product/ProductEditContext";
import ProductListProvider from "../../../contexts/admin/product/ProductListContext";

import ProductEdit from "./ProductEdit";
import ProductList from "./ProductList";
import ProductNew from "./ProductNew";

import ProductEditReducer from "../../../reducers/admin/product/ProductEditReducer";
import ProductListReducer from "../../../reducers/admin/product/ProductListReducer";
import ProductNewReducer from "../../../reducers/admin/product/ProductNewReducer";

const editStore = createStore(ProductEditReducer);
const listStore = createStore(ProductListReducer);
const newStore = createStore(ProductNewReducer);

const ProductIndex = props => {
  return (
    <Switch>
      <Route path="/admin/product/new" children={(props) => (
        <Provider store={newStore}>
          <ProductNewProvider {...props}>
            <ProductNew />
          </ProductNewProvider>
        </Provider>
      )}/>
      <Route path="/admin/product/edit/:id" children={(props) => (
        <Provider store={editStore}>
          <ProductEditProvider {...props}>
            <ProductEdit />
          </ProductEditProvider>
        </Provider>
      )}/>      
      <Route path="/admin/product" children={(props) => (
        <Provider store={listStore}>
          <ProductListProvider {...props}>
            <ProductList />
          </ProductListProvider>
        </Provider>
      )}/>
    </Switch>
  )
}

export default ProductIndex;