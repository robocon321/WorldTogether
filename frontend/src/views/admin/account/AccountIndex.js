import { React } from "react";
import {Route, Switch} from "react-router-dom";
import AccountList from "./AccountList";
import AccountNew from "./AccountNew";
import AccountEdit from "./AccountEdit";

const AccountIndex = props => {
  return (
    <Switch>
      <Route path="/admin/account/new" component={AccountNew} />
      <Route path="/admin/account/edit" component={AccountEdit} />
      <Route path="/admin/account" component={AccountList} />
    </Switch>
  )
}

export default AccountIndex;