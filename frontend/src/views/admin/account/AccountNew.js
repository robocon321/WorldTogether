/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/new_account.css";

const AccountNew = props => {
  return (
    <div className="new_account">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation />
        </div>
        <div className="col-10">
          <AdminHeader />
          <main className="edit_category">
            <div className="p-4 m-0">
              <div className="main-title mb-4">Thêm mới tài khoản</div>
                <form>
                  <div className="wrap-form">
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên tài khoản</td>
                          <td colSpan="3"><input type="text" name="uname"/></td>
                        </tr>
                        <tr>
                          <td>Mật khẩu</td>
                          <td colSpan="3"><input type="password" name="pwd"/></td>
                        </tr>
                        <tr>
                          <td>Xác nhận mật khẩu</td>
                          <td colSpan="3"><input type="password" name="re_pwd"/></td>
                        </tr>
                        <tr>
                          <td>Họ tên</td>
                          <td colSpan="3"><input type="text" name="full_name"/></td>
                        </tr>
                        <tr>
                          <td>SĐT</td>
                          <td colSpan="3"><input type="text" name="phone"/></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td colSpan="3"><input type="text" name="email"/></td>
                        </tr>
                        <tr>
                          <td>Ngày sinh</td>
                          <td><input type="date" name="birthday"/></td>
                          <td>Giới tính</td>
                          <td><div className="d-flex align-items-center"><label className="me-2" htmlFor="male">Nam</label><input className="me-4" type="radio" id="male" name="gender" value="true"/><label className="me-2" htmlFor="female">Nữ</label><input type="radio" id="female" name="gender" value="false"/></div></td>
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

export default AccountNew;