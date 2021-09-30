/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/categories.css";
import {CategoryContext} from "../../../contexts/CategoryContext";

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
  const { categories, deleteCategory, loadCategory, searchCategory, remain } = useContext(CategoryContext);

  const onEditCategory = (id) => {
    props.history.push(`/admin/category/edit/${id}`);
  }

  const onDeleteCategory = (id) => {
    deleteCategory(id);
  }

  const onSearch = (e) => {
    e.preventDefault();
    searchCategory(e.target.value);
  }

  return (
    <div>
      <div className="categories d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="category" />
        </div>
        <div className="col-10">
          <AdminHeader title="Category" />
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
                  <input className="search-box sub-search" name="sub-search" type="text" onChange={onSearch} />              
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
                    {
                      categories.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td><a href="#">{index}</a></td>
                            <td>{item.title}</td>
                            <td><a href="#">{item.parent_id ? item.parent_id.title : "None"}</a></td>
                            <td>{item.display_order}</td>
                            <td>{item.view_count ? item.view_count : 0}</td>
                            <td>{0}</td>
                            <td><button className="btn btn-success me-1" onClick={() => onEditCategory(item._id)}><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1" onClick={() => onDeleteCategory(item._id)}><i className="fas fa-trash-alt"></i></button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                <div className="d-flex justify-content-center"><button className="c-white bg-blue px-5 py-2 bd-width-0" onClick={() => loadCategory()}>More ({remain})</button></div>
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