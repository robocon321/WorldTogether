import { React } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { Line } from 'react-chartjs-2';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/dashboard.css";

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

const accessOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Access count chart'
    }
  }
};

const incomeOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Income total chart'
    }
  }
};

const searchOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Search count chart'
    }
  }
};

const DashboardIndex = props => {
  return (
    <div>
      <div className="dashboard d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="dashboard" />
        </div>
        <div className="col-10">
          <AdminHeader title="Dashboard" />
          <main>
            <div className="row p-4 m-0">
              <div className="col-4 d-flex justify-content-center">
                <div className="statistic-item">
                  <div className="left bg-blue-l c-white">
                    <div className="fs-30">512</div>
                    <div><b>Tổng lược truy cập</b></div>
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
                    <div className="fs-30">3822</div>
                    <div><b>Tổng lược tìm kiếm</b></div>
                    <div><span><i className="fas fa-sort-up"></i></span> <span>22% so tháng trước</span></div>
                  </div>
                  <div className="right bg-red-d h-full c-white">
                    <div><i className="fas fa-search"></i></div>
                  </div>  
                </div>
              </div>
            </div>
            <div className="p-4 m-0">
              <Line data={data} options={accessOptions} />
            </div>
            <div className="p-4 m-0">
              <Line data={data} options={incomeOptions} />
            </div>
            <div className="p-4 m-0">
              <Line data={data} options={searchOptions} />
            </div>
            <div className="row p-4">
              <div className="col-6">
                <div className="tags">
                  <h2><b>Tags phổ biến</b></h2>
                  <table>
                    <tbody>
                    <tr>
                      <th>Name: </th>
                      <th>Lượt truy cập</th>
                      <th>Lượt dùng</th>  
                    </tr>
                    <tr>
                      <td>Tag 1</td>
                      <td>12</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>Tag 2</td>
                      <td>12</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>Tag 3</td>
                      <td>12</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>Tag 1</td>
                      <td>12</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>Tag 2</td>
                      <td>12</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>Tag 3</td>
                      <td>12</td>
                      <td>33</td>
                    </tr>

                    </tbody>
                  </table>
                </div>    
              </div>
              <div className="col-6">
                <div className="searchs">
                  <h2><b>Tìm kiếm phổ biến</b></h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Name: </th>
                        <th>Lượt tìm kiếm</th>
                      </tr>
                      <tr>
                        <td>Word 1</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>Word 2</td>
                        <td>33</td>
                      </tr>
                      <tr>
                        <td>Word 3</td>
                        <td>33</td>
                      </tr>
                      <tr>
                        <td>Word 1</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>Word 2</td>
                        <td>33</td>
                      </tr>
                      <tr>
                        <td>Word 3</td>
                        <td>33</td>
                      </tr>
                    </tbody>
                  </table>
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

export default DashboardIndex;