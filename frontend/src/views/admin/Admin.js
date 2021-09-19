/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../../components/Loading";
import { PERMISSION } from "../../utils/Constants";

const Admin = props => {
  const { authState, loadAccount } = useContext(AuthContext);
  
  useEffect(async () => {
    await loadAccount();
  }, []);

  if(authState.isLoading) {
    return <Loading />
  } else {
    if(authState.isAuth || authState.account.permission < PERMISSION.CLIENT) {
      return <div>Admin Page</div>
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