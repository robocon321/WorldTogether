
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

import { Provider } from "react-redux";
import { Route, Switch } from "react-router";

import HomeProvider from "../../contexts/client/HomeContext";
import Home from "./Home";
import homeStore from "../../reducers/client/home/index";
import ClientHeader from "../../components/layout/ClientHeader";
import ClientFooter from "../../components/layout/ClientFooter";

const Client = props => {
  return (
    <div>
      <ClientHeader />
        <Switch>
            <Route path="/" children={(props) => (
              <Provider store={homeStore}>
                  <HomeProvider {...props}>
                    <Home />
                  </HomeProvider>
                </Provider>
              )}>
            </Route>
        </Switch>
      <ClientFooter />
    </div>
  )

}

export default Client;