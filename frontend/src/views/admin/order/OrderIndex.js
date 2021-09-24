/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/order_list.css";

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

const OrderIndex = props => {
  return (
    <div className="order_list">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation />
        </div>
        <div className="col-10">
          <AdminHeader />          
          <main>
          <div className="row p-4 m-0">
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-blue-l c-white">
                    <div className="fs-30">12</div>
                    <div><b>Đơn hàng</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>Tình trạng: đang sử lí</span></div>
                  </div>
                  <div className="right bg-blue-d h-full c-white">
                    <div><i className="fas fa-eye"></i></div>
                  </div>  
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-purple-l c-white">
                    <div className="fs-30">33</div>
                    <div><b>Đơn hàng</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>Tình trạng: đang giao</span></div>
                  </div>
                  <div className="right bg-purple-d h-full c-white">
                    <div><i className="fas fa-money-bill-alt"></i></div>
                  </div>  
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-red-l c-white">
                    <div className="fs-30">222</div>
                    <div><b>Đơn hàng</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>Tình trạng: đã giao</span></div>
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
                      <th>Ngày gửi</th>
                      <th>Ngày nhận</th>
                      <th>Tình trạng</th>
                      <th>Tổng cộng</th>
                      <th>Giảm giá</th>
                      <th>Phí ship</th>
                      <th>Thành tiền</th>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đã giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đang giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đã giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đang giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>                    
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đã giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đang giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đã giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đang giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đã giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đang giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đã giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>12/01/2020</td>
                      <td>30/01/2020</td>
                      <td>18.000.000</td>
                      <td>1.000.000</td>
                      <td>Đang giao</td>
                      <td>0</td>
                      <td>17.000.000</td>
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

export default OrderIndex;