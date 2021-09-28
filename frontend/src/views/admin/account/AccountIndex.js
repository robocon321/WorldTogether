import { React } from "react";
import {Route, Switch} from "react-router-dom";
import AccountProvider from '../../../contexts/AccountContext';
import AccountList from "./AccountList";
import AccountNew from "./AccountNew";
import AccountEdit from "./AccountEdit";
import { Provider } from 'react-redux';
import store from "../../../reducers/AccountReducer";

const AccountIndex = props => {
  return (
    <Provider store={store}>
      <AccountProvider>
        <Switch>
          <Route path="/admin/account/new" component={AccountNew} />
          <Route path="/admin/account/edit/:id" component={AccountEdit} />
          <Route path="/admin/account" component={AccountList} />
        </Switch>
      </AccountProvider>
    </Provider>
  )
}

export default AccountIndex;