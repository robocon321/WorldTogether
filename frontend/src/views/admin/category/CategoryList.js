/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import { CategoryListContext } from "../../../contexts/admin/category/CategoryListContext";

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
  const { 
    categories, 
    deleteCategory, 
    searchCategory, 
    switchToEditPage,
    getTitleParentCategory,
    search
  } = useContext(CategoryListContext);

  return (
    <div>
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="category" history={props.history}/>
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
                  <input className="search-box sub-search" name="sub-search" type="text" onChange={searchCategory} />              
                  <div className="icon"><i className="fas fa-search"></i></div>
                </div>
                <Link to="/admin/category/new"><button className="btn-add bg-blue-l c-white rd-full">+</button></Link>       
              </div>
              <div className="categories">
                <table className="list my-4">
                  <tbody>
                    <tr>
                      <th style={{"--w": "10%"}}>STT</th>
                      <th style={{"--w": "20%"}}>Title</th>
                      <th style={{"--w": "20%"}}>Parent Title</th>
                      <th style={{"--w": "10%"}}>Display Order</th>
                      <th style={{"--w": "10%"}}>View count</th>
                      <th style={{"--w": "10%"}}>Product count</th>
                      <th style={{"--w": "20%"}}>Action</th>
                    </tr>
                    {
                      categories.filter(item => item.title.indexOf(search) >= 0).map((item, index) => {
                        return (
                          <tr key={index}>
                            <td style={{"--w": "10%"}}><a href="#">{index}</a></td>
                            <td style={{"--w": "20%"}}>{item.title}</td>
                            <td style={{"--w": "20%"}}><a href="#">{getTitleParentCategory(item.parent_id)}</a></td>
                            <td style={{"--w": "10%"}}>{item.display_order}</td>
                            <td style={{"--w": "10%"}}>{item.view_count ? item.view_count : 0}</td>
                            <td style={{"--w": "10%"}}>{0}</td>
                            <td style={{"--w": "20%"}}><button className="btn btn-success me-1" onClick={(e) => switchToEditPage(e, item._id)}><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1" onClick={(e) => deleteCategory(e, item._id)}><i className="fas fa-trash-alt"></i></button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
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