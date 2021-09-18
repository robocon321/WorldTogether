/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Admin = props => {
  const { authState, loadAccount } = useContext(AuthContext);
  useEffect(async () => {
    await loadAccount();
  }, []);
  if(authState.isAuth) return <div>Admin Page</div>
  else return( 
    <Redirect to={{
      pathname:"/auth"
    }}/>
  )
}

export default Admin;