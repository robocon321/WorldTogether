import { React } from "react";
import {Route, Switch} from "react-router-dom";
import {createStore} from "redux";
import { Provider } from "react-redux";

import ShopEdit from "./ShopEdit";
import ShopNew from "./ShopNew";
import ShopList from "./ShopList";

import ShopListProvider from "../../../contexts/admin/shop/ShopListContext";
import ShopEditProvider from "../../../contexts/admin/shop/ShopEditContext";
import ShopNewProvider from "../../../contexts/admin/shop/ShopNewContext";
import shopEditReducer from "../../../reducers/admin/shop/ShopEditReducer";
import shopNewReducer from "../../../reducers/admin/shop/ShopNewReducer";
import shopListReducer from "../../../reducers/admin/shop/ShopListReducer";

const editShopStore = createStore(shopEditReducer);
const listShopStore = createStore(shopListReducer);
const newShopStore = createStore(shopNewReducer);

const ShopIndex = props => {
  return (
    <Switch>
      <Route path="/admin/shop/new" children={(props) => (
        <Provider store={newShopStore}>
            <ShopNewProvider {...props}>
              <ShopNew />
            </ShopNewProvider>
          </Provider>
        )}>
      </Route>
      <Route path="/admin/shop/edit/:id" children={(props) => (
        <Provider store={editShopStore}>
          <ShopEditProvider {...props}>
            <ShopEdit />
          </ShopEditProvider>
          </Provider>
        )}>
      </Route>
      <Route path="/admin/shop" children={(props)=> (
        <Provider store={listShopStore}>
          <ShopListProvider {...props}>
            <ShopList />
          </ShopListProvider>
          </Provider>
        )}>
      </Route>
    </Switch>
  )
}

export default ShopIndex;