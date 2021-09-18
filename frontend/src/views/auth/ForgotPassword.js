import React from "react";
import "../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../assets/fonts/iconic/css/material-design-iconic-font.min.css";
import bg from "../../assets/images/bg-01.jpg";
import "../../assets/css/client/login_main.css";
import "../../assets/css/client/login_util.css";

const ForgotPassword = props => {
  return (
    <div>
      
      <div className="limiter">
        <div className="container-login100" style={{backgroundImage: `url(${bg})`}}>
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form">
              <span className="login100-form-title p-b-49">						
                Enter your email
              </span>
    
              <div className="wrap-input100 validate-input m-b-23" data-validate = "Email is reauired">
                <span className="label-input100">Email</span>
                <input className="input100" type="email" name="email" placeholder="example123@gmail.com" />
                <span className="focus-input100" data-symbol="&#xf15a;"></span>
              </div>
    
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn">
                    Submit
                  </button>
                </div>
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

export default ForgotPassword;