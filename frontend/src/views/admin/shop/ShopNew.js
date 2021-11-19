/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { ShopNewContext } from "../../../contexts/admin/shop/ShopNewContext";

const ShopNew = props => {
  const { 
    createShop, 
    changeField, 
    reset, 
    result 
  } = useContext(ShopNewContext) 

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
              <div className="main-title mb-4">Thông tin shop</div>
                <form onSubmit={createShop} onReset={reset}>
                  <div className="wrap-form">
                  {!result.success &&                     
                      <div className="alert alert-danger">
                        {result.message}
                      </div>
                    }
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên shop</td>
                          <td colSpan="3"><input type="text" name="title" onChange={changeField} required /></td>
                        </tr>
                        <tr>
                          <td>Mô tả</td>
                          <td colSpan="3"><input type="text" name="descrp" onChange={changeField} required /></td>
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
                          <td>Avatar</td>
                          <td><input type="file" name="avatar" accept="image/png, image/jpeg" onChange={changeField} required /></td>
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

export default ShopNew;