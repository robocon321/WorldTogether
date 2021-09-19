import React from "react";
import "../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";

const Loading = props => {
  return (
  <div className="d-flex align-items-center justify-content-center" style={{height: "100vh", width: "100vw"}}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}

export default Loading;