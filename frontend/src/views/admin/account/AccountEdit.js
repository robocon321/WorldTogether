/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useContext, useRef, useEffect } from "react";
import { AccountContext } from "../../../contexts/AccountContext";
import { Link } from "react-router-dom";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/new_account.css";

const AccountEdit = props => {
  const {accounts, updateAccount, getAccountById} = useContext(AccountContext);
  const alert = useRef();
  const [account, setAccount] = useState({
    uname: '',
    pwd: '',
    re_pwd: '',
    full_name: '',
    email: '',
    phone: '',
    sex: true,
    birthday: '',
  });

  useEffect(() => {
    alert.current.style.display = "none";

    const result = getAccountById(props.match.params.id);
    if(!result) return;
    setAccount(result);
  }, [accounts]);

  const onChangeField = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    })
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let result = await updateAccount(account);
    if(result.success) {
      alert.current.style.display = "none";
      props.history.goBack();
    } else {
      alert.current.style.display = "block";
      alert.current.textContent = result.message;
    }
  }

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
                <form onSubmit={onSubmit}>
                  <div className="wrap-form">
                  <div ref={alert} className="alert alert-danger">
                    Nothing
                  </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên tài khoản</td>
                          <td colSpan="3"><input type="text" onChange={onChangeField} required disabled name="uname" value={account.uname} /></td>
                        </tr>
                        <tr>
                          <td>Mật khẩu</td>
                          <td colSpan="3"><input type="password" name="pwd" onChange={onChangeField} required /></td>
                        </tr>
                        <tr>
                          <td>Xác nhận mật khẩu</td>
                          <td colSpan="3"><input type="password" name="re_pwd" onChange={onChangeField} required /></td>
                        </tr>
                        <tr>
                          <td>Họ tên</td>
                          <td colSpan="3"><input type="text" name="full_name" onChange={onChangeField} required value={account.full_name}/></td>
                        </tr>
                        <tr>
                          <td>SĐT</td>
                          <td colSpan="3"><input type="text" name="phone" onChange={onChangeField} required value={account.phone}/></td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td colSpan="3"><input type="text" name="email" onChange={onChangeField} required value={account.email}/></td>
                        </tr>
                        <tr>
                          <td>Ngày sinh</td>
                          <td><input type="date" name="birthday" onChange={onChangeField} required value={account.birthday && account.birthday.substring(0,10)}/></td>
                          <td>Giới tính</td>
                          <td><div className="d-flex align-items-center"><label className="me-2" htmlFor="male">Nam</label><input className="me-4" type="radio" defaultChecked={account.sex} id="male" name="sex" value="true" onChange={onChangeField}/><label className="me-2" htmlFor="female">Nữ</label><input type="radio" id="female" name="sex" value="false" onChange={onChangeField} defaultChecked={!account.sex} /></div></td>
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