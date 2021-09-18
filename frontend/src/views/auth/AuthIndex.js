import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

const AuthIndex = props => {
  return (
      <Switch>
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/forgot-password" component={ForgotPassword} />
        <Route path="/auth" component={Login} />
      </Switch>
  )
}

export default AuthIndex;