/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/new_category.css";

const CategoryNew = props => {
  return (
    <div className="new_category">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="category" />
        </div>
        <div className="col-10">
          <AdminHeader title="Category" />
          <main>
            <div className="p-4 m-0">
              <div className="main-title mb-4">Thêm danh mục</div>
                <form>
                  <div className="wrap-form">
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên danh mục</td>
                          <td colSpan="3"><input type="text" name="name"/></td>
                        </tr>
                        <tr>
                          <td>Danh mục cha</td>
                          <td>
                            <select name="parent_id">
                              <option value="null">None</option>
                              <option value="0">Parent 0</option>
                              <option value="1">Parent 1</option>
                              <option value="2">Parent 2</option>
                            </select>
                          </td>
                          <td>Vị trí</td>
                          <td><input type="text" name="display-order" /></td>
                        </tr>
                        <tr>
                          <td>Mô tả</td>
                          <td colSpan="3"><textarea name="discrpt"></textarea></td>
                        </tr>
                        <tr>
                          <td>Icon</td>
                          <td><button type="file" name="icon" className="bg-blue-l">Choose</button></td>
                        </tr>
                        <tr>
                            <td>Đặc trưng</td>
                            <td><input type="text" name="title" /></td>
                            <td>Kiểu</td>
                            <td>
                              <select name="datetype">
                                <option value="0">Số</option>
                                <option value="1">Chuỗi</option>
                                <option value="2">Thời gian</option>
                              </select>
                            </td>
                          </tr>
                        <tr>
                          <td></td>
                          <td colSpan="3"><button className="bg-yellow c-white"><i className="fas fa-plus"></i> Thêm đặc trưng</button></td>
                        </tr>
                        <tr>
                          <td colSpan="3"></td>
                          <td>
                            <div className="d-flex justify-content-between">
                              <button className="bg-green action">Đồng ý</button>
                              <button className="bg-red-d action">Hủy</button>  
                            </div>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </form>
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

export default CategoryNew;