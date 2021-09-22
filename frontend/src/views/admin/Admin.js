/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from "react";
import { Redirect, Switch, Route } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/fn/Loading";
import { PERMISSION } from "../../utils/Constants";
import DashboardIndex from "./dashboard/DashboardIndex";
import CategoryIndex from "./category/CategoryIndex";
import ProductIndex from "./product/ProductIndex";
import OrderIndex from "./order/OrderIndex";
import AccountIndex from "./account/AccountIndex";
import SettingIndex from "./setting/SettingIndex";

const Admin = props => {
  const { authState, loadAccount } = useContext(AuthContext);
  
  useEffect(async () => {
    await loadAccount();
  }, []);

  if(authState.isLoading) {
    return <Loading />
  } else {
    if(authState.isAuth || authState.account.permission < PERMISSION.CLIENT) {
      return (
        <Switch>
          <Route path="/admin/category" component={CategoryIndex} />
          <Route path="/admin/product" component={ProductIndex} />
          <Route path="/admin/order" component={OrderIndex} />
          <Route path="/admin/account" component={AccountIndex} />
          <Route path="/admin/setting" component={SettingIndex} />
          <Route path="/admin" component={DashboardIndex}/>
        </Switch>
      )
    }
    else {
      return( 
        <Redirect to={{
          pathname:"/auth"
        }}/>
      )
    }  
  }
}

export default Admin;