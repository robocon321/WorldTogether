/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/new_product.css";

const ProductNew = props => {
  return (
    <div className="new_product">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="product" />
        </div>
        <div className="col-10">
          <AdminHeader title="Product" />
          <main className="edit_category">
            <div className="p-4 m-0">
              <div className="main-title mb-4">Thêm sản phẩm</div>
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
                            <td>Thuộc tính chung</td>
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
                          <td colSpan="4"><hr /></td>
                        </tr>
                        <tr>
                          <td colSpan="4">Nhóm sản phẩm 1</td>
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
                          <td>Giá thực tế</td>
                          <td colSpan="3"><input type="number" name="opt_real_price"/></td>
                        </tr>
                        <tr>
                          <td>Giá bán</td>
                          <td colSpan="3"><input type="number" name="opt_sale_price"/></td>
                        </tr>
                        <tr>
                          <td>Số lượng</td>
                          <td colSpan="3"><input type="text" name="quantity"/></td>
                        </tr>
                        <tr>
                          <td>Avatar</td>
                          <td><input type="file" name="avatar" accept="image/png, image/jpeg" /></td>
                        </tr>
                        <tr>
                          <td>Images</td>
                          <td><input type="file" name="imgs" accept="image/png, image/jpeg" multiple /></td>
                        </tr>
                        <tr>
                          <td colSpan="4"><button className="bg-blue c-white"><i className="fas fa-plus"></i> Thêm loại sản phẩm</button></td>
                        </tr>
                        <tr>
                          <td colSpan="4"><button className="bg-yellow c-white"><i className="fas fa-plus"></i> Thêm nhóm sản phẩm</button></td>
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

export default ProductNew;