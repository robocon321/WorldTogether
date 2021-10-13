import { React } from "react";
import {Route, Switch} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AccountList from "./AccountList";
import AccountNew from "./AccountNew";
import AccountEdit from "./AccountEdit";
import AccountListProvider from "../../../contexts/admin/account/AccountListContext";
import AccountEditProvider from "../../../contexts/admin/account/AccountEditContext";
import AccountNewProvider from "../../../contexts/admin/account/AccountNewContext";
import accountEditReducer from "../../../reducers/admin/account/AccountEditReducer";
import accountNewReducer from "../../../reducers/admin/account/AccountNewReducer";
import accountListReducer from "../../../reducers/admin/account/AccountListReducer";

const editAccountStore = createStore(accountEditReducer);
const listAccountStore = createStore(accountListReducer);
const newAccountStore = createStore(accountNewReducer);

const AccountIndex = props => {
  return (
    <Switch>
      <Route path="/admin/account/new" children={(props) => (
        <Provider store={newAccountStore}>
            <AccountNewProvider {...props}>
              <AccountNew />
            </AccountNewProvider>
          </Provider>
        )}>
      </Route>
      <Route path="/admin/account/edit/:id" children={(props) => (
        <Provider store={editAccountStore}>
          <AccountEditProvider {...props}>
            <AccountEdit />
          </AccountEditProvider>
          </Provider>
        )}>
      </Route>
      <Route path="/admin/account" children={(props)=> (
        <Provider store={listAccountStore}>
          <AccountListProvider {...props}>
            <AccountList />
          </AccountListProvider>
          </Provider>
        )}>
      </Route>
    </Switch>
  )
}

export default AccountIndex;