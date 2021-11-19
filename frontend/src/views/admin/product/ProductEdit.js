/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useContext } from "react";
import AdminNavigation from "../../../components/layout/AdminNavigation";
import AdminHeader from "../../../components/layout/AdminHeader";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DATATYPE } from "../../../utils/Constants";
import { ProductEditContext } from "../../../contexts/admin/product/ProductEditContext";

const ProductEdit = props => {
  const {
    updateProduct,
    getAttributeById,
    addGroupOption,
    addProductOption,
    removeGroupOption,
    removeProductOption,
    changeAttribute,
    changeField,
    changeFieldOptionTitle,
    changeFieldOptionValue,
    reset,
    product, 
    attributes, 
    shops,
    group,
    trees,
    result
  } = useContext(ProductEditContext);

  return (
    <div className="form-style">
      <div className="d-flex">
        <div className="col-2 bg-black">
          <AdminNavigation title="product" history={props.history} />
        </div>
        <div className="col-10">
          <AdminHeader title="Product" />
          <main className="edit_category">
            <div className="p-4 m-0">
              <div className="main-title mb-4">Sửa sản phẩm</div>
                <form onReset={reset} onSubmit={updateProduct}>
                  <div className="wrap-form">
                  {!result.success &&                     
                    <div className="alert alert-danger">
                      {result.message}
                    </div>
                  }
                    <table>
                      <tbody>
                        <tr>
                          <td>Tên sản phẩm</td>
                          <td colSpan="3"><input type="text" name="title" required onChange={changeField} value={product.title ? product.title : ''}/></td>
                        </tr>
                        <tr>
                          <td>Mô tả chính</td>
                          <td colSpan="3"><input type="text" name="descrp" required onChange={changeField} value={product.descrp} /></td>
                        </tr>
                        <tr>
                          <td>Thuộc danh mục</td>
                          <td>
                            <select name="category_id" onChange={changeField} value={product.category_id ? product.category_id : ''}>
                              {trees.map((item, index) => (
                                <option key={index} value={item._id}>{item.title}</option>
                              ))}
                            </select>
                          </td>
                          <td>Tên Shop</td>
                          <td>
                            <select name="shop_id" onChange={changeField} value={product.shop_id ? product.shop_id : ''}>
                            {shops.map((item, index) => (
                                <option key={index} value={item._id}>{item.title}</option>
                            ))}
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Tophot</td>
                          <td><input type="date" name="tophot" onChange={changeField} value={product.tophot ? product.tophot.substring(0, 10) : ''}/></td>
                          <td><label htmlFor="include_vat">Có thuế VAT</label></td>
                          <td><div style={{width: "1rem", height: "1rem"}} className="d-flex align-items-center"><input type="checkbox" id="include_vat" name="include_vat" onChange={changeField} value={product.include_vat ? product.include_vat : 'true'} /></div></td>
                        </tr>
                        <tr>
                         <td>Thời gian bảo hành</td>
                          <td>
                            <select name="warrently" onChange={changeField} value={product.warrently ? product.warrently : ''}>
                              <option value="1 tháng">1 tháng</option>
                              <option value="2 tháng">2 tháng</option>
                              <option value="3 tháng">3 tháng</option>
                              <option value="5 tháng">5 tháng</option>
                              <option value="6 tháng">6 tháng</option>
                              <option value="1 năm">1 năm</option>
                              <option value="1.5 năm">1.5 năm</option>
                              <option value="2 năm">2 năm</option>
                              <option value="3 năm">3 năm</option>
                              <option value="Trọn đời">Trọn đời</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Chi tiết sản phẩm</td>
                          <td colSpan="3">
                          <CKEditor
                            data={product.detail}
                            editor={ ClassicEditor }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                const e = {
                                  target: {
                                    name: 'detail',
                                    value: data
                                  }
                                }
                                changeField(e);
                            } }                            
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Từ khóa SEO</td>
                          <td colSpan="3"><input type="text" name="meta_keyword" required onChange={changeField} value={product.meta_keyword ? product.meta_keyword : ''} /></td>
                        </tr>
                        <tr>
                          <td>Tiêu đề SEO</td>
                          <td colSpan="3"><input type="text" name="meta_title" required onChange={changeField} value={product.meta_title ? product.meta_title : ''} /></td>
                        </tr>
                        <tr>
                          <td>Mô tả SEO</td>
                          <td colSpan="3"><textarea name="meta_descrp" required onChange={changeField} value={product.meta_descrp ? product.meta_descrp : ''} ></textarea></td>
                        </tr>
                        <tr>
                          <td>Slug</td>
                          <td colSpan="3"><input type="text" name="slug" required onChange={changeField}  value={product.slug ? product.slug : ''}/></td>
                        </tr>
                        <tr>
                          <td>Nhập Tags:</td>
                          <td colSpan="3"><input type="text" name="tags" placeholder="Cách nhau bằng dấu phẩy" onChange={changeField} value={product.tags ? product.tags : ''} /></td>
                        </tr>
                        {
                          attributes.map((item, index) => (
                            <tr key={index}>
                              <td>{item.title}</td>
                              <td><input 
                                type={item.datatype === DATATYPE.NUMBER ? "number" : item.datatype === DATATYPE.TEXT ? "text" : "date"} 
                                name={item.datatype === DATATYPE.NUMBER ? "number_value" : item.datatype === DATATYPE.TEXT ? "text_value" : "date_value"} 
                                value={item.datatype === DATATYPE.NUMBER ? getAttributeById(item._id).number_value : item.datatype === DATATYPE.TEXT ? getAttributeById(item._id).text_value : getAttributeById(item._id).date_value}
                                required 
                                onChange={(e) => changeAttribute(e, item._id)}
                                />
                              </td>
                            </tr>
                          ))
                        }
                        {
                          group.map((itemGroup, indexGroup) =>  
                          <tr key={indexGroup}>
                            <td colSpan="4">
                            <table>
                            <tbody>
                              <tr>
                                <td colSpan="4">
                                {
                                  itemGroup.map((itemProduct, indexProduct) => (
                                      <table key={indexProduct}>
                                        <tbody>
                                          <tr>
                                            <td colSpan="4"><hr /></td>
                                          </tr>
                                          <tr>
                                            <td colSpan="4">Nhóm sản phẩm {indexGroup + 1}</td>
                                          </tr>
                                          <tr>
                                            <td>Thuộc tính</td>
                                            <td><input type="text" name="title" required onChange={(e) => changeFieldOptionTitle(e, indexGroup, indexProduct)} value={itemProduct.product_title ? itemProduct.product_title.title : ''} /></td>
                                            <td>Kiểu</td>
                                            <td>
                                              <select name="datatype" required onChange={(e) => changeFieldOptionTitle(e, indexGroup, indexProduct)} value={itemProduct.product_title ? itemProduct.product_title.datatype : ''}>
                                                <option value={DATATYPE.TEXT}>Chuỗi</option>
                                                <option value={DATATYPE.NUMBER}>Số</option>
                                                <option value={DATATYPE.DATE}>Thời gian</option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Giá trị</td>
                                            <td colSpan="3"><input
                                              value={itemProduct.product_title.datatype == DATATYPE.DATE ? itemProduct.product_value.date_value : itemProduct.product_title.datatype == DATATYPE.TEXT ? itemProduct.product_value.text_value : itemProduct.product_value.number_value}
                                              type={itemProduct.product_title.datatype == DATATYPE.DATE ? "date" : itemProduct.product_title.datatype == DATATYPE.TEXT ? "text" : "number"} 
                                              name={itemProduct.product_title.datatype == DATATYPE.DATE ? "date_value" : itemProduct.product_title.datatype == DATATYPE.TEXT ? "text_value" : "number_value"}
                                              onChange={(e) => changeFieldOptionValue(e, indexGroup, indexProduct)} required /></td>
                                          </tr>
                                          <tr>
                                            <td>Giá thực tế</td>
                                            <td colSpan="3"><input type="number" value={itemProduct.product_value ? itemProduct.product_value.opt_real_price : ''} name="opt_real_price" onChange={(e) => changeFieldOptionValue(e, indexGroup, indexProduct)} required /></td>
                                          </tr>
                                          <tr>
                                            <td>Giá bán</td>
                                            <td colSpan="3"><input type="number" value={itemProduct.product_value ? itemProduct.product_value.opt_sale_price : ''} name="opt_sale_price" onChange={(e) => changeFieldOptionValue(e, indexGroup, indexProduct)} required /></td>
                                          </tr>
                                          <tr>
                                            <td>Số lượng</td>
                                            <td colSpan="3"><input type="text" value={itemProduct.product_value ? itemProduct.product_value.quantity : ''} name="quantity" onChange={(e) => changeFieldOptionValue(e, indexGroup, indexProduct)} required /></td>
                                          </tr>
                                          <tr>
                                            <td>Avatar</td>
                                            <td><input type="file" name="avatar" accept="image/png, image/jpeg"  onChange={(e) => changeFieldOptionValue(e, indexGroup, indexProduct)}  /></td>
                                          </tr>
                                          <tr>
                                            <td>Images</td>
                                            <td><input type="file" name="imgs" accept="image/png, image/jpeg" multiple onChange={(e) => changeFieldOptionValue(e, indexGroup, indexProduct)}  /></td>
                                          </tr>
                                          <tr>
                                            <td colSpan="4"><button className="bg-red-d c-white" onClick={(e) => removeProductOption(e, indexGroup, indexProduct)}><i className="fas fa-minus"></i> Xóa loại sản phẩm</button></td>
                                          </tr>
                                          <tr>
                                            <td colSpan="4"><button className="bg-blue c-white" onClick={(e) => addProductOption(e, indexGroup)}><i className="fas fa-plus"></i> Thêm loại sản phẩm</button></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                  ))
                                }
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="4"><button className="bg-red-d c-white" onClick={(e) => removeGroupOption(e, props.indexGroup)}><i className="fas fa-minus"></i> Xóa nhóm sản phẩm</button></td>
                              </tr>
                            </tbody>
                          </table>
                          </td>
                        </tr>                          
                          )
                        }
                        <tr>
                          <td colSpan="4"><button className="bg-yellow c-white" onClick={addGroupOption}><i className="fas fa-plus"></i> Thêm nhóm sản phẩm</button></td>
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