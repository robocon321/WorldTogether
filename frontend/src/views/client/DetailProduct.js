/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect } from "react";
import currencyFormat from "currency-formatter";
import Slider from "react-slick";
import { loadScript } from "../../utils/fn";
import { DetailProductContext } from "../../contexts/client/DetailProductContext";
import Loading from "../../components/fn/Loading";

const DetailProduct = props => {

  const {suggestSale, findProductByIdValue_SuggestSale, detailProduct, splitImageString} = useContext(DetailProductContext);

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1   
  };

  useEffect(() => {
    console.log(detailProduct);
  }, [detailProduct]);

  useEffect(() => {
    loadScript("../../assets/vendor/bootstrap-5.1.0-dist/js/bootstrap.min.js");
    loadScript("../../assets/vendor/fontawesome-free-5.15.4-web/js/all.min.js");
    loadScript("../../assets/vendor/jquery/jquery-3.6.0.min.js");
    loadScript("../../assets/js/detailProductScript.js");
  });

  if(detailProduct.product_values.length) {
    return (
      <div className="bg-gray detail-product">
      <main>
      <div className="container">
        <section className="breadcrumb ht-2 d-flex" style={{background: "#ebebeb"}}>
          <ul className="d-flex container align-items-center overflow-hidden">
            <li className="px-3"><a href="#">Home</a></li>
            <li className="breadcrumb-arrow"></li>
            <li className="px-3"><a href="#">Category</a></li>
            <li className="breadcrumb-arrow"></li>
            <li className="px-3"><a href="#">Product</a></li>
          </ul>
        </section>
        <section className="bg-white">
          <div className="row p-5">
            <div className="col-5 pe-2">
              <div className="img-selected">
                <img className="s-full" id="img-zoom" src={detailProduct.product_values[0].avatar} alt="Not found" />
              </div>
              <div className="list-img-nonselected d-flex">
                {
                  splitImageString(0).map((item, index) => { 
                    return (
                      <span key={index} className="img-nonselected s-4 m-1 active">
                        <img className="s-full" src={item} alt="Not found" />
                      </span>
                    )
                  })
                }              
              </div>
              <div className="share-socials mt-3">
                <span>Chia sẻ: </span>
                <span><a href="#" className="social-icon s-2 d-inline-block mx-1"><img className="s-full" src="../assets/images/facebook.png" alt="Not found" /></a></span>
                <span><a href="#" className="social-icon s-2 d-inline-block mx-1"><img className="s-full" src="../assets/images/messenger.png" alt="Not found" /></a></span>
                <span><a href="#" className="social-icon s-2 d-inline-block mx-1"><img className="s-full" src="../assets/images/pinerest.png" alt="Not found" /></a></span>
                <span><a href="#" className="social-icon s-2 d-inline-block mx-1"><img className="s-full" src="../assets/images/twitter.png" alt="Not found" /></a></span>
                <span><a href="#" className="social-icon s-2 d-inline-block mx-1"><img className="s-full" src="../assets/images/copy.png" alt="Not found" /></a></span>
                <a href="#"><span className="heart ms-5 s-2 d-inline-block me-2"><img className="s-full" src="../assets/images/heart.png" alt="Not found"/></span>Đã thích</a>
              </div>
            </div>
            <div className="col-7 ps-2">
              <p className="intro-detail mb-1"><span>Thương hiệu: </span><a href="#">OEM</a> | <span>Đứng thứ 3 trong <a href="#">Top 1000 Flashcards Cho bé bán chạy tháng này</a></span></p>
              <p className="title-detail mb-1">{detailProduct.product.title}</p>
              <div className="rating d-flex align-items-center">
                <div className="star-ratings me-3">
                  <div className="fill-ratings" style={{width: "50%"}}>
                    <span>★★★★★</span>
                  </div>
                  <div className="empty-ratings">
                    <span>★★★★★</span>
                  </div>
                </div>  
                <a href="#">(Xem 112 đánh giá)</a>
                <span className="px-2">|</span>
                <span> Đã bán 394</span>
              </div>
              <div className="row">
                <div className="col-7">
                  <div className="price d-flex align-items-center">
                    <span className="current-price s-vlarge me-4">{currencyFormat.format(detailProduct.product_values[0].opt_sale_price, {locale: "vi-VN"})}</span>
                    <span className="real-price s-big me-2">{currencyFormat.format(detailProduct.product_values[0].opt_real_price, {locale: "vi-VN"})}</span>
                    <span className="discount s-normal">
                    {`${-parseInt((detailProduct.product_values[0].opt_real_price - detailProduct.product_values[0].opt_sale_price) * 100 / detailProduct.product_values[0].opt_real_price)}%`}
                    </span>
                  </div>
                  <div className="discount-code p-3">
                    <p className="mb-0">1 Mã giảm giá</p>
                    <a className="py-2 d-inline-block" href="#"><button>Giảm 25K</button></a>
                  </div>
                  <div className="amount my-2 d-flex p-3">
                    <input type="button" defaultValue="-" />
                    <input type="text" defaultValue="1" />
                    <input type="button" defaultValue="+" />
                  </div>
                  <button className="buy mt-5">Chọn mua</button>  
                </div>
                <div className="col-5">
                  <div className="wrap p-3">
                    <div className="shop">
                      <div className="title-shop mb-4">
                        <div className="img-shop s-4 d-inline-block">
                          <img className="s-full" src="../assets/images/shop.jpg" alt="Not found" />
                        </div>
                        <span className="name-shop ms-3"><b>MẸ VIỆT SHOP HN</b></span>
                      </div>
                      <div className="score-shop row mb-4">
                        <div className="rating-shop col-4 d-flex flex-column align-items-center"><span>4.8/5</span><span>905</span></div>
                        <div className="follow-shop col-4 d-flex flex-column align-items-center"><span>198</span><span>Theo dõi</span></div>
                        <div className="feedback-shop col-4 d-flex flex-column align-items-center"><span>89%</span><span>Phản hồi</span></div>
                      </div>
                      <div className="btn-shop d-flex justify-content-between mb-4">
                        <button><i className="fas fa-home"></i> Xem shop</button>
                        <button><i className="fas fa-plus"></i> Theo dõi</button>
                      </div>
                      <div className="insurance mb-4 py-2 px-2">
                        <p className="mb-0">Thời gian bảo hành</p>
                        <p className="mb-0">Bảo hành trọn đời</p>
                      </div>
                      <div className="policies row">
                        <div className="policy col-4 p-0 d-flex flex-column align-items-center">
                          <div className="img-policy s-2">
                            <img className="s-full" src="../assets/images/protect.png" alt="Not found" />
                          </div>
                          <span>Hoàn tiền</span>
                          <span><b>111%</b></span>
                          <span>hàng giả</span>
                        </div>
                        <div className="policy col-4 p-0 d-flex flex-column align-items-center">
                          <div className="img-policy s-2">
                            <img className="s-full" src="../assets/images/check.png" alt="Not found" />
                          </div>
                          <span>Mở hợp</span>
                          <span><b>kiểm tra</b></span>
                          <span>nhận hàng</span>
                        </div>
                        <div className="policy col-4 p-0 d-flex flex-column align-items-center mb-4">
                          <div className="img-policy s-2">
                            <img className="s-full" src="../assets/images/return.png" alt="Not found" />
                          </div>
                          <span>Đổi trả trong</span>
                          <span><b>30 ngày</b></span>
                          <span>nếu sp lỗi</span>
                        </div>                
                      </div>  
                    </div>
                    <div className="compare d-flex justify-content-between align-items-center p-2">
                      <div className="compare-info">
                        <p className="mb-0"><b>1 nhà bán khác</b></p>
                        <p className="mb-0">Giá từ: 180.000 đ</p>
                      </div>
                      <button className="p-2">So sánh</button>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="same-product bg-white p-4 my-3 bd-radius-5">
          <div className="title">
            <h3>Sản phẩm tương tự</h3>
          </div>
          <Slider className="flash-product" {...settings}>
        {
          suggestSale.product_values.map((item, index) => {
            const product = findProductByIdValue_SuggestSale(item._id);
            return (
            <a key={index} href={`/sanpham/${product._id}`} className="product-item p-2 d-flex flex-column m-1">
              <img src={item.avatar} />
              <h5 className="text-center p-2">{currencyFormat.format(item.opt_sale_price, {locale: "vi-VN"})}</h5>
              <div className="sold-process"></div>
            </a>
            )
          })
        } 
        </Slider>
        </section>   
        <section className="detail-info bg-white p-4 my-3">
          <div className="title">
            <h3>Thông tin chi tiết</h3>
          </div>        
          <table>
            <tbody>
              <tr>
                <th>Thương hiệu</th>
                <td>OEM</td>
              </tr>
              <tr>
                <th>Xuất xứ</th>
                <td>Việt Nam</td>
              </tr>
              <tr>
                <th>Chất liệu</th>
                <td>Giấy</td>
              </tr>
              <tr>
                <th>Xuất xứ thương hiệu</th>
                <td>Việt Nam</td>
              </tr>
            </tbody>
          </table>
        </section>  
        <section className="description bg-white my-3 p-4">
          <div className="title">
            <h3>Mô tả sản phẩm</h3>
            <div className="content" dangerouslySetInnerHTML={{__html: detailProduct.product.detail}}>
            </div>
          </div>          
        </section> 
        <section className="rating-comment bg-white my-3 p-4">
          <div className="title">
            <h3>Đánh giá - Nhận xét từ khách hàng</h3>
          </div>
          <div className="content mt-5">
            <div className="row">
              <div className="rating-detail col-3 pe-4">
                <div className="d-flex align-items-center">
                  <div className="rating-everage s-vlarge me-3"><b>4.7</b></div>
                  <div className="rating-comment-total">
                    <div className="star-ratings me-3">
                      <div className="fill-ratings" style={{width: "50%"}}>
                        <span>★★★★★</span>
                      </div>
                      <div className="empty-ratings">
                        <span>★★★★★</span>
                      </div>
                    </div> 
                    <div className="total-comment s-small">
                      112 nhận xét
                    </div>   
                  </div>
                </div>
                <div className="rating-amounts my-3">
                  <div className="rating-amount row align-items-center mb-1">
                    <div className="col-3 s-small">5 sao</div>
                    <div className="c-progress col-8">
                      <div className="c-progress-bar" style={{width:"70%"}}></div>
                    </div>
                    <div className="col-1 s-small">86</div>
                  </div>  
                  <div className="rating-amount row align-items-center mb-1">
                    <div className="col-3 s-small">4 sao</div>
                    <div className="c-progress col-8">
                      <div className="c-progress-bar" style={{width:"70%"}}></div>
                    </div>
                    <div className="col-1 s-small">86</div>
                  </div>  
                  <div className="rating-amount row align-items-center mb-1">
                    <div className="col-3 s-small">3 sao</div>
                    <div className="c-progress col-8">
                      <div className="c-progress-bar" style={{width:"70%"}}></div>
                    </div>
                    <div className="col-1 s-small">86</div>
                  </div>  
                  <div className="rating-amount row align-items-center mb-1">
                    <div className="col-3 s-small">2 sao</div>
                    <div className="c-progress col-8">
                      <div className="c-progress-bar" style={{width:"70%"}}></div>
                    </div>
                    <div className="col-1 s-small">86</div>
                  </div>  
                  <div className="rating-amount row align-items-center mb-1">
                    <div className="col-3 s-small">1 sao</div>
                    <div className="c-progress col-8">
                      <div className="c-progress-bar" style={{width:"70%"}}></div>
                    </div>
                    <div className="col-1 s-small">86</div>
                  </div>  

                </div>
              </div>
              <div className="all-img filter-comment col-9 ps-3">
                <div><b>Tất cả hình ảnh (17)</b></div>
                <div className="row pt-3">
                  <div className="col-2 pe-1">
                    <div className="col-2 ht-10 s-wfull" style={{background: "url(../assets/images/comment_1.jpg)"}}></div>
                  </div>
                  <div className="col-2 pe-1">
                    <div className="col-2 ht-10 s-wfull" style={{background: "url(../assets/images/comment_2.jpg)"}}></div>
                  </div>
                  <div className="col-2 pe-1">
                    <div className="col-2 ht-10 s-wfull" style={{background: "url(../assets/images/comment_3.jpg)"}}></div>
                  </div>
                  <div className="col-2 pe-1">
                    <div className="col-2 ht-10 s-wfull" style={{background: "url(../assets/images/comment_1.jpg)"}}></div>
                  </div>
                  <div className="col-2 pe-1">
                    <div className="col-2 ht-10 s-wfull" style={{background: "url(../assets/images/comment_1.jpg)"}}></div>
                  </div>
                </div>
                <div className="filter d-flex mt-3 align-items-center">
                  <div className="title-filter me-3">Lọc xem theo: </div>
                  <div className="condition-filter">Mới nhất</div>
                  <div className="condition-filter">Có hình ảnh</div>
                  <div className="condition-filter">Đã mua</div>
                  <div className="condition-filter">5 sao</div>
                  <div className="condition-filter">4 sao</div>
                  <div className="condition-filter">3 sao</div>
                  <div className="condition-filter">2 sao</div>
                  <div className="condition-filter">1 sao</div>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="user-comment col-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-user-comment s-4 me-2"></div>
                  <div className="info-user-comment">
                    <div className="name-user"><b>Bùi Thị Thanh Hồng</b></div>
                    <div className="time-from">Đã tham gia 3 năm</div>    
                  </div>
                </div>
                <div className="written mt-3"><span><i className="far fa-thumbs-up"></i> Đã viết: </span>125 Đánh giá</div>
                <div className="received"><span><i className="far fa-comment"></i> Đã nhận: </span>66 Lượt cảm ơn</div>                
              </div>
              <div className="content-comment col-9">
                <div className="d-flex align-items-center">
                  <div className="star-ratings me-3">
                    <div className="fill-ratings" style={{width: "100%"}}>
                      <span>★★★★★</span>
                    </div>
                    <div className="empty-ratings">
                      <span>★★★★★</span>
                    </div>
                  </div> 
                  <div><b>Cực kì hài lòng</b></div>  
                </div>
                <div className="text-comment s-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit cum consequatur sit doloremque fuga aut autem excepturi? Aperiam eum fugiat architecto ad quos explicabo optio expedita, exercitationem magni ratione.
                </div>
                <div className="img-comment">
                  <img src="../assets/images/product_4.jpg" alt="Not found" />
                </div>
                <div className="style-blur d-flex">
                  <div className="time-comment">Nhận xét vào 04/08/2021 </div>
                  <div className="mx-3"> | </div>
                  <div className="used-from">Đã dùng 1 năm trước</div>
                </div>
                <div className="d-flex response mt-2">
                  <button className="px-2 py-1 me-3"><i className="far fa-thumbs-up"></i> Hữu ích</button>
                  <button className="px-2 py-1">Gởi trả lời</button>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="user-comment col-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-user-comment s-4 me-2"></div>
                  <div className="info-user-comment">
                    <div className="name-user"><b>Bùi Thị Thanh Hồng</b></div>
                    <div className="time-from">Đã tham gia 3 năm</div>    
                  </div>
                </div>
                <div className="written mt-3"><span><i className="far fa-thumbs-up"></i> Đã viết: </span>125 Đánh giá</div>
                <div className="received"><span><i className="far fa-comment"></i> Đã nhận: </span>66 Lượt cảm ơn</div>                
              </div>
              <div className="content-comment col-9">
                <div className="d-flex align-items-center">
                  <div className="star-ratings me-3">
                    <div className="fill-ratings" style={{width: "100%"}}>
                      <span>★★★★★</span>
                    </div>
                    <div className="empty-ratings">
                      <span>★★★★★</span>
                    </div>
                  </div> 
                  <div><b>Cực kì hài lòng</b></div>  
                </div>
                <div className="text-comment s-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit cum consequatur sit doloremque fuga aut autem excepturi? Aperiam eum fugiat architecto ad quos explicabo optio expedita, exercitationem magni ratione.
                </div>
                <div className="img-comment">
                  <img src="../assets/images/product_4.jpg" alt="Not found" />
                </div>
                <div className="style-blur d-flex">
                  <div className="time-comment">Nhận xét vào 04/08/2021 </div>
                  <div className="mx-3"> | </div>
                  <div className="used-from">Đã dùng 1 năm trước</div>
                </div>
                <div className="d-flex response mt-2">
                  <button className="px-2 py-1 me-3"><i className="far fa-thumbs-up"></i> Hữu ích</button>
                  <button className="px-2 py-1">Gởi trả lời</button>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="user-comment col-3">
                <div className="d-flex align-items-center">
                  <div className="avatar-user-comment s-4 me-2"></div>
                  <div className="info-user-comment">
                    <div className="name-user"><b>Bùi Thị Thanh Hồng</b></div>
                    <div className="time-from">Đã tham gia 3 năm</div>    
                  </div>
                </div>
                <div className="written mt-3"><span><i className="far fa-thumbs-up"></i> Đã viết: </span>125 Đánh giá</div>
                <div className="received"><span><i className="far fa-comment"></i> Đã nhận: </span>66 Lượt cảm ơn</div>                
              </div>
              <div className="content-comment col-9">
                <div className="d-flex align-items-center">
                  <div className="star-ratings me-3">
                    <div className="fill-ratings" style={{width: "100%"}}>
                      <span>★★★★★</span>
                    </div>
                    <div className="empty-ratings">
                      <span>★★★★★</span>
                    </div>
                  </div> 
                  <div><b>Cực kì hài lòng</b></div>  
                </div>
                <div className="text-comment s-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit cum consequatur sit doloremque fuga aut autem excepturi? Aperiam eum fugiat architecto ad quos explicabo optio expedita, exercitationem magni ratione.
                </div>
                <div className="img-comment">
                  <img src="../assets/images/product_4.jpg" alt="Not found" />
                </div>
                <div className="style-blur d-flex">
                  <div className="time-comment">Nhận xét vào 04/08/2021 </div>
                  <div className="mx-3"> | </div>
                  <div className="used-from">Đã dùng 1 năm trước</div>
                </div>
                <div className="d-flex response mt-2">
                  <button className="px-2 py-1 me-3"><i className="far fa-thumbs-up"></i> Hữu ích</button>
                  <button className="px-2 py-1">Gởi trả lời</button>
                </div>
              </div>
            </div>
            <hr/>
            <div className="d-flex pagination justify-content-end mt-5">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item" aria-current="page">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div id="result-zoom"></div>  
      </div>
      </main>
    </div>
    )
  } else {
    return <Loading />
  }
}

export default DetailProduct;