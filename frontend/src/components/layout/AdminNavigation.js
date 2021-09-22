/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../assets/css/admin/styles.css";
import categoryIcon from "../../assets/images/category-white.png";
import dashboardIcon from "../../assets/images/dashboard-white.png";
import shopIcon from "../../assets/images/shop-white.png";
import productIcon from "../../assets/images/product-white.png";
import orderIcon from "../../assets/images/order-white.png";
import accountIcon from "../../assets/images/order-white.png";
import settingIcon from "../../assets/images/setting-white.png";
import logoutIcon  from "../../assets/images/logout-white.png";
import { Link } from "react-router-dom";

const AdminNavigation = props => {
  return (
    <nav className="c-white pt-3 ps-3">
    <div className="brand fs-30"><b>Woto</b></div>
    <ul className="nav-list">
      <li className="active"><Link className="d-flex" to="/admin/dashboard"><span className="me-2 h-10"><img className="h-full" src={dashboardIcon} alt="Not found" /></span><span>Dashboard</span></Link></li>
      <li><Link className="d-flex" to="/admin/category"><span className="me-2 h-10"><img className="h-full" src={categoryIcon} alt="Not found" /></span><span>Categories</span></Link></li>
      <li><Link className="d-flex" to="/admin/shop"><span className="me-2 h-10"><img className="h-full" src={shopIcon} alt="Not found" /></span><span>Shops</span></Link></li>
      <li><Link className="d-flex" to="/admin/product"><span className="me-2 h-10"><img className="h-full" src={productIcon} alt="Not found" /></span><span>Products</span></Link></li>
      <li><Link className="d-flex" to="/admin/order"><span className="me-2 h-10"><img className="h-full" src={orderIcon} alt="Not found" /></span><span>Orders</span></Link></li>
      <li><Link className="d-flex" to="/admin/account"><span className="me-2 h-10"><img className="h-full" src={accountIcon} alt="Not found" /></span><span>Accounts</span></Link></li>
      <li><Link className="d-flex" to="/admin/setting"><span className="me-2 h-10"><img className="h-full" src={settingIcon} alt="Not found" /></span><span>Settings</span></Link></li>
      <li><a className="d-flex" href="#"><span className="me-2 h-10"><img className="h-full" src={logoutIcon} alt="Not found" /></span><span>Logout</span></a></li>
    </ul>
  </nav>
  )
};

export default AdminNavigation;
