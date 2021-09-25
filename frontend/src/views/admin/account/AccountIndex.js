import { React } from "react";
import {Route, Switch} from "react-router-dom";
import AccountProvider from '../../../contexts/AccountContext';
import AccountList from "./AccountList";
import AccountNew from "./AccountNew";
import AccountEdit from "./AccountEdit";

const AccountIndex = props => {
  return (
    <AccountProvider>
      <Switch>
        <Route path="/admin/account/new" component={AccountNew} />
        <Route path="/admin/account/edit" component={AccountEdit} />
        <Route path="/admin/account" component={AccountList} />
      </Switch>
    </AccountProvider>
  )
}

export default AccountIndex;