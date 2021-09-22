import { React } from "react";
import {Route, Switch} from "react-router-dom";
import OrderDetail from "./OrderDetail";
import OrderList from "./OrderList";

const OrderIndex = props => {
  return (
    <Switch>
      <Route path="/admin/order/detail" component={OrderDetail} />
      <Route path="/admin/order" component={OrderList} />
    </Switch>
  )
}

export default OrderIndex;