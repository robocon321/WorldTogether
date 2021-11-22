
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

import { Provider } from "react-redux";
import {Route, Switch} from "react-router-dom";

import HomeProvider from "../../contexts/client/HomeContext";
import DetailProductProvider from "../../contexts/client/DetailProductContext";
import ClientHeaderProvider from "../../contexts/client/ClientHeaderContext";

import ClientHeader from "../../components/layout/ClientHeader";
import ClientFooter from "../../components/layout/ClientFooter";

import Home from "./Home";
import DetailProduct from "./DetailProduct";

import homeStore from "../../reducers/client/home/index";
import detailStore from "../../reducers/client/detail_product/index";
import headerStore from "../../reducers/client/template/ClientHeaderReducer";

const Client = props => {
  return (
    <div>
      <Provider store={headerStore}>
        <ClientHeaderProvider>
          <ClientHeader />
        </ClientHeaderProvider>
      </Provider>
      <Switch>
        <Route path="/sanpham/:id" component={(props) => (
          <Provider store={detailStore}>
              <DetailProductProvider {...props}>
                <DetailProduct />
              </DetailProductProvider>
            </Provider>
          )} />
        <Route path="/" children={(props) => (
          <Provider store={homeStore}>
              <HomeProvider {...props}>
                <Home />
              </HomeProvider>
            </Provider>
          )} />
      </Switch>
      <ClientFooter />
    </div>
  )

}

export default Client;