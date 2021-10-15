/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/shop_list.css";
import { ShopListContext } from "../../../contexts/admin/shop/ShopListContext";

const data = {
  labels: ['a','b','c','d','e','f'],
  datasets: [
    {
      label: 'Dataset',
      data: [38, 22, 58, 77, 83, 11],
      borderColor: "#000000",
      backgroundColor: "#3381ff",
      fill: false
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Top income shop'
    }
  }
};

const ShopList = props => {
  const { 
    loadShop, 
    searchShop, 
    shops, 
    remain
   } = useContext(ShopListContext);  

  return (
    <div>
      <div className="shop_list d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="shop" />
        </div>
        <div className="col-10">
          <AdminHeader title="Shop" />          
          <main>
          <div className="row p-4 m-0">
            <div className="d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-blue-l c-white">
                    <div className="fs-30">512</div>
                    <div><b>Tổng số shop</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>22% so tháng trước</span></div>
                  </div>
                  <div className="right bg-blue-d h-full c-white">
                    <div><i className="fas fa-eye"></i></div>
                  </div>  
                </div>
              </div>
          </div>
            <div className="p-4 m-0">
                <Line data={data} options={options} />
            </div>
            <div className="p-4 m-0">
              <div className="actions d-flex align-items-center justify-content-center">
                <select className="sort me-3" name="sort">
                  <option value="0">Mới nhất</option>
                  <option value="1">Phổ biến nhất</option>
                  <option value="2">Nhiều sản phẩm nhất</option>
                  <option value="3">Nhiều lượt xem nhất</option>
                </select>
                <div className="search me-3">
                  <input className="search-box sub-search" name="sub-search" type="text" onChange={searchShop} />              
                  <div className="icon"><i className="fas fa-search"></i></div>
                </div>   
              </div>
              <div className="categories">
                <table className=" my-4">
                  <tbody>
                    <tr>
                      <th>STT</th>
                      <th>Title</th>
                      <th>Avatar</th>
                      <th>Products</th>
                      <th>Follow</th>
                      <th>View count</th>
                    </tr>
                    {
                      shops.map((item, index) => 
                      <tr key={index}>
                        <td><a href="#">{index}</a></td>
                        <td>{item.title}</td>
                        <td><div className="ht-4"><img className="s-hfull" src={item.avatar} alt="Not found" /></div></td>
                        <td><a href="#">Go to products</a></td>
                        <td>0</td>
                        <td>0</td>
                      </tr>                      
                      )
                    }
                  </tbody>
                </table>
                <div className="d-flex justify-content-center"><button className="c-white bg-blue px-5 py-2 bd-width-0" onClick={() => loadShop()}>More ({remain})</button></div>
              </div>
            </div>
          </main>  
        </div>
      </div>
      <script src="../../../assets/vendor/bootstrap-5.1.0-dist/js/bootstrap.min.js"></script>
      <script src="../../../assets/vendor/bootstrap-5.1.0-dist/js/bootstrap.bundle.min.js"></script>
      <script src="../../../assets/vendor/fontawesome-free-5.15.4-web/js/all.min.js"></script>
      <script src="../../../assets/vendor/jquery/jquery-3.6.0.min.js"></script>
    </div>
  )
}

export default ShopList;