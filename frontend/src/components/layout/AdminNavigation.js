/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const AdminNavigation = props => {
  const {logoutAccount} = useContext(AuthContext);

  return (
    <nav className="c-white pt-3 ps-3 h-100-vh">
    <div className="brand fs-30"><b>Woto</b></div>
    <ul className="nav-list">
      <li className={props.title === "dashboard" ? "active" : ""}><Link className="d-flex" to="/admin/dashboard"><span className="me-2 h-10"><img className="h-full" src="/assets/images/dashboard-white.png" alt="Not found" /></span><span>Dashboard</span></Link></li>
      <li className={props.title === "category" ? "active" : ""}><Link className="d-flex" to="/admin/category"><span className="me-2 h-10"><img className="h-full" src="/assets/images/category-white.png" alt="Not found" /></span><span>Categories</span></Link></li>
      <li className={props.title === "shop" ? "active" : ""}><Link className="d-flex" to="/admin/shop"><span className="me-2 h-10"><img className="h-full" src="/assets/images/shop-white.png" alt="Not found" /></span><span>Shops</span></Link></li>
      <li className={props.title === "product" ? "active" : ""}><Link className="d-flex" to="/admin/product"><span className="me-2 h-10"><img className="h-full" src="/assets/images/product-white.png" alt="Not found" /></span><span>Products</span></Link></li>
      <li className={props.title === "order" ? "active" : ""}><Link className="d-flex" to="/admin/order"><span className="me-2 h-10"><img className="h-full" src="/assets/images/order-white.png" alt="Not found" /></span><span>Orders</span></Link></li>
      <li className={props.title === "account" ? "active" : ""}><Link className="d-flex" to="/admin/account"><span className="me-2 h-10"><img className="h-full" src="/assets/images/order-white.png" alt="Not found" /></span><span>Accounts</span></Link></li>
      <li className={props.title === "setting" ? "active" : ""}><Link className="d-flex" to="/admin/setting"><span className="me-2 h-10"><img className="h-full" src="/assets/images/setting-white.png" alt="Not found" /></span><span>Settings</span></Link></li>
      <li onClick={logoutAccount}><a className="d-flex" href="#"><span className="me-2 h-10"><img className="h-full" src="/assets/images/logout-white.png" alt="Not found" /></span><span>Logout</span></a></li>
    </ul>
  </nav>
  )
};

export default AdminNavigation;
