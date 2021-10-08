/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useRef, useEffect, useState, useContext } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/new_category.css";
import { ShopContext } from "../../../contexts/ShopContext";
import { uploadFirebase } from "../../../utils/fn";
import { getDownloadURL } from "@firebase/storage";

const initShop = {
  _id: '',
  title: '',
  descrp: '',
  avatar: '',
  meta_keyword: '',
  meta_descrp: '',
  meta_title: '',
  slug: '',
  view_count: 0
}

const ShopEdit = props => {
  const alert = useRef();
  const [shop, setShop] = useState({...initShop});
  const { updateShop, getShopById } = useContext(ShopContext) 

  useEffect(async () => {
    alert.current.style.display = "none";

    const result = await getShopById(props.match.params.id);
    if(result) setShop(result);
  }, []);

  const onChangeField = async (e) => {
    if(e.target.type === 'file') {
      const uploadTask = uploadFirebase(e.target.files[0]);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Nothing
      }, (error) => {
        console.log("Error upload", error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setShop({
            ...shop,
            avatar: downloadURL
          })
        });
      }); 
    } else {
      setShop({
        ...shop,
        [e.target.name]: e.target.value
      });
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let result = await updateShop(shop);
    if(result.success) {
      alert.current.style.display = "none";
      props.history.goBack();
    } else {
      alert.current.style.display = "block";
      alert.current.textContent = result.message;
    }
  }

  const onReset = (e) => {
    setShop({...initShop});    
  }

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
              <div className="main-title mb-4">Thông tin shop</div>
                <form onSubmit={onSubmit} onReset={onReset}>
                  <div className="wrap-form">
                  <div ref={alert} className="alert alert-danger">
                    Nothing
                  </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên shop</td>
                          <td colSpan="3"><input type="text" name="title" onChange={onChangeField} required value={shop.title} /></td>
                        </tr>
                        <tr>
                          <td>Mô tả</td>
                          <td colSpan="3"><input type="text" name="descrp" onChange={onChangeField} required value={shop.descrp} /></td>
                        </tr>
                        <tr>
                          <td>Từ khóa SEO</td>
                          <td colSpan="3"><input type="text" name="meta_keyword" required onChange={onChangeField} value={shop.meta_keyword} /></td>
                        </tr>
                        <tr>
                          <td>Tiêu đề SEO</td>
                          <td colSpan="3"><input type="text" name="meta_title" required onChange={onChangeField} value={shop.meta_title} /></td>
                        </tr>
                        <tr>
                          <td>Mô tả SEO</td>
                          <td colSpan="3"><textarea name="meta_descrp" required onChange={onChangeField} value={shop.meta_descrp} ></textarea></td>
                        </tr>
                        <tr>
                          <td>Slug</td>
                          <td colSpan="3"><input type="text" name="slug" required onChange={onChangeField} value={shop.slug} /></td>
                        </tr>
                        <tr>
                          <td>Avatar</td>
                          <td><input type="file" name="avatar" accept="image/png, image/jpeg" onChange={onChangeField} /></td>
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

export default ShopEdit;