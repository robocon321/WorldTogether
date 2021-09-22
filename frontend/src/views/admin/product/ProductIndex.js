import { React } from "react";
import {Route, Switch} from "react-router-dom";
import ProductEdit from "./ProductEdit";
import ProductList from "./ProductList";
import ProductNew from "./ProductNew";

const ProductIndex = props => {
  return (
    <Switch>
      <Route path="/admin/product/new" component={ProductNew} />
      <Route path="/admin/product/edit" component={ProductEdit} />
      <Route path="/admin/product" component={ProductList} />
    </Switch>
  )
}

export default ProductIndex;