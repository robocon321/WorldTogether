import React from "react";

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