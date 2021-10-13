/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/new_account.css";
import { AccountEditContext } from "../../../contexts/admin/account/AccountEditContext";

const AccountEdit = props => {
  const {newAccount, result, updateAccount, reset, changeField} = useContext(AccountEditContext);

  return (
    <div className="new_account">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="account" />
        </div>
        <div className="col-10">
          <AdminHeader title="Account" />
          <main className="edit_category">
            <div className="p-4 m-0">
              <Link to="/admin/account" className="link-primary"><i className="fas fa-long-arrow-alt-left"></i> Trở về</Link>
              <div className="main-title mb-4">Sửa tài khoản</div>
                <form onSubmit={updateAccount} onReset={reset}>
                  <div className="wrap-form">
                  {!result.success &&                     
                    <div className="alert alert-danger">
                      {result.message}
                    </div>}
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên tài khoản</td>
                          <td colSpan="3"><input type="text" onChange={changeField} required disabled name="uname" value={newAccount && newAccount.uname} /></td>
                        </tr>
                        <tr>
                          <td>Mật khẩu</td>
                          <td colSpan="3"><input type="password" name="pwd" onChange={changeField} required /></td>
                        </tr>
                        <tr>
                          <td>Xác nhận mật khẩu</td>
                          <td colSpan="3"><input type="password" name="re_pwd" onChange={changeField} required /></td>
                        </tr>
                        <tr>
                          <td>Họ tên</td>
                          <td colSpan="3"><input type="text" name="full_name" onChange={changeField} required value={newAccount ? newAccount.full_name : ''}/></td>
                        </tr>
                        <tr>
                          <td>SĐT</td>
                          <td colSpan="3"><input type="text" name="phone" onChange={changeField} required value={newAccount && newAccount.phone}/></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td colSpan="3"><input type="text" name="email" onChange={changeField} required value={newAccount && newAccount.email}/></td>
                        </tr>
                        <tr>
                          <td>Ngày sinh</td>
                          <td><input type="date" name="birthday" onChange={changeField} required value={newAccount && newAccount.birthday && newAccount.birthday.substring(0,10)}/></td>
                          <td>Giới tính</td>
                          <td><div className="d-flex align-items-center"><label className="me-2" htmlFor="male">Nam</label><input className="me-4" type="radio" defaultChecked={newAccount && newAccount.sex} id="male" name="sex" value="true" onChange={changeField}/><label className="me-2" htmlFor="female">Nữ</label><input type="radio" id="female" name="sex" value="false" onChange={changeField} defaultChecked={newAccount && !newAccount.sex} /></div></td>
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

export default AccountEdit;