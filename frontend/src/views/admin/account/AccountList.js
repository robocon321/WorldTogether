/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../../../contexts/AccountContext";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/account_list.css";

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
      text: 'Top account shop'
    }
  }
};

const AccountList = props => {
  const { accounts, deleteAccount, loadAccount, searchAccount, remain } = useContext(AccountContext);

  const onEditAccount = (id) => {
    props.history.push(`/admin/account/edit/${id}`);
  }

  const onDeleteAccount = (id) => {
    deleteAccount(id);
  }

  const onSearch = (e) => {
    e.preventDefault();
    searchAccount(e.target.value);
  }
  
  return (
    <div>
      <div className="account_list d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="account"/>
        </div>
        <div className="col-10">
          <AdminHeader title="Account"/>          
          <main>
          <div className="row p-4 m-0">
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-blue-l c-white">
                    <div className="fs-30">12</div>
                    <div><b>Root</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>22% so tháng trước</span></div>
                  </div>
                  <div className="right bg-blue-d h-full c-white">
                    <div><i className="fas fa-eye"></i></div>
                  </div>  
                </div>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-purple-l c-white">
                    <div className="fs-30">35</div>
                    <div><b>Admin</b></div>
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
                    <div className="fs-30">222</div>
                    <div><b>Customer</b></div>
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
                  <input className="search-box sub-search" name="sub-search" type="text" onChange={onSearch}/>              
                  <div className="icon"><i className="fas fa-search"></i></div>
                </div>
                <Link to="/admin/account/new"><button className="btn-add bg-blue-l c-white rd-full">+</button></Link>       
              </div>
              <div className="categories">
                <table className=" my-4">
                  <tbody>
                    <tr>
                      <th>STT</th>
                      <th>Username</th>
                      <th>FullName</th>
                      <th>Phone</th>
                      <th>Permission</th>
                      <th>Action</th>
                    </tr>
                    {
                      accounts.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td><a href="#">{index}</a></td>
                            <td>{item.uname}</td>
                            <td>{item.full_name}</td>
                            <td>{item.phone}</td>
                            <td>Root</td>
                            <td><button className="btn btn-success me-1" onClick={() => onEditAccount(item._id)}><i className="fas fa-pen"></i></button><button className="btn btn-danger ms-1" onClick={() => onDeleteAccount(item._id)}><i className="fas fa-trash-alt"></i></button></td>
                          </tr>
                        )
                      })
                    }
                 </tbody>
                </table>
                <div className="d-flex justify-content-center"><button className="c-white bg-blue px-5 py-2 bd-width-0" onClick={() => loadAccount()}>More ({remain})</button></div>
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

export default AccountList;