/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import avatar from "../../../assets/images/avatar.png";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/product_list.css";

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

const ProductList = props => {
  return (
    <div>
      <div className="product_list d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="product" />
        </div>
        <div className="col-10">
          <AdminHeader title="Product" />
          <main>
          <div className="row p-4 m-0">
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-blue-l c-white">
                    <div className="fs-30">12</div>
                    <div><b>Sản phẩm</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>Phổ biến: Điện thoại</span></div>
                  </div>
                  <div className="right bg-blue-d h-full c-white">
                    <div><i className="fas fa-eye"></i></div>
                  </div>  
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-purple-l c-white">
                    <div className="fs-30">6000$</div>
                    <div><b>Tổng doanh thu</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>22% so tháng trước</span></div>
                  </div>
                  <div className="right bg-purple-d h-full c-white">
                    <div><i className="fas fa-money-bill-alt"></i></div>
                  </div>  
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-red-l c-white">
                    <div className="fs-30">322</div>
                    <div><b>Lượt truy cập</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>22% so tháng trước</span></div>
                  </div>
                  <div className="right bg-red-d h-full c-white">
                    <div><i className="fas fa-search"></i></div>
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
                  <input className="search-box sub-search" name="sub-search" type="text" />              
                  <div className="icon"><i className="fas fa-search"></i></div>
                </div>
                <Link to="/admin/product/new"><button className="btn-add bg-blue-l c-white rd-full">+</button></Link>       
              </div>
              <div className="categories">
                <table className=" my-4">
                  <tbody>
                    <tr>
                      <th>STT</th>
                      <th>Title</th>
                      <th>Avatar</th>
                      <th>Real price</th>
                      <th>Sale price</th>
                      <th>Quantity</th>
                      <th>View count</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><div className="ht-6"><img src={avatar} alt="Not found" /></div></td>
                      <td>15.000.000</td>
                      <td>18.000.000</td>
                      <td>123</td>
                      <td>100</td>
                      <td><Link to="/admin/product/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>

                  </tbody>
                </table>
                <div className="spinner text-center">
                  <div className="spinner-border"></div>
                </div>
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

export default ProductList;