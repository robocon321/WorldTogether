import { React } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/categories.css";

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
      text: 'Top income product'
    }
  }
};

const CategoryList = props => {
  return (
    <div>
      <div className="categories d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation />
        </div>
        <div className="col-10">
          <AdminHeader />
          <main>
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
                <Link to="/admin/category/new"><button className="btn-add bg-blue-l c-white rd-full">+</button></Link>       
              </div>
              <div className="categories">
                <table className=" my-4">
                  <tbody>
                    <tr>
                      <th>STT</th>
                      <th>Title</th>
                      <th>Parent Title</th>
                      <th>Display Order</th>
                      <th>View count</th>
                      <th>Product count</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                  </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                  </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                  </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
                    </tr>
                    <tr>
                      <td><a href="#">1</a></td>
                      <td>Điện thoại</td>
                      <td><a href="#">Đồ điện tử</a></td>
                      <td>1</td>
                      <td>15</td>
                      <td>18</td>
                      <td><Link to="/admin/category/edit"><button className="btn btn-success me-1"><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1"><i className="fas fa-trash-alt"></i></button></Link></td>
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

export default CategoryList;