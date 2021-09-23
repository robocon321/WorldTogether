/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/edit_product.css";

const ProductEdit = props => {
  return (
    <div className="edit_product">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation />
        </div>
        <div className="col-10">
          <AdminHeader />
          <main className="edit_category">
            <div className="p-4 m-0">
              <div className="main-title mb-4">Sửa thông tin sản phẩm</div>
                <form>
                  <div className="wrap-form">
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên sản phẩm</td>
                          <td colSpan="3"><input type="text" name="name"/></td>
                        </tr>
                        <tr>
                          <td>Mô tả chính</td>
                          <td colSpan="3"><input type="text" name="descrp"/></td>
                        </tr>
                        <tr>
                          <td>Số lượng</td>
                          <td colSpan="3"><input type="text" name="quantity"/></td>
                        </tr>
                        <tr>
                          <td>Thuộc danh mục</td>
                          <td>
                            <select name="category_id">
                              <option value="0">Parent 0</option>
                              <option value="1">Parent 1</option>
                              <option value="2">Parent 2</option>
                            </select>
                          </td>
                          <td>Tên Shop</td>
                          <td>
                            <select name="shop_id">
                              <option value="0">Parent 0</option>
                              <option value="1">Parent 1</option>
                              <option value="2">Parent 2</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Tophot</td>
                          <td><input type="date" name="tophot"/></td>
                          <td><label htmlFor="include_vat">Có thuế VAT</label></td>
                          <td><div className="d-flex align-items-center"><input type="checkbox" id="include_vat" name="include_vat" value="true"/></div></td>
                        </tr>
                        <tr>
                         <td>Thời gian bảo hành</td>
                          <td>
                            <select name="warrently">
                              <option value="0">Parent 0</option>
                              <option value="1">Parent 1</option>
                              <option value="2">Parent 2</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Lượt xem</td>
                          <td><input type="text" name="display-order" value="32" disabled /></td>
                        </tr>
                        <tr>
                          <td>Chi tiết sản phẩm</td>
                          <td colSpan="3">
                          <CKEditor
                            editor={ ClassicEditor }
                            onReady={ editor => {
                              // todo 
                            } }
                            onBlur={ ( event, editor ) => {
                              // todo 
                            } }
                            onFocus={ ( event, editor ) => {
                              // todo 
                            } } />
                          </td>
                        </tr>
                        <tr>
                          <td>Nhập Tags:</td>
                          <td colSpan="3"><input type="text" name="quantity" placeholder="Cách nhau bằng dấu phẩy" /></td>
                        </tr>
                        <tr>
                            <td>Thuộc tính</td>
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
                          <td>Giá trị</td>
                          <td colSpan="3"><input type="text" name="value"/></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td colSpan="3"><button className="bg-yellow c-white"><i className="fas fa-plus"></i> Thêm đặc trưng</button></td>
                        </tr>
                        <tr>
                          <td colSpan="4"><button className="bg-blue c-white"><i className="fas fa-plus"></i> Thêm loại sản phẩm</button></td>
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

export default ProductEdit;