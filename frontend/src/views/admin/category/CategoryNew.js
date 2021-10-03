/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext, useEffect, useRef, useState } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import "../../../assets/vendor/bootstrap-5.1.0-dist/css/bootstrap.min.css";
import "../../../assets/vendor/fontawesome-free-5.15.4-web/css/all.min.css";
import "../../../assets/css/styles.css";
import "../../../assets/css/admin/new_category.css";
import { DATATYPE } from "../../../utils/Constants";
import closeIcon from "../../../assets/images/close.png";
import { CategoryContext } from "../../../contexts/CategoryContext";
import { uploadFirebase } from "../../../utils/fn";
import { getDownloadURL } from "firebase/storage";

const initCategory = {
  title: '',
  parent_id: null,
  display_order: null,
  meta_keyword: '',
  meta_descrp: '',
  meta_title: '',
  slug: '',
  icon: '',
  attributes: [{
    title: '',
    datatype: DATATYPE.NUMBER
  }]
};
const CategoryNew = props => {
  const { trees, createCategory} = useContext(CategoryContext);
  const alert = useRef();
  const attributeRef = useRef();
  const [category, setCategory] = useState({...initCategory});

  useEffect(() => {
    alert.current.style.display = "none";
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
          setCategory({
            ...category,
            icon: downloadURL
          })
        });
      }); 
    } else {
      setCategory({
        ...category,
        [e.target.name]: e.target.value
      });
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let result = await createCategory(category);
    if(result.success) {
      alert.current.style.display = "none";
      props.history.goBack();
    } else {
      alert.current.style.display = "block";
      alert.current.textContent = result.message;
    }
  }

  const onNewFieldAttribute = (e) => {
    e.preventDefault();
    setCategory({
      ...category,
      attributes: [...category.attributes, {
        title: '',
        datatype: DATATYPE.NUMBER
      }]
    })
  }

  const onChangeFieldAtribute = (e, index) => {
    const {attributes} = category;
    attributes[index] = {
      ...attributes[index],
      [e.target.name] : e.target.value
    };
    setCategory({
      ...category,
      attributes
    });
  }

  const onRemoveFieldAttribute = (index) => {
    const {attributes} = category;
    attributes.splice(index, 1);
    setCategory({
      ...category,
      attributes: [...attributes]
    });
  }

  const onReset = () => {
    setCategory({
      ...category,
      attributes: [{
        title: '',
        datatype: DATATYPE.NUMBER
      }]
    });
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
              <div className="main-title mb-4">Thêm danh mục</div>
                <form onSubmit={onSubmit} onReset={onReset}>
                  <div className="wrap-form">
                  <div ref={alert} className="alert alert-danger">
                    Nothing
                  </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên danh mục</td>
                          <td colSpan="3"><input type="text" name="title" onChange={onChangeField} /></td>
                        </tr>
                        <tr>
                          <td>Danh mục cha</td>
                          <td>
                            <select name="parent_id" onChange={onChangeField} >
                              <option>None</option>
                              {trees.map((item, index) => (
                                <option key={index} value={item._id}>{item.title}</option>
                              ))}
                            </select>
                          </td>
                          <td>Vị trí</td>
                          <td><input type="text" name="display_order"  onChange={onChangeField} /></td>
                        </tr>
                        <tr>
                          <td>Từ khóa SEO</td>
                          <td colSpan="3"><input type="text" name="meta_keyword" required onChange={onChangeField} /></td>
                        </tr>
                        <tr>
                          <td>Tiêu đề SEO</td>
                          <td colSpan="3"><input type="text" name="meta_title" required onChange={onChangeField} /></td>
                        </tr>
                        <tr>
                          <td>Mô tả SEO</td>
                          <td colSpan="3"><textarea name="meta_descrp" required onChange={onChangeField} ></textarea></td>
                        </tr>
                        <tr>
                          <td>Slug</td>
                          <td colSpan="3"><input type="text" name="slug" required onChange={onChangeField} /></td>
                        </tr>
                        <tr>
                          <td>Icon</td>
                          <td><input type="file" name="icon" accept="image/png, image/jpeg" onChange={onChangeField} /></td>
                        </tr>
                        {
                          category.attributes.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>Đặc trưng</td>
                                <td><input type="text" name="title" value={item.title} required onChange={(e) => onChangeFieldAtribute(e, index)} /></td>
                                <td>Kiểu</td>
                                <td className="d-flex align-items-center">
                                  <select className="me-2" name="datatype" value={item.datatype} required onChange={(e) => onChangeFieldAtribute(e, index)}>
                                    <option value={0}>Số</option>
                                    <option value={1}>Chuỗi</option>
                                    <option value={2}>Thời gian</option>
                                  </select>
                                  <div className="s-2" onClick={() => onRemoveFieldAttribute(index)}><img className="s-2" src={closeIcon} alt="Not found"/></div>
                                </td>
                            </tr>
                            )
                          })
                        }
                        <tr>
                          <td></td>
                          <td colSpan="3"><button ref={attributeRef} onClick={onNewFieldAttribute} className="bg-yellow c-white"><i className="fas fa-plus"></i> Thêm đặc trưng</button></td>
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