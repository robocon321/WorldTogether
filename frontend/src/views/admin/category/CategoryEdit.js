/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { CategoryEditContext } from "../../../contexts/admin/category/CategoryEditContext";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/edit_category.css";
import closeIcon from "../../../assets/images/close.png";

const CategoryEdit = props => {
  const {     
    updateCategory, 
    reset,
    category,
    addAttribute,
    removeAttribte,
    changeAttribute,
    changeField,
    trees,
    attributes,
    result 
  } = useContext(CategoryEditContext);

  return (
    <div className="edit_category">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="category" />
        </div>
        <div className="col-10">
          <AdminHeader title="Category" />
          <main>
            <div className="p-4 m-0">
              <div className="main-title mb-4">Sửa danh mục</div>
                <form onReset={reset} onSubmit={updateCategory}>
                  <div className="wrap-form">
                  {!result.success &&                     
                    <div className="alert alert-danger">
                      {result.message}
                    </div>
                  }
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên danh mục</td>
                          <td colSpan="3"><input type="text" name="title" onChange={changeField} value={category.title ? category.title : ''}/></td>
                        </tr>
                        <tr>
                          <td>Danh mục cha</td>
                          <td>
                            <select name="parent_id" onChange={changeField} value={ category.parent_id ? category.parent_id  : ''}>
                              <option>None</option>
                              {trees.map((item, index) => (
                                <option key={index} value={item._id}>{item.title}</option>
                              ))}
                            </select>
                          </td>
                          <td>Vị trí</td>
                          <td><input type="text" name="display_order"  onChange={changeField} value={category.display_order ? category.display_order : ''} /></td>
                        </tr>
                        <tr>
                          <td>Từ khóa SEO</td>
                          <td colSpan="3"><input type="text" name="meta_keyword" required onChange={changeField} value={category.meta_keyword ? category.meta_keyword : ''} /></td>
                        </tr>
                        <tr>
                          <td>Tiêu đề SEO</td>
                          <td colSpan="3"><input type="text" name="meta_title" required onChange={changeField} value={category.meta_title ? category.meta_title : ''} /></td>
                        </tr>
                        <tr>
                          <td>Mô tả SEO</td>
                          <td colSpan="3"><textarea name="meta_descrp" required onChange={changeField} value={category.meta_descrp ? category.meta_descrp : ''} ></textarea></td>
                        </tr>
                        <tr>
                          <td>Slug</td>
                          <td colSpan="3"><input type="text" name="slug" required onChange={changeField} value={category.slug ? category.slug : ''} /></td>
                        </tr>
                        <tr>
                          <td>Icon</td>
                          <td><input type="file" name="icon" accept="image/png, image/jpeg" onChange={changeField} /></td>
                        </tr>
                        {
                          attributes.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>Đặc trưng</td>
                                <td><input type="text" name="title" value={item.title} required onChange={(e) => changeAttribute(e, index)} /></td>
                                <td>Kiểu</td>
                                <td className="d-flex align-items-center">
                                  <select className="me-2" name="datatype" value={item.datatype} required onChange={(e) => changeAttribute(e, index)}>
                                    <option value={0}>Số</option>
                                    <option value={1}>Chuỗi</option>
                                    <option value={2}>Thời gian</option>
                                  </select>
                                  <div className="s-2" onClick={() => removeAttribte(index)}><img className="s-2" src={closeIcon} alt="Not found"/></div>
                                </td>
                            </tr>
                            )
                          })
                        }
                        <tr>
                          <td></td>
                          <td colSpan="3"><button onClick={addAttribute} className="bg-yellow c-white"><i className="fas fa-plus"></i> Thêm đặc trưng</button></td>
                        </tr>
                        <tr>
                          <td colSpan="3"></td>
                          <td>
                            <div className="d-flex justify-content-between">
                              <button type="submit" className="bg-green action">Đồng ý</button>
                              <button type="reset" className="bg-red-d action">Hủy</button>  
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

export default CategoryEdit;