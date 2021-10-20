import { React } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {Route, Switch} from "react-router-dom";
import ProductNewProvider from "../../../contexts/admin/product/ProductNewContext";

import ProductEdit from "./ProductEdit";
import ProductList from "./ProductList";
import ProductNew from "./ProductNew";

import ProductEditReducer from "../../../reducers/admin/product/ProductNewReducer";

const editStore = createStore(ProductEditReducer);


const ProductIndex = props => {
  return (
    <Switch>
      <Route path="/admin/product/new" children={(props) => (
        <Provider store={editStore}>
          <ProductNewProvider {...props}>
            <ProductNew />
          </ProductNewProvider>
        </Provider>
      )}/>
      <Route path="/admin/product/edit" component={ProductEdit} />
      <Route path="/admin/product" component={ProductList} />
    </Switch>
  )
}

export default ProductIndex;