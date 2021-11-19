/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { CategoryNewContext } from "../../../contexts/admin/category/CategoryNewContext";

const CategoryNew = props => {
  const { 
    createCategory, 
    reset,
    addAttribute,
    removeAttribte,
    changeAttribute,
    changeField,
    trees,
    attributes,
    result
  } = useContext(CategoryNewContext);

  return (
    <div className="form-style">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="category" history={props.history} />
        </div>
        <div className="col-10">
          <AdminHeader title="Category" />
          <main>
            <div className="p-4 m-0">
              <div className="main-title mb-4">Thêm danh mục</div>
                <form onSubmit={createCategory} onReset={reset}>
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
                          <td colSpan="3"><input type="text" name="title" onChange={changeField} /></td>
                        </tr>
                        <tr>
                          <td>Danh mục cha</td>
                          <td>
                            <select name="parent_id" onChange={changeField} >
                              <option>None</option>
                              {trees.map((item, index) => (
                                <option key={index} value={item._id}>{item.title}</option>
                              ))}
                            </select>
                          </td>
                          <td>Vị trí</td>
                          <td><input type="text" name="display_order"  onChange={changeField} /></td>
                        </tr>
                        <tr>
                          <td>Từ khóa SEO</td>
                          <td colSpan="3"><input type="text" name="meta_keyword" required onChange={changeField} /></td>
                        </tr>
                        <tr>
                          <td>Tiêu đề SEO</td>
                          <td colSpan="3"><input type="text" name="meta_title" required onChange={changeField} /></td>
                        </tr>
                        <tr>
                          <td>Mô tả SEO</td>
                          <td colSpan="3"><textarea name="meta_descrp" required onChange={changeField} ></textarea></td>
                        </tr>
                        <tr>
                          <td>Slug</td>
                          <td colSpan="3"><input type="text" name="slug" required onChange={changeField} /></td>
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
                                  <div className="s-2" onClick={() => removeAttribte(index)}><img className="s-2" src="assets/images/close.png" alt="Not found"/></div>
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

export default CategoryNew;