import { React } from "react";
import {Route, Switch} from "react-router-dom";
import {createStore} from "redux";
import ShopEdit from "./ShopEdit";
import ShopNew from "./ShopNew";
import ShopList from "./ShopList";
import ShopProvider from "../../../contexts/ShopContext";
import { Provider } from "react-redux";
import ShopReducer from "../../../reducers/ShopReducer";

const store = createStore(ShopReducer);

const ShopIndex = props => {
  return (
    <Provider store={store}>
      <ShopProvider>
        <Switch>
          <Route path="/admin/shop/new" component={ShopNew} />
          <Route path="/admin/shop/edit/:id" component={ShopEdit} />
          <Route path="/admin/shop" component={ShopList} />
        </Switch>
      </ShopProvider>
    </Provider>
  )
}

export default ShopIndex;