/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, {useContext, useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../assets/fonts/iconic/css/material-design-iconic-font.min.css";
import bg from "../../assets/images/bg-01.jpg";
import "../../assets/css/client/login_main.css";
import "../../assets/css/client/login_util.css";

import {AuthContext} from "../../contexts/AuthContext";

const Login = (props) => {
  const {loginAccount} = useContext(AuthContext);
  const alert = useRef(null);
  const [account, setAccount] = useState({
    uname: "",
    pwd: ""
  });

  const onLogin = async (e) => {
    e.preventDefault();

    const result = await loginAccount(account);
    if(!result.success) {
      alert.current.style.display = "block";
      alert.current.textContent = result.message;
    } else {
      alert.current.style.display = "none";
      props.history.push("/admin");
    }
  }

  const onChangeFieldRegister = e => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    alert.current.style.display = "none";
  }, []);
  
  return (
    <div>
      <div className="login_main login_util limiter">
        <div className="container-login100" style={{backgroundImage: `url(${bg})`}}>
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={onLogin}>
              <span className="login100-form-title p-b-49">
                Login
              </span>

              <div className="alert alert-danger" role="alert" ref={alert}></div>

              <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                <span className="label-input100">Username</span>
                <input className="input100" type="text" name="uname" placeholder="Type your username" required onChange={onChangeFieldRegister}/>
                <span className="focus-input100" data-symbol="&#xf206;"></span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Password</span>
                <input className="input100" type="password" name="pwd" placeholder="Type your password" required  onChange={onChangeFieldRegister}/>
                <span className="focus-input100" data-symbol="&#xf190;"></span>
              </div>
              
              <div className="text-right p-t-8 p-b-31">
                <Link to={"/auth/forgot-password"}>
                  Forgot password?
                </Link>
              </div>
              
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">
                    Login
                  </button>
                </div>
              </div>

              <div className="txt1 text-center p-t-54 p-b-20">
                <span>
                  Or Login Using
                </span>
              </div>

              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a href="#" className="login100-social-item bg2">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="#" className="login100-social-item bg3">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>

              <div className="flex-col-c p-5">
                <span className="txt1 p-b-17">
                  Or Sign Up Using
                </span>

                <Link to={"/auth/register"} className="txt2">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      

      <div id="dropDownSelect1"></div>
      
      <script src="../../assets/vendor/jquery/jquery-3.6.0.min.js"></script>
      <script src="../../assets/vendor/bootstrap-5.1.0-dist/js/bootstrap.min.js"></script>
      <script src="../../assets/vendor/fontawesome-free-5.15.4-web/js/all.min.js"></script>
      <script src="../../assets/js/login_main.js"></script>
    </div>
  )
}

export default Login;