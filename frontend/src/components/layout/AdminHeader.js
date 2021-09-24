/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../assets/css/admin/styles.css";
import accIcon from "../../assets/images/account-black.png";
import navIcon from "../../assets/images/nav.png";

const AdminNavigation = props => {
  return (
    <header>
    <div className="d-flex justify-content-between">
      <div className="left d-flex align-items-center">
        <div className="title-nav me-4 d-flex align-items-center" id="toggle-nav"><span className="me-2 h-10 d-flex align-items-center"><img className="h-full" src={navIcon} alt="Not found" /></span><span>{props.title}</span></div>
        <div className="search"><input className="search-box" type="text" placeholder="Enter something..." /></div>
      </div>
      <div className="right d-flex align-items-center">
        <div className="notify fs-15 me-3 c-gray"><i className="far fa-bell"></i></div>
        <div className="message fs-15 me-3 c-gray"><i className="far fa-comment"></i></div>
        <div className="acc-info">
          <div className="acc-avatar me-3"><img src={accIcon} alt="" /></div>
        </div>
        <div className="acc">
          <div className="name"><b>Nguyễn Thanh Nhật</b></div>
          <div className="acc-permission c-gray">Permission: root</div>
        </div>  
      </div>
    </div>
  </header>

  )
};

export default AdminNavigation;
